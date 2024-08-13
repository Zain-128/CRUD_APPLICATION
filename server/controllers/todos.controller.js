import Joi from "joi";
import { addTodoSchema } from "../constants/joi.validations.js";
import TodosModel from "../models/todos.model.js";
import UserModel from "../models/user.model.js";

const addTodo = async (req, res, next) => {
  try {
    const { error } = addTodoSchema.validate(req.body);

    if (error) {
      return next({
        status: 400,
        message: "Kindly fill all the feilds !",
      });
    }
    const { user, title, description } = req.body;

    const isUserAlreadyExists = await UserModel.findById(user);

    if (!isUserAlreadyExists) {
      return next({
        status: 404,
        message: "Invalid User !",
      });
    }
    const todo = await TodosModel.create({
      title,
      description,
      user,
    });

    await isUserAlreadyExists.todos.push(todo._id);
    await isUserAlreadyExists.save();

    return res
      .status(201)
      .json({ message: "Todo added successfully", data: todo, success: true });
  } catch (error) {
    return next(error);
  }
};
const getTodos = async (req, res, next) => {
  try {
  } catch (error) {
    return next(error);
  }
};
const updateTodo = async (req, res, next) => {
  try {
    const id = req.params.id;

    const objectIdSchema = Joi.string().custom((value, helpers) => {
      if (!/^[0-9a-fA-F]{24}$/.test(value)) {
        return helpers.message({
          custom: "Invalid MongoDB ObjectId",
        });
      }
      return value;
    }, "MongoDB ObjectId");
    const { error } = objectIdSchema.validate(id);

    if (error) {
      return next({
        status: 400,
        message: error.message,
      });
    }
    const todoExists = await TodosModel.findById(id);

    if (!todoExists) {
      return next({
        status: 404,
        message: "No Todo Exists !",
      });
    }
    const todo = await TodosModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    const user = await UserModel.findById(todo?.user);

    user.todos.map((ele) => {
      if (ele?._id == id) {
        return todo;
      } else {
        return ele;
      }
    });

    await user.save();

    res.status(200).json({
      message: "Todo Updated !",
      success: true,
      data: todo,
    });
  } catch (error) {
    return next(error);
  }
};
const deleteTodo = async (req, res, next) => {
  try {
    const id = req.params.id;

    const objectIdSchema = Joi.string().custom((value, helpers) => {
      if (!/^[0-9a-fA-F]{24}$/.test(value)) {
        return helpers.message({
          custom: "Invalid MongoDB ObjectId",
        });
      }
      return value;
    }, "MongoDB ObjectId");
    const { error } = objectIdSchema.validate(id);

    if (error) {
      return next({
        status: 400,
        message: error.message,
      });
    }

    const todo = await TodosModel.findByIdAndDelete(id);

    if (!todo) {
      return next({
        status: 404,
        message: " Todo Not Exists !",
      });
    }
    const user = await UserModel.findById(todo?.user);

    if (!user) {
      return next({
        status: 404,
        message: "No User Found !",
      });
    }

    user.todos = user.todos.filter((ele) => {
      return ele?._id != id;
    });

    await user.save();

    res.status(200).json({
      message: "Todo Deleted !",
      success: true,
      data: todo,
    });
  } catch (error) {
    return next(error);
  }
};

export { addTodo, getTodos, updateTodo, deleteTodo };
