const boomErrorHandler = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
};

const validationError = (err, req, res, next) => {
  if (err.errors[0].type === 'unique violation') {
    res.status(409).json({
      type: err.errors[0].type,
      message: err.errors[0].message,
      detail: err.parent.detail,
    });
  } else {
    next(err);
  }
};

const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
};

export { boomErrorHandler, validationError, errorHandler };
