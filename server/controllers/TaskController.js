const { validationResult } = require('express-validator');
const TaskService = require('../service/TaskService');
const ApiError = require('../error/ApiError');

class TaskController {
  async getTasks(req, res, next) {
    try {
      const { limit, page, sortedBy, direction } = req.query;
      const tasksData = await TaskService.getTasks(
        limit,
        page,
        sortedBy,
        direction
      );

      return res.json(tasksData);
    } catch (e) {
      next(e);
    }
  }

  async addTask(req, res, next) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return next(ApiError.unValidateDataError(errors.errors));
      }
      const { name, email, text } = req.body;
      const taskData = await TaskService.addTask(name, email, text);

      return res.json(taskData);
    } catch (e) {
      next(e);
    }
  }

  async updateTask(req, res, next) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return next(ApiError.unValidateDataError(errors.errors));
      }
      const { uuid } = req.params;
      const { ...task } = req.body;
      const taskData = await TaskService.updateTask(uuid, task);

      return res.json(taskData);
    } catch (e) {
      next(e);
    }
  }

  async deleteTask(req, res, next) {
    try {
      const { uuid } = req.params;
      const countDeleted = await TaskService.deleteTask(uuid);

      return res.json(countDeleted);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new TaskController();
