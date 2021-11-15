const { Contact } = require("../../model");

const getAll = async (req, res) => {
  const { _id } = req.user;
  const contacts = await Contact.find({ owner: _id });
  res.json({
    status: "success",
    code: 200,
    data: {
      contacts,
    },
  });
};

module.exports = getAll;
