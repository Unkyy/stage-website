# FastAPI backend for card payment application
from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from typing import Optional
import uvicorn
import os
from sqlalchemy.orm import Session
from database import engine, Base, get_db, Transaction
from gocardless_config import gocardless_client
import uuid

app = FastAPI(title="Card Payment API", version="1.0.0")

# Create tables on startup
Base.metadata.create_all(bind=engine)

# Models
class PaymentRequest(BaseModel):
    amount: float
    currency: str = "EUR"
    # For GoCardless, we'll use mandate_id instead of card details
    mandate_id: Optional[str] = None
    card_number: Optional[str] = None
    expiry_date: Optional[str] = None
    cvv: Optional[str] = None

class PaymentResponse(BaseModel):
    success: bool
    message: str
    transaction_id: Optional[str] = None
    gocardless_payment_id: Optional[str] = None

class CGUResponse(BaseModel):
    title: str
    content: str

# Routes
@app.get("/")
async def root():
    return {"message": "Welcome to the Card Payment API"}

@app.post("/payment", response_model=PaymentResponse)
async def process_payment(payment: PaymentRequest, db: Session = Depends(get_db)):
    try:
        # Generate a unique transaction ID
        transaction_id = f"txn_{uuid.uuid4().hex[:10]}"
        
        if payment.mandate_id:
            # Process payment using GoCardless mandate
            gocardless_payment = gocardless_client.payments.create(
                params={
                    "amount": int(payment.amount * 100),  # Amount in cents
                    "currency": payment.currency,
                    "description": "Payment via GoCardless",
                    "links": {
                        "mandate": payment.mandate_id
                    }
                }
            )
            
            # Save transaction to database
            db_transaction = Transaction(
                amount=payment.amount,
                currency=payment.currency,
                transaction_id=transaction_id,
                gocardless_payment_id=gocardless_payment.id,
                gocardless_mandate_id=payment.mandate_id,
                success=True
            )
            
            db.add(db_transaction)
            db.commit()
            db.refresh(db_transaction)
            
            return PaymentResponse(
                success=True,
                message="Payment processed successfully via GoCardless",
                transaction_id=transaction_id,
                gocardless_payment_id=gocardless_payment.id
            )
        else:
            # Traditional card payment (fallback)
            # Basic validation
            if payment.card_number and (len(payment.card_number) != 16 or not payment.card_number.isdigit()):
                raise HTTPException(status_code=400, detail="Invalid card number")
            
            if payment.cvv and (len(payment.cvv) != 3 or not payment.cvv.isdigit()):
                raise HTTPException(status_code=400, detail="Invalid CVV")
            
            # Simulate processing
            # In a real implementation, you'd send this to a payment gateway
            
            # Save transaction to database
            db_transaction = Transaction(
                card_number=payment.card_number,
                expiry_date=payment.expiry_date,
                cvv=payment.cvv,
                amount=payment.amount,
                currency=payment.currency,
                transaction_id=transaction_id
            )
            
            db.add(db_transaction)
            db.commit()
            db.refresh(db_transaction)
            
            return PaymentResponse(
                success=True,
                message="Payment processed successfully",
                transaction_id=transaction_id
            )
            
    except Exception as e:
        # Log error and return appropriate response
        print(f"Error processing payment: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Payment processing failed: {str(e)}")

@app.get("/cgu", response_model=CGUResponse)
async def get_cgu():
    return CGUResponse(
        title="Conditions Générales d'Utilisation",
        content="""
        <h2>Conditions Générales d'Utilisation</h2>
        
        <p>Bienvenue sur notre service de paiement par carte bancaire.</p>
        
        <h3>1. Acceptation des Conditions</h3>
        <p>L'utilisation de nos services implique l'acceptation sans réserve de ces conditions générales d'utilisation.</p>
        
        <h3>2. Service de Paiement</h3>
        <p>Nous fournissons une plateforme sécurisée pour effectuer des paiements par carte bancaire.</p>
        
        <h3>3. Responsabilité</h3>
        <p>Nous nous engageons à protéger les données personnelles et financières des utilisateurs conformément aux réglementations en vigueur.</p>
        
        <h3>4. Sécurité</h3>
        <p>Toutes les transactions sont sécurisées par des protocoles de cryptage avancés.</p>
        
        <h3>5. Modifications</h3>
        <p>Nous nous réservons le droit de modifier ces conditions à tout moment.</p>
        """
    )

# Health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    # Check if running behind TLS proxy (like Nginx)
    if os.getenv("HTTPS_PROXY") == "enabled":
        # For production with TLS
        uvicorn.run(
            app, 
            host="0.0.0.0", 
            port=8000,
            ssl_certfile="/etc/nginx/ssl/fullchain.pem",
            ssl_keyfile="/etc/nginx/ssl/privkey.pem"
        )
    else:
        # For development without TLS
        uvicorn.run(app, host="0.0.0.0", port=8000)
