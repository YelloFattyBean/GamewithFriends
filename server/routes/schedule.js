/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const router = require('express').Router();
const Schedule = require('../../models/Schedule');

router.get('/', (req, res) => {
  Schedule.findAll()
    .then((data) => res.send(data))
    .catch((err) => {
      console.log(err);
      res.sendStatus(418);
    });
});

router.post('/', (req, res) => {
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

module.exports = router;
