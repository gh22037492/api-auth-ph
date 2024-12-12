const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../db');

const User = sequelize.define('User', {
	  username: {
		      type: DataTypes.STRING,
		      allowNull: false,
		      unique: true,
		    },
	  password: {
		      type: DataTypes.STRING,
		      allowNull: false,
		    },
});

User.beforeCreate(async (user) => {
	  const salt = await bcrypt.genSalt(10);
	  user.password = await bcrypt.hash(user.password, salt);
});

module.exports = User;
