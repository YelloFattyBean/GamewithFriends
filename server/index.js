/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const authRoute = require('./routes/auth');
// eslint-disable-next-line no-unused-vars
const discordStrategy = require('./discordstrategy');
const Schedule = require('../models/Schedule');

const PORT = 3000;

const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(session({
  secret: 'anything',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 86400000,
  },
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/auth', authRoute);

app.get('/api/schedule', (req, res) => {
  Schedule.findAll()
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(418);
    });
});

app.post('/api/schedule', (req, res) => {
  const {
    startDate, endDate, title, userName,
  } = req.body;
  Schedule.create({
    startDate,
    endDate,
    title,
    userName,
  })
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening at: ${PORT}`);
});

module.exports = app;
