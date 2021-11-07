const express = require("express");

const ctrl = require("../../controlles/contacts");
const { contactSchema } = require("../../midlewares/validation/schema");
const { contactValidation } = require("../../midlewares/validation");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", contactValidation(contactSchema), ctrl.add);

router.delete("/:contactId", ctrl.removeById);

router.put("/:contactId", contactValidation(contactSchema), ctrl.updateById);

module.exports = router;
