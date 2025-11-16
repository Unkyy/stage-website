import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
          <Link to="/" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors">Accueil</Link>
          <Link to="#activities" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors">Activités</Link>
          <Link to="#planning" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors">Planning</Link>
          <Link to="#staff" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors">Équipe</Link>
          <Link to="#requirements" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors">Conditions</Link>
          <Link to="#gallery" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors">Galerie</Link>
          <Link to="#contact" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors">Contact</Link>
          <Link to="/cgu" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors">CGU</Link>
          <Link to="/payment" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors">Paiement</Link>
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
          <div className="flex flex-col space-y-2">
            <Link to="/" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors py-3 px-4 rounded hover:bg-gray-100">Accueil</Link>
            <Link to="#activities" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors py-3 px-4 rounded hover:bg-gray-100">Activités</Link>
            <Link to="#planning" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors py-3 px-4 rounded hover:bg-gray-100">Planning</Link>
            <Link to="#staff" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors py-3 px-4 rounded hover:bg-gray-100">Équipe</Link>
            <Link to="#requirements" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors py-3 px-4 rounded hover:bg-gray-100">Conditions</Link>
            <Link to="#gallery" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors py-3 px-4 rounded hover:bg-gray-100">Galerie</Link>
            <Link to="#contact" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors py-3 px-4 rounded hover:bg-gray-100">Contact</Link>
            <Link to="/cgu" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors py-3 px-4 rounded hover:bg-gray-100">CGU</Link>
            <Link to="/payment" className="no-underline text-green-600 font-bold hover:text-green-800 transition-colors py-3 px-4 rounded hover:bg-gray-100">Paiement</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Menu;
