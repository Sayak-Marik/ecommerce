const Product = require('../models/product')
const getCart = async (req, res) => {
    try {
        const products = await Product.findAll({where: {is_added: true}});
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};
module.exports = { getCart };