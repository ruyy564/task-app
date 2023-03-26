class UserDto {
  constructor(model) {
    this.uuid = model.uuid;
    this.login = model.login;
  }
}

module.exports = UserDto;
