const bcrypt = require('bcrypt');

const { User } = require('../models');
const UserDto = require('../dtos/UserDto');
const tokenService = require('./TokenService');
const ApiError = require('../error/ApiError');

class UserService {
  async registrarion(login, password) {
    const person = await User.findOne({ where: { login } });

    if (person) {
      throw ApiError.badRequest('Пользователь уже существует');
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const user = await User.create({ login, password: hashPassword });
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    return {
      ...tokens,
      user: userDto,
    };
  }

  async login(login, password) {
    const person = await User.findOne({ where: { login } });

    if (!person) {
      throw ApiError.unValidateDataError();
    }
    const comparePassword = await bcrypt.compareSync(password, person.password);

    if (!comparePassword) {
      throw ApiError.unValidateDataError();
    }
    const userDto = new UserDto(person);
    const tokens = tokenService.generateTokens({ ...userDto });

    return {
      ...tokens,
      user: userDto,
    };
  }
}

module.exports = new UserService();
