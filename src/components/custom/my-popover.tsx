import { Input } from "../ui/input";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import MenuButtons from "./my-menu-buttons";

const MyPopover = ({
  selectedTask,
  editingValue,
  setEditingValue,
  tasks,
  setTasks,
}) => {
  const [isOpenMenu, setOpenMenu] = useState(false);

  const removeItem = <T,>(arr: Array<T>, value: T): Array<T> => {
    const index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  };

  const handleDeleteTask = () => {
    const updatedTasks = removeItem([...tasks], tasks[selectedTask!]);
    setTasks(updatedTasks);
    setEditingValue("");
    setOpenMenu(false);
  };

  const handleEditTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingValue(e.target.value);
  };

  const handleTaskChange = () => {
    if (selectedTask !== null && editingValue.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[selectedTask] = editingValue; // Оновлюємо текст завдання
      setTasks(updatedTasks); // Зберігаємо оновлений масив
      setEditingValue(""); // Очищаємо поле редагування
      setOpenMenu(false);
    }
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const onKeyDown = () => {
    //повинно редагувати, але...
    (e) => {
      console.log(e.key);
      if (e.key === "Enter" && e.key.length > 0) {
        e.preventDefault();
        handleTaskChange();
      }
    };
  };

  return (
    <div>
      <div>
        <Popover open={isOpenMenu} onOpenChange={() => setOpenMenu(true)}>
          <PopoverTrigger className=" w-[100px] rounded-md border">
            Menu
          </PopoverTrigger>
          <PopoverContent>
            <Input
              value={editingValue}
              onChange={handleEditTask}
              onKeyDown={onKeyDown}
            />
            <MenuButtons
              handleTaskChange={handleTaskChange}
              handleDeleteTask={handleDeleteTask}
              handleCloseMenu={handleCloseMenu}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default MyPopover;
