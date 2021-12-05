const { Conflict } = require("http-errors");
const bcrypt = require("bcryptjs");
const { nanoid } = require("nanoid");
const { User } = require("../../model");
const sendMail = require("../../helpers");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Email in use");
  }
  const verificationToken = nanoid();
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(11));
  const newUser = await User.create({
    email,
    password: hashPassword,
    verificationToken,
  });
  const mail = {
    to: email,
    subject: "Подтверждение регистрации",
    html: `<a href="http:localhost:3000/users/verify/${verificationToken}">Нажмите для подтверждения email</a>`,
  };
  await sendMail(mail);
  res.status(201).json({
    status: "success",
    code: 200,
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};
module.exports = signup;
