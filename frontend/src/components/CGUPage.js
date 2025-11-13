import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CGUPage.css';

const CGUPage = () => {
  const [cguContent, setCGUContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCGU = async () => {
      try {
        const response = await axios.get('http://localhost:8000/cgu');
        setCGUContent(response.data.content);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching CGU:', err);
        setError('Erreur lors du chargement des conditions générales d\'utilisation');
        setLoading(false);
      }
    };

    fetchCGU();
  }, []);

  if (loading) {
    return <div className="cgu-page">Chargement...</div>;
  }

  if (error) {
    return <div className="cgu-page error">{error}</div>;
  }

  return (
    <div className="cgu-page">
      <h1>Conditions Générales d'Utilisation</h1>
      <div 
        className="cgu-content"
        dangerouslySetInnerHTML={{ __html: cguContent }}
      />
    </div>
  );
};

export default CGUPage;
