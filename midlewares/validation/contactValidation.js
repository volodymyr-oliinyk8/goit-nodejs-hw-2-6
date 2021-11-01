const { BadRequest } = require("http-errors");

const contactValidation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      throw new BadRequest("missing required name field");
    }
    next();
  };
};

module.exports = contactValidation;
