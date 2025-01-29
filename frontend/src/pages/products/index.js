import React from 'react';
import '../../styles.css'

const products = [
  {
    id: 1,
    name: 'Casual Shirt',
    price: 999,
    image: 'https://via.placeholder.com/150',
    brand: 'Brand A',
  },
  {
    id: 2,
    name: 'Sneakers',
    price: 1999,
    image: 'https://via.placeholder.com/150',
    brand: 'Brand B',
  },
  {
    id: 3,
    name: 'Denim Jeans',
    price: 1299,
    image: 'https://via.placeholder.com/150',
    brand: 'Brand C',
  },
  {
    id: 1,
    name: 'Casual Shirt',
    price: 999,
    image: 'https://via.placeholder.com/150',
    brand: 'Brand A',
  },
  {
    id: 2,
    name: 'Sneakers',
    price: 1999,
    image: 'https://via.placeholder.com/150',
    brand: 'Brand B',
  },
  {
    id: 3,
    name: 'Denim Jeans',
    price: 1299,
    image: 'https://via.placeholder.com/150',
    brand: 'Brand C',
  },
  // Add more products as needed
];

const ProductsPage = () => {
  return (
    <div className="container">
      <h1 className="products-title">Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-brand">{product.brand}</p>
            <p className="product-price">₹{product.price}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
