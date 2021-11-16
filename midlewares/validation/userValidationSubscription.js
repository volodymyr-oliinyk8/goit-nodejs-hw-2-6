const { BadRequest } = require("http-errors");

const userValidationSubscription = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw new BadRequest("Not found this subscription");
    }
    next();
  };
};
module.exports = userValidationSubscription;
