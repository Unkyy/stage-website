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
    return <div className="h-screen flex items-center justify-center">Chargement...</div>;
  }

  if (error) {
    return <div className="h-screen flex items-center justify-center text-red-700 bg-red-100 border border-red-300 rounded-md my-8 max-w-2xl mx-auto">Erreur lors du chargement des conditions générales d'utilisation</div>;
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-4 py-8 w-full">
        <h1 className="text-3xl text-gray-800 mb-8 text-center">Conditions Générales d'Utilisation</h1>
        <div 
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: cguContent }}
        />
      </div>
    </div>
  );
};

export default CGUPage;
