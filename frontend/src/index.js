import React from 'react';
import {hydrateRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import { hydrate } from 'react-dom';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('Failed to find the root element for React hydration');
  throw new Error('Root element not found');
}

const root  = hydrateRoot(
  document.getElementById('root'),
  <App />
);


root.render(
  <App />
);
