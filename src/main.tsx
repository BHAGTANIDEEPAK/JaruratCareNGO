// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure 'react-dom/client' is used for React 18
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
