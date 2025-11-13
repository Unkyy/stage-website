import React, { useState } from 'react';
import axios from 'axios';
import './PaymentPage.css';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  // Format card number as user types
  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\s/g, '').replace(/-/g, '');
    if (value.length > 16) value = value.substring(0, 16);
    
    // Add space every 4 digits
    const formattedValue = value.replace(/(\d{4})/g, '$1 ').trim();
    setCardNumber(formattedValue);
  };

  const validateCardNumber = (number) => {
    // Remove any spaces or dashes
    const cleaned = number.replace(/\s/g, '').replace(/-/g, '');
    // Check if it's all digits and 16 characters
    return /^\d{16}$/.test(cleaned);
  };

  const validateExpiryDate = (date) => {
    // Format MM/YY
    return /^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(date);
  };

  const validateCVV = (cvv) => {
    return /^\d{3}$/.test(cvv);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setSuccess(false);

    // Basic validation
    if (!validateCardNumber(cardNumber)) {
      setMessage('Numéro de carte invalide');
      setLoading(false);
      return;
    }

    if (!validateExpiryDate(expiryDate)) {
      setMessage('Date d\'expiration invalide (format MM/AA)');
      setLoading(false);
      return;
    }

    if (!validateCVV(cvv)) {
      setMessage('CVV invalide');
      setLoading(false);
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      setMessage('Montant invalide');
      setLoading(false);
      return;
    }

    try {
      // Use HTTPS in production
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000';
      
      const response = await axios.post(`${apiUrl}/payment`, {
        card_number: cardNumber.replace(/\s/g, '').replace(/-/g, ''),
        expiry_date: expiryDate,
        cvv: cvv,
        amount: parseFloat(amount),
        currency: 'EUR'
      });

      if (response.data.success) {
        setMessage('Paiement traité avec succès!');
        setSuccess(true);
        // Reset form
        setCardNumber('');
        setExpiryDate('');
        setCvv('');
        setAmount('');
      } else {
        setMessage(response.data.message || 'Erreur lors du traitement du paiement');
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        // Server responded with error status
        setMessage(error.response.data.detail || 'Erreur lors du traitement du paiement. Veuillez réessayer.');
      } else {
        // Network or other error
        setMessage('Erreur de connexion. Veuillez vérifier votre connexion internet et réessayer.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="payment-page">
      <h1>Effectuer un paiement</h1>
      <div className="payment-form-container">
        <form onSubmit={handleSubmit} className="payment-form">
          <div className="form-group">
            <label htmlFor="cardNumber">Numéro de carte :</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="1234 5678 9012 3456"
              maxLength="19"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expiryDate">Date d'expiration :</label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/AA"
                maxLength="5"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="cvv">CVV :</label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                maxLength="3"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="amount">Montant (€) :</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              min="0"
              step="0.01"
              required
            />
          </div>

          {message && (
            <div className={`message ${success ? 'success' : 'error'}`}>
              {message}
            </div>
          )}

          <button type="submit" disabled={loading} className="submit-button">
            {loading ? 'Traitement...' : 'Payer'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
