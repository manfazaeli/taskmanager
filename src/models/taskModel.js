import { timeStamp } from "console";
import mongoose from "mongoose";
const taskSchema = new mongoose.Schema(
  {
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"users"
    },
    title:{
        type: String,

    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    dateToStart: {
      type: String,
      require: true,
    },
    dateToFinish: {
      type: String,
      require: true,
    },
    priority: {
      type: String,
      require: true,
    },
    reference: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

if (mongoose.models["tasks"]) {
  const taskModel = mongoose.model("tasks");
  mongoose.deleteModel(taskModel.modelName);
}
const Task = mongoose.model("tasks", taskSchema);
export default Task;
