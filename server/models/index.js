const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
  uuid: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  login: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
});

const Task = sequelize.define('Task', {
  uuid: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  text: { type: DataTypes.STRING },
  isComplited: { type: DataTypes.BOOLEAN, defaultValue: false },
  isUpdated: { type: DataTypes.BOOLEAN, defaultValue: false },
});

module.exports = {
  User,
  Task,
};
