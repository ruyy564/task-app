class TaskDto {
  constructor(model) {
    this.uuid = model.uuid;
    this.email = model.email;
    this.name = model.name;
    this.text = model.text;
    this.isComplited = model.isComplited;
    this.isUpdated = model.isUpdated;
  }
}

module.exports = TaskDto;
