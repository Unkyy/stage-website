# Card Payment Application

This application consists of a backend built with FastAPI and a frontend built with React. It allows users to make card payments for a trial color and includes a CGU (Conditions Générales d'Utilisation) page.

## Features
- Single page for card payment
- CGU page with terms and conditions
- Backend API with FastAPI
- Frontend UI with React
- Security enhancements with TLS
- PostgreSQL database integration

## Project Structure
- `/backend`: FastAPI backend code
- `/frontend`: React frontend code

## Security Implementation

This application implements security best practices including:

### Transport Layer Security (TLS)
- HTTPS encryption for all communications
- Certificate management for secure connections
- Secure API endpoints

### Data Validation
- Input validation for all user inputs
- Card number validation (Luhn algorithm)
- Expiry date and CVV validation

### Error Handling
- Proper error responses without exposing sensitive information
- Graceful handling of invalid inputs

## Database Integration

The application uses PostgreSQL for data persistence:
- Transactions are stored in the database
- Connection pooling for efficient database access
- Environment-based configuration for database credentials

## Running the Application

### Prerequisites
- Docker and Docker Compose installed

### Quick Start
1. Create a `.env` file based on `.env.example` and set your database credentials
2. Build and start the containers:
   ```bash
   docker-compose up --build
   ```

3. Access the application:
   - Frontend: https://localhost
   - Backend API: https://localhost:8443

### Security Notes
For production use, ensure you:
1. Replace self-signed certificates with valid SSL certificates
2. Configure proper firewall rules
3. Implement rate limiting for API endpoints
4. Add authentication mechanisms as needed
5. Use strong passwords for database access

## Database Schema

The application uses a single table for storing transactions:
- `transactions` table with fields:
  - `id`: Primary key
  - `card_number`: Card number (masked for security)
  - `expiry_date`: Card expiry date
  - `cvv`: Card CVV
  - `gocardless_mandate_id`: GoCardless mandate identifier
  - `gocardless_payment_id`: GoCardless payment identifier
  - `gocardless_customer_id`: GoCardless customer identifier
  - `amount`: Payment amount
  - `currency`: Currency code
  - `transaction_id`: Unique transaction identifier
  - `success`: Payment success status
  - `created_at`: Timestamp of transaction

## GoCardless Integration

This application now supports GoCardless as a payment solution. The integration allows:

1. Direct debit payments using GoCardless mandates
2. Traditional card payments as a fallback
3. Secure storage of GoCardless identifiers in the database

To use GoCardless:
1. Obtain a GoCardless access token from your GoCardless account
2. Set the `GOCARDLESS_ACCESS_TOKEN` environment variable
3. Set the `GOCARDLESS_ENVIRONMENT` to either `sandbox` or `live`
4. When making a payment, include the `mandate_id` in the request body to use GoCardless
5. Traditional card payments are still supported for backward compatibility

The payment endpoint accepts both:
- Mandated payments (via `mandate_id`)
- Card payments (via `card_number`, `expiry_date`, `cvv`)

## Environment Variables

The application uses environment variables for configuration:
- `DB_USER`: Database username
- `DB_PASSWORD`: Database password
- `DB_HOST`: Database host
- `DB_PORT`: Database port
- `DB_NAME`: Database name

Create a `.env` file in the project root to override default values.
