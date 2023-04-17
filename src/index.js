import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
import CountryProvider from './context/CountryProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CountryProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CountryProvider>
);