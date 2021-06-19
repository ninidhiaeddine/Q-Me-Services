// dependencies:
const Validator = require("./validator");
const Joi = require("joi");

class GuestValidator extends Validator {
  // define schema:
  schema = Joi.object().keys({
    name: Joi.string().max(20).required(),
    phoneNumber: Joi.string().max(20).required(),
  });
}

module.exports = GuestValidator;
