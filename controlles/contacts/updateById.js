const contactsOperations = require("../../model/contacts");

const Joi = require("joi");
const { NotFound, BadRequest } = require("http-errors");

const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

const updateById = async (req, res, next) => {
  try {
    const { error } = joiSchema.validate(req.body);
    if (error) {
      throw new BadRequest("missing fields");
    }
    const { contactId } = req.params;

    const contact = await contactsOperations.updateContactById(
      contactId,
      req.body
    );
    if (!contact) {
      throw new NotFound("Not found");
    }
    res.json({
      status: "success",
      code: 200,
      data: {
        contact,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateById;
