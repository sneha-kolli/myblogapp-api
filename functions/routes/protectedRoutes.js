
const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.send('Protected Route');
});

module.exports = router;
