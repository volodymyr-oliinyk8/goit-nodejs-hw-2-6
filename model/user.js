const { Schema, model } = require("mongoose");
const Joi = require("joi");
const gravatar = require("gravatar");

const userSchema = Schema({
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  token: {
    type: String,
    default: null,
  },
  avatarURL: {
    type: String,
    default: function () {
      return gravatar.url(this.email, {
        s: "200",
        d: "monsterid",
        r: "gravatar",
      });
    },
  },
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, "Verify token is required"],
  },
});

const User = model("user", userSchema);

const userJoiSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
  subscription: Joi.string(),
  token: Joi.string(),
});

const JoiSchemaSubscription = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business").required(),
});
const JoiSchemaEmail = Joi.object({
  email: Joi.string().email().required(),
});

module.exports = { User, userJoiSchema, JoiSchemaSubscription, JoiSchemaEmail };
