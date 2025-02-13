const express = require("express");

const router = express.Router();
const {
  contactValidation,
  controllerWrapper,
  authenticate,
  userValidationSubscription,
  uploadAvatars,
} = require("../../midlewares/validation");

const { userJoiSchema, JoiSchemaSubscription } = require("../../model/user");

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
router.post("/logout", authenticate, controllerWrapper(ctrl.logout));
router.get("/current", authenticate, controllerWrapper(ctrl.current));
router.patch(
  "/",
  authenticate,
  userValidationSubscription(JoiSchemaSubscription),
  controllerWrapper(ctrl.updateSubscription)
);
router.patch(
  "/avatars",
  authenticate,
  uploadAvatars.single("avatar"),
  controllerWrapper(ctrl.updateAvatars)
);

module.exports = router;
