const { Contact } = require("../../model");

const { NotFound } = require("http-errors");

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.remove({ _id: contactId });
  if (!contact) {
    throw new NotFound("Not found");
  }
  res.json({
    status: "success",
    code: 200,
    message: "contact deleted",
  });
};

module.exports = removeById;
