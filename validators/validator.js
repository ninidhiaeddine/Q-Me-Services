// dependency:
const Joi = require("joi");

class Validator {
  schema;

  constructor(schema) {
    this.schema = schema;
  }

  validate(req) {
    return this.schema.validate(req.body);
  }
}

module.exports = Validator;
