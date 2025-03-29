const express = require('express');
const { authValidationRules, validate } = require('../middleware/validation');

const router = express.Router();

router.post('/login', authValidationRules.login, validate, (req, res) => {
  // ...existing code for login...
  res.status(200).json({ message: 'Login successful' });
});

router.post('/register', authValidationRules.register, validate, (req, res) => {
  // ...existing code for register...
  res.status(201).json({ message: 'Registration successful' });
});

module.exports = router;