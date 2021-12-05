const { User } = require("../../model");
const { BadRequest } = require("http-errors");
const sendMail = require("../../helpers");

const repeatVerifyMail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (user.verify) {
    throw new BadRequest("Verification has already been passed");
  }
  const mail = {
    to: email,
    subject: "Подтверждение регистрации",
    html: `<a href="http:localhost:3000/users/verify/${user.verificationToken}">Нажмите для подтверждения email</a>`,
  };
  await sendMail(mail);
  res.status(200).json({
    message: "Verification email sent",
  });
};

module.exports = repeatVerifyMail;
