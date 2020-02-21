const express = require('express');
const router = express.Router();

const Register = require('../controllers/register');
const Login = require('../controllers/login');
const availableUsername = require('../controllers/functions/availableUsername');
const availableEmail = require('../controllers/functions/availableEmail');
const decodeToken = require('../controllers/functions/decodeToken');
const checkConfirmToken = require('../controllers/functions/checkConfirmToken');
const sendResetEmail = require('../controllers/functions/sendResetEmail');
const resetPassword = require('../controllers/resetPassword');

router.post('/login', Login);
router.post('/register', Register);
router.post('/availableEmail',availableEmail);
router.post('/availableUsername',availableUsername);
router.post('/decodeToken', decodeToken);
router.post('/confirmEmail', checkConfirmToken);
router.post('/sendResetEmail', sendResetEmail);
router.post('/resetPassword', resetPassword);

module.exports = router;