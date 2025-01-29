'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('password123', 10); // Example password hash

    await queryInterface.bulkInsert('Users', [{
      name: 'John Doe',
      email: 'john@example.com',
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jane Doe',
      email: 'jane@example.com',
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
