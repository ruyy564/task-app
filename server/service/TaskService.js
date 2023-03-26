const ApiError = require('../error/ApiError');
const { Task } = require('../models');
const TaskDto = require('../dtos/TaskDto');

class TaskService {
  async getTasks(limit = 10, page = 1, sortedBy = 'name', direction = 'ASC') {
    const offset = page * limit - limit;
    const tasks = await Task.findAndCountAll({
      limit,
      offset,
      order: [[sortedBy, direction]],
    });
    const tasksDto = tasks.rows.map((task) => new TaskDto(task));

    return {
      count: tasks.count,
      rows: tasksDto,
    };
  }

  async addTask(name, email, text) {
    const task = await Task.create({ name, email, text });
    const taskDto = new TaskDto(task);

    return taskDto;
  }

  async updateTask(uuid, taskData) {
    const findTask = await Task.findOne({ where: { uuid: uuid } });

    if (!findTask) {
      throw ApiError.unValidateDataError();
    }
    const isUpdated = findTask.isUpdated || findTask.text !== taskData.text;
    const task = await Task.upsert(
      { ...taskData, isUpdated },
      { where: { uuid } }
    );
    const taskDto = new TaskDto(task[0]);

    return taskDto;
  }

  async deleteTask(uuid) {
    const findTask = await Task.findOne({ where: { uuid: uuid } });

    if (!findTask) {
      throw ApiError.unValidateDataError();
    }

    return await Task.destroy({ where: { uuid } });
  }
}

module.exports = new TaskService();
