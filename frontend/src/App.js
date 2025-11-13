import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CGUPage from './components/CGUPage';
import HomePage from './components/HomePage';
import PaymentPage from './components/PaymentPage';
import './App.css';

// Import hydration components
import { HydrationProvider } from './components/HydrationProvider';

function App() {
  return (
    <HydrationProvider>
      <Router>
        <div className="App">
          <nav className="navbar">
            <Link to="/" className="nav-link">Accueil</Link>
            <Link to="/PaymentPage" className="nav-link">card</Link>
            <Link to="/cgu" className="nav-link">CGU</Link>
          </nav>
          <main className="main-content">
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
