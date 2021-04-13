/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/connection');

const PORT = 3000;

const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/schedule', (req, res) => {
  const sql = 'SELECT * from schedule';
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      res.send(data);
    }
  });
});

app.post('/api/schedule', (req, res) => {
  const params = [req.body.startDate, req.body.endDate, req.body.title, req.body.userName];
  const sql = 'INSERT INTO schedule (startDate, endDate, title, userName) VALUES (?, ?, ?, ?)';
  db.query(sql, params, (err, data) => {
    if (err) {
      res.send(err).status(500);
    } else {
      res.send(data);
    }
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening at: ${PORT}`);
});

module.exports = app;
