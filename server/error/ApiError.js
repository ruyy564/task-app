class ApiError extends Error {
  constructor(status, message, errors) {
    super();
    this.status = status;
    this.message = message;
    this.errors = errors;
  }

  static unauthorizedError() {
    return new ApiError(401, 'Пользователь не авторизован');
  }

  static unValidateDataError(errors) {
    return new ApiError(404, 'Введены некорректные данные', errors);
  }

  static badRequest(message) {
    return new ApiError(404, message);
  }

  static forbidden(message) {
    return new ApiError(403, message);
  }

  static internal(message) {
    return new ApiError(500, message);
  }
}

module.exports = ApiError;
