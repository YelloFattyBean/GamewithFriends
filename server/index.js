/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const socket = require('socket.io');
const Schedule = require('../models/Schedule');
const authRoute = require('./routes/auth');
const schedRoute = require('./routes/schedule');
const userRoute = require('./routes/user');
// eslint-disable-next-line no-unused-vars
const discordStrategy = require('./discordstrategy');

const app = express();
const PORT = 3000;
const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening at: ${PORT}`);
});

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
app.use('/api/schedule', schedRoute);
app.use('/api/user', userRoute);
app.use('/auth', authRoute);

app.patch('/api/schedule/:id', (req, res) => {
  const {
    startDate, endDate, title, userName,
  } = req.body;
  Schedule.update(
    {
      startDate,
      endDate,
      title,
      userName,
    }, {
      where: { id: req.params.id },
    },
  )
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

app.delete('/api/schedule/:id', async (req, res) => {
  const Id = req.params.id;
  const schedule = await Schedule.findOne({ where: { id: `${Id}` } }).catch((err) => {
    console.log(err);
  });
  if (!schedule) {
    console.log('err');
  }
  schedule.destroy()
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

const io = socket(server);

// eslint-disable-next-line no-shadow
io.on('connection', (socket) => {
  console.log('made socket connection', socket.id);
});

module.exports = app;
