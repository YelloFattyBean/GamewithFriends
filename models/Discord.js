const Sequelize = require('sequelize');
const db = require('../database/connection');

const User = db.define('user', {
  discordId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  discriminator: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  accessToken: {
    type: Sequelize.STRING,
    allowNull: false,
  },
},
{
  timestamps: false,
});

module.exports = User;
