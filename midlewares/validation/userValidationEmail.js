const { BadRequest } = require("http-errors");

const userValidationEmail = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw new BadRequest("missing required field email");
    }
    next();
  };
};
module.exports = userValidationEmail;
