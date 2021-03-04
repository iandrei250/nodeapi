//Validation
const Joi = require("@hapi/joi");

//Register Validation

const registerValidation = (data) => {
  const schema = {
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).email().required(),
    password: Joi.string().min(6).required(),
  };

  const validateSchema = Joi.object(schema);
  return validateSchema.validate(data);
};

const loginValidation = (data) => {
  const schema = {
    email: Joi.string().min(6).email().required(),
    password: Joi.string().min(6).required(),
  };

  const validateSchema = Joi.object(schema);
  return validateSchema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
