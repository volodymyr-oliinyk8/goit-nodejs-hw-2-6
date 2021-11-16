const { Contact } = require("../../model");

const add = async (req, res) => {
  const newContat = { ...req.body, owner: req.user._id };
  const contact = await Contact.create(newContat);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      contact,
    },
  });
};

module.exports = add;
