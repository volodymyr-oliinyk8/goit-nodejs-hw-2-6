const express = require("express");

const ctrl = require("../../controlles/contacts");
const { JoiSchema, JoiSchemaFavorite } = require("../../model/contact");
const {
  contactValidation,
  contactValidationFavorite,
  controllerWrapper,
  authenticate,
} = require("../../midlewares/validation");

const router = express.Router();

router.get("/", controllerWrapper(ctrl.getAll));

router.get("/:contactId", controllerWrapper(ctrl.getById));

router.post(
  "/",
  authenticate,
  contactValidation(JoiSchema),
  controllerWrapper(ctrl.add)
);

router.delete("/:contactId", controllerWrapper(ctrl.removeById));

router.put(
  "/:contactId",
  contactValidation(JoiSchema),
  controllerWrapper(ctrl.updateById)
);

router.patch(
  "/:contactId/favorite",
  contactValidationFavorite(JoiSchemaFavorite),
  controllerWrapper(ctrl.updateStatusContact)
);

module.exports = router;
