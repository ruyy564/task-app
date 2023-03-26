const Router = require('express');
const { body } = require('express-validator');
const TaskController = require('../controllers/TaskController');
const AuthMiddleware = require('../middleware/AuthMiddleware');
const router = new Router();

router.get('/', TaskController.getTasks);

router.post(
  '/',
  body('email').isEmail(),
  body('email').not().isEmpty(),
  body('name').not().isEmpty(),
  TaskController.addTask
);

router.put(
  '/:uuid',
  AuthMiddleware,
  body('email').isEmail(),
  body('email').not().isEmpty(),
  body('name').not().isEmpty(),
  TaskController.updateTask
);

router.delete('/:uuid', AuthMiddleware, TaskController.deleteTask);

module.exports = router;
