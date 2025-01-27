import { useState, FC } from "react";
import { createContext } from "react";
import { TaskContextType } from "../types/taskContext";
import { ReactNodeType } from "../types/reactNodeType";

const TaskContext = createContext<TaskContextType | null>(null);

const TaskProvider: FC<ReactNodeType> = ({ children }) => {
  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
export { TaskContext };

// export const useTaskContext = () => {
//   const context = useContext(TaskContext);

//   if (context == null) {
//     throw new Exeption("")
//   }

//     return [context.tasks, context.setTasks] as const;

// };

// value={{tasks, setTasks}} - чому тут подвійні фігурні дужки ?
// import { createContext } from "vm"; - що таке vm ?
