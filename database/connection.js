/* eslint-disable no-console */
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'schedules',
});

connection.connect((err) => {
  if (err) {
    console.log(`Error connecting: ${err}`);
  }
  console.log('connected');
});

module.exports = connection;
