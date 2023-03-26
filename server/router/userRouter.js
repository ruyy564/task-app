const Router = require('express');
const UserController = require('../controllers/UserController');
const { body } = require('express-validator');

const router = new Router();

router.post(
  '/registration',
  body('login').not().isEmpty(),
  body('password').not().isEmpty(),
  UserController.registration
);

router.post(
  '/login',
  body('login').not().isEmpty(),
  body('password').not().isEmpty(),
  UserController.login
);

module.exports = router;
