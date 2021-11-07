const express = require("express");

const ctrl = require("../../controlles/contacts");
const { JoiSchema } = require("../../model/contact");
const { contactValidation } = require("../../midlewares/validation");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", contactValidation(JoiSchema), ctrl.add);

router.delete("/:contactId", ctrl.removeById);

router.put("/:contactId", contactValidation(JoiSchema), ctrl.updateById);

module.exports = router;
