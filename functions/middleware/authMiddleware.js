
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.get('/protected', authMiddleware.authenticate, authMiddleware.authorize('admin'), (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;
