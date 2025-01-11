import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
});

export const Tasks = model("Tasks", taskSchema);
