const Sequelize = require('sequelize');
const db = require('../database/connection');

const Schedule = db.define('schedule', {
  startDate: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  endDate: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
},
{
  timestamps: false,
});

module.exports = Schedule;
