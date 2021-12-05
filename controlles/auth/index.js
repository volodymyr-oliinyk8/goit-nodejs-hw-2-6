const login = require("./login");
const signup = require("./signup");
const logout = require("./logout");
const current = require("./current");
const updateSubscription = require("./updateSubscription");
const updateAvatars = require("./updateAvatars");
const verify = require("./verify");
const repeatVerifyMail = require("./repeatVerifyMail");

module.exports = {
  login,
  signup,
  logout,
  current,
  updateSubscription,
  updateAvatars,
  verify,
  repeatVerifyMail,
};
