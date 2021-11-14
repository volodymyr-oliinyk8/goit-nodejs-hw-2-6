const express = require("express");

const router = express.Router();
const {
  contactValidation,
  //   contactValidationFavorite,
  controllerWrapper,
} = require("../../midlewares/validation");

const { userJoiSchema } = require("../../model/user");

const ctrl = require("../../controlles/auth");

router.post(
  "/signup",
  contactValidation(userJoiSchema),
  controllerWrapper(ctrl.signup)
);
router.post(
  "/login",
  contactValidation(userJoiSchema),
  controllerWrapper(ctrl.login)
);
router.post("/logout", controllerWrapper(ctrl.logout));
router.get("/current", controllerWrapper(ctrl.current));

module.exports = router;
