'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      name: 'Product 1',
      price: 100,
      description: 'Description for Product 1',
      image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Product 2',
      price: 200,
      description: 'Description for Product 2',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800',
      is_added: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
