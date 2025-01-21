import { useContext, useState } from "react";
import { createContext } from "react";

const TaskContext = createContext(null);

const MyProvider = ({ children }) => {
  console.log("MyProvider initialized");

  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export default MyProvider;

export const useTaskContext = () => {
  const context = useContext(TaskContext);

  return [context.tasks, context.setTasks] as const;
};

// value={{tasks, setTasks}} - чому тут подвійні фігурні дужки ?
// import { createContext } from "vm"; - що таке vm ?
