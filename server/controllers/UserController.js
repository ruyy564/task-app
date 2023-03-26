const { validationResult } = require('express-validator');
const UserService = require('../service/UserService');
const ApiError = require('../error/ApiError');

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return next(ApiError.unValidateDataError(errors.errors));
      }
      const { login, password } = req.body;
      const userData = await UserService.registrarion(login, password);

      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return next(ApiError.unValidateDataError(errors.errors));
      }
      const { login, password } = req.body;
      const userData = await UserService.login(login, password);

      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
