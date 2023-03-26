const Router = require('express');
const userRouter = require('./userRouter');
const taskRouter = require('./taskRouter');

const router = new Router();

router.use('/users', userRouter);
router.use('/tasks', taskRouter);

module.exports = router;
