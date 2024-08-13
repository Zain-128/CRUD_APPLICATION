import { addTodoSchema } from "../constants/joi.validations.js";
import TodosModel from "../models/todos.model.js";
import UserModel from "../models/user.model.js";

const addTodo = async (req, res, next) => {
  try {
    console.log(req.body);
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
      .status(200)
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

    const todo = await TodosModel.findByIdAndUpdate(id, req.body);

    console.log("todod", todo);

    const user = await UserModel.findById(todo?.user);

    user.todos.map((ele) => {
      if (ele?._id == id) {
        return todo;
      } else {
        return ele;
      }
    });

    await user.save();

    res.json("success");
  } catch (error) {
    return next(error);
  }
};
const deleteTodo = async (req, res, next) => {
  try {
  } catch (error) {
    return next(error);
  }
};

export { addTodo, getTodos, updateTodo, deleteTodo };
