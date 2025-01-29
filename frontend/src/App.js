import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from '../src/pages/login';
import Register from '../src/pages/register';
import ProductsPage from './pages/products';
import Sidebar from './pages/sidebar';
import CartPage from './pages/cart';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Sidebar />
        <div className='content'>
          <Routes>
            {/* Redirect to /login as the initial route */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            {/* Login page */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
