const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Change the route for creating a user to use the register function
router.post('/register', userController.register);

router.get('/', userController.findAllUsers);
router.get('/:id', userController.findUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
