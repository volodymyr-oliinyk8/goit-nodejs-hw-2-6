const { Contact } = require("../../model");

const { NotFound, BadRequest } = require("http-errors");

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const { body } = req;
  const { favorite } = body;
  if (!body) throw new BadRequest("missing field favorite");

  const contact = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    {
      new: true,
    }
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
};

module.exports = updateStatusContact;
