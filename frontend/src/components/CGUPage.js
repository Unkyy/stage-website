import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    return <div className="max-w-3xl mx-auto px-4 py-8">Chargement...</div>;
  }

  if (error) {
    return <div className="max-w-2xl mx-auto px-4 py-8 text-red-700 bg-red-100 border border-red-300 rounded-md my-8">Erreur lors du chargement des conditions générales d'utilisation</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl text-gray-800 mb-8">Conditions Générales d'Utilisation</h1>
      <div 
        className="text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: cguContent }}
      />
    </div>
  );
};

export default CGUPage;
