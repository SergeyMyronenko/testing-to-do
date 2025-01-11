import express from "express";
import morgan from "morgan";
import cors from "cors";
import TasksRouter from "./tasksRouter.js";

export const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/tasks", TasksRouter);
