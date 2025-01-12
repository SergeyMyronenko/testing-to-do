import { Tasks } from "./tasksModel.js";

export const getAllTasks = async (req, res, next) => {
  try {
    const allTasks = await Tasks.find();

    if (!allTasks) {
      throw new Error("Data not found");
    }

    res.status(200).send(allTasks);
  } catch (error) {
    next(error);
  }
};

export const addNewTask = async (req, res, next) => {
  const { text, status } = req.body;

  try {
    const data = {
      text,
      status,
    };

    if (!data) {
      throw new Error("Text is required field");
    }

    const addTask = await Tasks.create(data);

    res.status(201).json(addTask);
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  const taskId = req.params.id;

  try {
    const task = await Tasks.findById(taskId);

    if (!task) {
      throw new Error("Not found");
    }

    const result = await Tasks.findByIdAndDelete(taskId);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
