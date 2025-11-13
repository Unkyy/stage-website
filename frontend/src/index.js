import React from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('Failed to find the root element for React hydration');
  throw new Error('Root element not found');
}

if(rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App />);
} else {
  const root = createRoot(rootElement);
  root.render(<App />);
}