import { addNewTask, deleteTask, getAllTasks } from "./tasksControllers.js";
import express from "express";

const TasksRouter = express.Router();

TasksRouter.get("/", getAllTasks);
TasksRouter.post("/", addNewTask);
TasksRouter.delete("/:id", deleteTask);

export default TasksRouter;
