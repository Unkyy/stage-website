import React, { useState } from 'react';
import { a } from 'react-router-dom';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="max-w-6xl mx-auto bg-gray-50 p-4 border-b border-gray-200">
      <div className="flex justify-between items-center">
        {/* Logo or brand name */}
        <div className="text-green-600 font-bold text-xl">
          Trail Adventures
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors">Accueil</a>
          <a href="#activities" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors">Activités</a>
          <a href="#planning" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors">Planning</a>
          <a href="#staff" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors">Équipe</a>
          <a href="#requirements" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors">Conditions</a>
          <a href="#gallery" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors">Galerie</a>
          <a href="#contact" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors">Contact</a>
          <a href="/cgu" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors">CGU</a>
          <a href="/payment" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors">Paiement</a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-green-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-3">
            <a href="/" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors py-2 px-4 rounded hover:bg-gray-100">Accueil</a>
            <a href="#activities" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors py-2 px-4 rounded hover:bg-gray-100">Activités</a>
            <a href="#planning" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors py-2 px-4 rounded hover:bg-gray-100">Planning</a>
            <a href="#staff" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors py-2 px-4 rounded hover:bg-gray-100">Équipe</a>
            <a href="#requirements" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors py-2 px-4 rounded hover:bg-gray-100">Conditions</a>
            <a href="#gallery" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors py-2 px-4 rounded hover:bg-gray-100">Galerie</a>
            <a href="#contact" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors py-2 px-4 rounded hover:bg-gray-100">Contact</a>
            <a href="/cgu" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors py-2 px-4 rounded hover:bg-gray-100">CGU</a>
            <a href="/payment" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors py-2 px-4 rounded hover:bg-gray-100">Paiement</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Menu;
