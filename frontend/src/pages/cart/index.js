import React, { useState } from 'react';
import '../../styles.css'

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const products = [
    {
      id: 1,
      name: 'Casual Shirt',
      price: 999,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Sneakers',
      price: 1999,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Denim Jeans',
      price: 1299,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Jacket',
      price: 2499,
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="cart-page-container">
      <div className="products-section">
        <h2>Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <div className="cart-section">
        <h2>Cart</h2>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
