const { User } = require("../../model");
const { Unauthorized } = require("http-errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new Unauthorized("Email or password is wrong");
  }
  const compareResult = bcrypt.compareSync(password, user.password);
  if (!compareResult) {
    throw new Unauthorized("Email or password is wrong");
  }
  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  await User.findByIdAndUpdate(user._id, { token });
  res.status(200).json({
    status: "success",
    code: 200,
    token: token,
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
};

module.exports = login;
