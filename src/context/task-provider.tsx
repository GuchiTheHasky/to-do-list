import { useState, FC, ReactNode } from "react";
import { useContext } from "react";
import { createContext } from "react";

interface TaskContextProps {
  tasks: string[];
  setTasks: (tasks: string[]) => void;
}

const TaskContext = createContext<TaskContextProps | null>(null);

const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (context == null) throw new Error("Task context is null");
  return context;
};

const TasksProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TasksProvider;
export { useTaskContext };
