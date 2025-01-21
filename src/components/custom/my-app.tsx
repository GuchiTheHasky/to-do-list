import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useState } from "react";
import MyPopover from "./my-popover";
import { useTaskContext } from "./my-provider";

function MyApp() {
  console.log("MyApp initialized");

  const [tasks, setTasks] = useTaskContext();

  const [value, setValue] = useState("");
  const [editingValue, setEditingValue] = useState("");
  const [selectedTask, setSelectedTask] = useState<number | null>(null);

  const handleTaskClick = (index: number) => {
    if (index !== selectedTask) {
      setSelectedTask(index); // Вибираємо нове завдання
      setEditingValue(tasks[index]); // Заповнюємо текст для редагування
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value); //Для чого два методи?
  };

  // const handleEditTask = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEditingValue(e.target.value);
  // };

  const handleAddTask = () => {
    if (value.trim().length > 0) {
      setTasks([...tasks, value]);
    }
    setValue("");
  };

  return (
    <div className="px-8 py-6">
      <div className="flex gap-x-8">
        <Input
          id="myInput"
          className="max-w-[400px]"
          value={value}
          onChange={onInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.key.length > 0) {
              e.preventDefault();
              handleAddTask();
            }
          }}
        />
        <Button id="myButton" onClick={handleAddTask}>
          Add task
        </Button>
      </div>

      <div>
        <ScrollArea className="h-[400px] w-[520px] border overflow-auto mt-4">
          <ul>
            {tasks.map((task, index) => (
              <li
                key={index}
                onClick={() => handleTaskClick(index)}
                className={`cursor-pointer mt-2 ${
                  index === selectedTask ? "bg-blue-100 font-bold" : "bg-white"
                }`}
              >
                <MyPopover
                  selectedTask={selectedTask}
                  setEditingValue={setEditingValue}
                  setTasks={setTasks}
                  tasks={tasks}
                  editingValue={editingValue}
                />

                {task}
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>
    </div>
  );
}

export default MyApp;
