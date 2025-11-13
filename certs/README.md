# SSL Certificates

This directory contains SSL certificates for the application.

## Note
For development purposes, self-signed certificates are used. In production, you should replace these with valid SSL certificates from a trusted Certificate Authority.

## Generating Self-Signed Certificates (for development)
```bash
# Generate private key
openssl genrsa -out privkey.pem 2048

# Generate certificate
openssl req -new -x509 -key privkey.pem -out fullchain.pem -days 365
```

## Certificate Structure
- `privkey.pem`: Private key for the certificate
- `fullchain.pem`: Certificate chain including the certificate and any intermediate certificates
