const User = require('../models/user')

// Controller function to get all products
const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

// Export the controller function
module.exports = { getUsers };
