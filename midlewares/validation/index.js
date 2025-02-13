const contactValidation = require("./contactValidation");
const contactValidationFavorite = require("./contactValidation");
const controllerWrapper = require("./controllerWrapper");
const authenticate = require("./authenticate");
const userValidationSubscription = require("./userValidationSubscription");
const uploadAvatars = require("./uploadAvatars");

module.exports = {
  contactValidation,
  contactValidationFavorite,
  controllerWrapper,
  authenticate,
  userValidationSubscription,
  uploadAvatars,
};
