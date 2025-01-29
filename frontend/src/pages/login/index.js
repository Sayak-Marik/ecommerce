import React, { useState } from 'react';
import '../../styles.css'
import loginUser from './api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate()

  const redirectRegister = () => {
    navigate('/register')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    const response = await loginUser({email, password})
    alert('Login successful!')
    localStorage.setItem("token",response.data.token)
    navigate('/products')
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
      <button className="register-btn" onClick={redirectRegister}>
        Don't have an account? Register here
      </button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Login;
