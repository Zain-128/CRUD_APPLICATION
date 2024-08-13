import {
  userLoginSchema,
  userRegisterSchema,
} from "../constants/joi.validations.js";
import UserModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import USERDTO from "../DTOS/user.dto.js";
import jwt from "jsonwebtoken";
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
    // Validate Data with JOI schema
    const { error } = userLoginSchema.validate(req.body);

    if (error) {
      return next({
        status: 400,
        message: "Kindly fill all the feilds !",
      });
    }

    const { email, password } = req.body;
    // Now Check the Email should be unique

    const isUserAlreadyExists = await UserModel.findOne({ email }).populate(
      "todos"
    );

    if (!isUserAlreadyExists) {
      return next({
        status: 404,
        message: "User Not Found !",
      });
    }

    //Checking if Password Matches
    const isPasswordMatches = await bcrypt.compare(
      password,
      isUserAlreadyExists?.password
    );

    if (!isPasswordMatches) {
      return next({
        status: 400,
        message: "Invalid Credentials !",
      });
    }

    // Create Token
    const token = await jwt.sign(
      { payload: isUserAlreadyExists?._id },
      process.env.SECRET_KEY,
      { expiresIn: 3600 }
    );

    // Creating DTO

    const userDto = new USERDTO(isUserAlreadyExists);

    // Return the response

    return res.status(201).json({
      message: "User Created Successfully !",
      data: { ...userDto, token },
      success: true,
    });
  } catch (error) {
    return next(error);
  }
};

export { registerUser, loginUser };
