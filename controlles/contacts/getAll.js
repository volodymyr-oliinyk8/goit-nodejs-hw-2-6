const contactsOperations = require("../../model/contacts");

const getAll = async (_, res, next) => {
  try {
    const contacts = await contactsOperations.getAll();
    res.json({
      status: "success",
      code: 200,
      data: {
        contacts,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
