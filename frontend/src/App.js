import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CGUPage from './components/CGUPage';
import HomePage from './pages/HomePage';
import PaymentPage from './pages/PaymentPage';
import Menu from './components/Menu';

function App() {
  return (
      <Router>
        <div className="min-h-screen flex flex-col">
          <Menu />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cgu" element={<CGUPage />} />
              <Route path="/payment" element={<PaymentPage />} />
            </Routes>
          </main>
        </div>
      </Router>
  );
}

export default App;
