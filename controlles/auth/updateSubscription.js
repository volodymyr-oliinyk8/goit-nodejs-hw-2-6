const { User } = require("../../model");
const { Unauthorized } = require("http-errors");

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;
  const user = await User.findById(_id);
  if (!user) {
    throw new Unauthorized("Not authorized");
  }
  await User.findByIdAndUpdate(user._id, { subscription });
  res.status(200).json({
    status: "success",
    code: 200,
    subscription,
  });
};

module.exports = updateSubscription;
