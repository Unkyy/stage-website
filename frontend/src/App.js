import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CGUPage from './components/CGUPage';
import HomePage from './components/HomePage';
import PaymentPage from './components/PaymentPage';
// Removed CSS import since we're using Tailwind

// Import hydration components
import { HydrationProvider } from './components/HydrationProvider';

function App() {
  return (
    <HydrationProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <nav className="bg-gray-50 p-4 border-b border-gray-200">
            <Link to="/" className="mx-4 no-underline text-blue-600 font-bold hover:text-blue-800">Accueil</Link>
            <Link to="/PaymentPage" className="mx-4 no-underline text-blue-600 font-bold hover:text-blue-800">card</Link>
            <Link to="/cgu" className="mx-4 no-underline text-blue-600 font-bold hover:text-blue-800">CGU</Link>
          </nav>
          <main className="max-w-3xl mx-auto my-8 px-4 flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cgu" element={<CGUPage />} />
              <Route path="/PaymentPage" element={<PaymentPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </HydrationProvider>
  );
}

export default App;
