import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useState } from "react";
import AlertDialogModal from "../alert/alert-modal";
import { FC } from "react";

interface DeleteButtonProps {
  task: string;
  tasks: string[];
  setTasks: (tasks: string[]) => void;
}

// для чого ця кома?
const removeItem = <T,>(arr: Array<T>, value: T): Array<T> => {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};

const handleDeleteTask = (
  tasks: string[],
  setTasks: (tasks: string[]) => void,
  index: number
) => {
  const updatedTasks = removeItem([...tasks], tasks[index]);
  setTasks(updatedTasks);
};

const DeleteButton: FC<DeleteButtonProps> = ({ task, tasks, setTasks }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const deleteTask = () => {
    const index = tasks.indexOf(task);
    handleDeleteTask(tasks, setTasks, index);
    setIsDialogOpen(false);
  };

  return (
    <div>
      <Button onClick={() => setIsDialogOpen(true)}>
        <Trash />
      </Button>

      <AlertDialogModal
        open={isDialogOpen}
        deleteTask={deleteTask}
        onCancel={() => setIsDialogOpen(false)}
      />
    </div>
  );
};

export default DeleteButton;
