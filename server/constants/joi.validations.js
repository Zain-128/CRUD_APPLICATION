import Joi from "joi";

const userRegisterSchema = Joi.object().keys({
  name: Joi.string().required().min(3).max(50),
  email: Joi.string().required().email(),
  password: Joi.string().required(),
  // .pattern
  // //   new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$"),
  // // "Password must be numeric"
  // (),
});

const userLoginSchema = Joi.object().keys({
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});
const addTodoSchema = Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string().required(),
  user: Joi.string().required(),
});

export { userLoginSchema, userRegisterSchema, addTodoSchema };
