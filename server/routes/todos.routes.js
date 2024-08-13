import express from "express";
import {
  addTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/todos.controller.js";

const router = express.Router();

router.post("/todo", addTodo);
router.post("/todo/:id", updateTodo);
router.delete("/todo/:id", deleteTodo);
export default router;
