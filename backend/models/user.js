const bcrypt = require('bcryptjs');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/postgres');

const User = sequelize.define('User', {
email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
},
password: {
    type: DataTypes.STRING,
    allowNull: false,
},
name: {
    type: DataTypes.STRING,
},
});

User.beforeCreate(async (user) => {
user.password = await bcrypt.hash(user.password, 10);
});
User.prototype.validPassword = function (password) {
return bcrypt.compareSync(password, this.password);
};

module.exports = User;
