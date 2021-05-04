/* eslint-disable no-console */
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('discord', 'student', 'student', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => console.log('connected to database'))
  .catch((err) => console.log(`Error: ${err}`));

module.exports = sequelize;
