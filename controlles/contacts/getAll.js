const { Contact } = require("../../model");

const getAll = async (req, res) => {
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;
  const { _id } = req.user;
  if (!favorite) {
    const contacts = await Contact.find(
      { owner: _id },
      "_id name email phone favorite owner",
      { skip, limit: +limit }
    ).populate("owner", "email");
    res.json({
      status: "success",
      code: 200,
      contacts,
    });
  }
  const contacts = await Contact.find(
    { owner: _id, favorite },
    "_id name email phone favorite owner",
    { skip, limit: +limit }
  ).populate("owner", "email");
  res.json({
    status: "success",
    code: 200,
    contacts,
  });
};

module.exports = getAll;
