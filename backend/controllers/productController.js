const Product = require('../models/product')
const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

const getProductById = async (req, res) => {
    const { id } = req.params

    try {
        const product = await Product.findByPk(id)
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch the product' });
    }
};
module.exports = { getProducts, getProductById };
