const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

// GET Profile by Email
router.get('/:email', profileController.getProfile);

module.exports = router;
