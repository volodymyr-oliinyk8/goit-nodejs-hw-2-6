const { User } = require("../../model");
const { Unauthorized } = require("http-errors");

const current = async (req, res) => {
  const { _id } = req.user;
  const user = await User.findById(_id);
  if (!user) {
    throw new Unauthorized("Not authorized");
  }
  res.status(200).json({
    email: user.email,
    subscription: user.subscription,
  });
};
module.exports = current;
