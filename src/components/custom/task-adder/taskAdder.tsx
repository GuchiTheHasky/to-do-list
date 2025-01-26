import { useTaskContext } from "../../hooks/useTaskContext";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { useState } from "react";
import { handleAddTask } from "./handler/handleAddTask";
import { onInputChange } from "./event/onInputChange";
import { onInputKeyDown } from "../event/onInputKeyDown";

const TaskAdder = () => {
  const { tasks, setTasks } = useTaskContext();
  const [newTask, setNewTask] = useState<string>("");

  const handleAdd = () => {
    handleAddTask(tasks, setTasks, newTask, setNewTask);
  };

  return (
    <div className="flex gap-x-8 px-64">
      <Input
        value={newTask}
        onChange={(event) => onInputChange(event, setNewTask)}
        onKeyDown={(event) => {
          onInputKeyDown(event, handleAdd);
        }}
      />
      <Button
        onClick={() => handleAddTask(tasks, setTasks, newTask, setNewTask)}
      >
        Add task
      </Button>
    </div>
  );
};

export default TaskAdder;
