// src/routes/users.js
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// All routes here start with /api/users
router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.createUser);

module.exports = router;
