// const express = require('express');
// const Joi = require('@hapi/joi');

// const registerValidation = data => {
//     const schema = {
//        fullname: Joi.string().min(6).required(),
//         email: Joi.string().min(6).required().email(),
//         password: Joi.string().min(6).required(),
//         confirmpassword: Joi.string().min(6)
//     };
//     return new Joi.ValidationError(data, schema);
// };
// const loginValidation = data => {
//     const schema = {
//         fullname: Joi.string().min(6).required(),
//         email: Joi.string().min(6).required().email(),
//         password: Joi.string().min(6).required(),
       

//     };
//     return Joi.validationError(data, schema);
// }
// module.exports.registerValidation = registerValidation;
// module.exports.loginValidation= loginValidation;

const express = require('express');
const Joi = require('@hapi/joi');

const registerValidation = data => {
  const schema = Joi.object({
    fullname: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().min(6).required()
  });

  return new Promise((resolve, reject) => {
    const { error, value } = schema.validate(data);
    if (error) {
      reject(error.details[0].message);
    }
    resolve(value);
  }).catch(error => {
    throw new Error(error);
  });
};

const loginValidation = data => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  
  });

  return new Promise((resolve, reject) => {
    const { error, value } = schema.validate(data);
    if (error) {
      reject(error.details[0].message);
    }
    resolve(value);
  }).catch(error => {
    throw new Error(error);
  });
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
