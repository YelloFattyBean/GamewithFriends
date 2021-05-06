/* eslint-disable no-console */
const router = require('express').Router();
const User = require('../../models/Discord');

router.get('/', (req, res) => {
  User.findAll()
    .then((data) => res.send(data))
    .catch((err) => {
      console.log(err);
      res.sendStatus(418);
    });
});

module.exports = router;
