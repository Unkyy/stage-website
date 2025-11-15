import React, { useState } from 'react';
import axios from 'axios';

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
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Effectuer un paiement</h1>
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="text-left">
            <label htmlFor="cardNumber" className="block mb-2 font-bold text-gray-700">Numéro de carte :</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="1234 5678 9012 3456"
              maxLength="19"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 text-left">
              <label htmlFor="expiryDate" className="block mb-2 font-bold text-gray-700">Date d'expiration :</label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/AA"
                maxLength="5"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex-1 text-left">
              <label htmlFor="cvv" className="block mb-2 font-bold text-gray-700">CVV :</label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                maxLength="3"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="text-left">
            <label htmlFor="amount" className="block mb-2 font-bold text-gray-700">Montant (€) :</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              min="0"
              step="0.01"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {message && (
            <div className={`p-4 rounded-md text-center ${success ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-red-100 text-red-700 border border-red-300'}`}>
              {message}
            </div>
          )}

          <button type="submit" disabled={loading} className={`py-3 px-6 rounded-md font-medium text-white transition-colors ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}>
            {loading ? 'Traitement...' : 'Payer'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
