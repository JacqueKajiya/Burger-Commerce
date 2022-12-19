import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/userContext';
import { CartProvider } from './context/cartContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
        <App />
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
