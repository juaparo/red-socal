const express = require('express');
const router = express.Router();
// DECLARE CONTROLLERS
const userController = require('../controllers/userController');
// CONTROLLERS
router.get('/', userController.layOut);

router.get('/users/signin', userController.signInView);

router.get('/users/signup', userController.signUpForm);

router.get('/about', userController.about);

module.exports = router;