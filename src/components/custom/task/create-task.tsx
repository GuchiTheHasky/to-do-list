import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { useState, KeyboardEvent } from "react";
import { useTaskContext } from "@/context/task-provider";

const CreateTask = () => {
  const { tasks, setTasks } = useTaskContext();
  const [newTask, setNewTask] = useState<string>("");

  const handleAddTask = (
    tasks: string[],
    setTasks: (tasks: string[]) => void,
    newTask: string,
    setNewTask: (task: string) => void
  ) => {
    if (newTask.trim().length > 0) {
      setTasks([...tasks, newTask]);
    }
    setNewTask("");
  };

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setNewTask: (task: string) => void
  ) => {
    setNewTask(e.target.value);
  };

  const onInputKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    handleFunction: () => void
  ) => {
    if (e.key === "Enter") {
      handleFunction();
    }
  };

  return (
    <div className="flex gap-x-8 px-64 mt-4">
      <Input
        value={newTask}
        onChange={(event) => onInputChange(event, setNewTask)}
        onKeyDown={(event) => {
          onInputKeyDown(event, () =>
            handleAddTask(tasks, setTasks, newTask, setNewTask)
          );
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

export default CreateTask;
