import { useContext } from "react";
import { TaskContext } from "../context/taskProvider";

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (context == null) throw new Error("Task context is null");
  return context;
};
