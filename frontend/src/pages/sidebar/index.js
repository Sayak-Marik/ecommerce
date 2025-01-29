import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Menu</h2>
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink to="/products" className={({ isActive }) => isActive ? 'active-link' : ''}>Products</NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink to="/cart" className={({ isActive }) => isActive ? 'active-link' : ''}>Cart</NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink to="/profile" className={({ isActive }) => isActive ? 'active-link' : ''}>Profile</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
