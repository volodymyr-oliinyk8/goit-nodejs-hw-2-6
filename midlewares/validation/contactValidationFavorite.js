const { BadRequest } = require("http-errors");

const contactValidationFavorite = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw new BadRequest("missing field favorite");
    }
    next();
  };
};
module.exports = contactValidationFavorite;
