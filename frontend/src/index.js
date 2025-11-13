import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { hydrate } from 'react-dom';

// Import hydration utilities
import { handleHydrationError } from './utils/hydration';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('Failed to find the root element for React hydration');
  throw new Error('Root element not found');
}

const root = ReactDOM.createRoot(rootElement);

// Add error boundary around the root render
try {
  root.render(
    <React.StrictMode>
      hydrate(<App />, document.getElementById('root'))
    </React.StrictMode>
  );
} catch (error) {
  console.error('Error during React hydration:', error);
  handleHydrationError(error);
  // Optionally, you could render an error fallback here
}
