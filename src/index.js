// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Corrected import to match your App.js file
import './index.css'; 

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);