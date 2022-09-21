import './Firebase/Firebase'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CarritoProvider } from './context/CartContext';
import './index.css';
import App from './App';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CarritoProvider>
    <App />
   
  </CarritoProvider>
);
