const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes'); 
const userRoutes = require('./routes/userRoutes')
const cartRoutes = require('./routes/cartRoutes')
require('dotenv').config();

const { Sequelize } = require('sequelize');

// Database configuration (make sure it matches your config file)
const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/postgres');


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use('/api', productRoutes)
app.use('/api', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api',cartRoutes)

app.get('/', (req, res) => {
  res.send('E-commerce API is running');
});

sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully!');
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });
