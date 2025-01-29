const User = require('../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Register User
const registerUser = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Check if the user already exists
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create the user
    const user = await User.create({ email, password, name });
    const { password: _, ...userData } = user.toJSON();

    res.status(201).json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      const isValidPassword = await user.validPassword(password);
      if (!isValidPassword) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
module.exports = { loginUser, registerUser };
