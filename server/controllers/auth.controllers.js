import { userRegisterSchema } from "../constants/joi.validations.js";
import UserModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import USERDTO from "../DTOS/user.dto.js";
const registerUser = async (req, res, next) => {
  try {
    // Validate Data with JOI schema
    const { error } = userRegisterSchema.validate(req.body);

    if (error) {
      return next({
        status: 400,
        message: "Kindly fill all the feilds !",
      });
    }

    const { email, name, password } = req.body;
    // Now Check the Email should be unique

    const isUserAlreadyExists = await UserModel.exists({ email });

    if (isUserAlreadyExists) {
      return next({
        status: 409,
        message: "Email is Already Registered !",
      });
    }
    //Now Hash our Password
    const hashedPassword = await bcrypt.hash(password, 10);

    //   Saving Data into db

    const user = await UserModel.create({
      email,
      name,
      password: hashedPassword,
    });

    // Creating DTO

    const userDto = new USERDTO(user);

    // Return the response

    return res.status(201).json({
      message: "User Created Successfully !",
      data: userDto,
      success: true,
    });
  } catch (error) {
    return next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
  } catch (error) {}
};

export { registerUser, loginUser };
