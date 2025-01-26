import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useTaskContext } from "@/components/hooks/useTaskContext";
import { useState } from "react";
import AlertDialogModal from "./alert/alertModal";
import { handleDeleteTask } from "../handler/handleDeleteTask";
import { IndexType } from "@/components/types/genericIndexType";
import { FC } from "react";

const TrashButton: FC<IndexType> = ({ index }) => {
  const { tasks, setTasks } = useTaskContext();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const deleteTask = () => {
    handleDeleteTask(tasks, setTasks, index);
    setIsDialogOpen(false);
  };

  return (
    <div>
      <Button onClick={() => setIsDialogOpen(true)}>
        <Trash />
      </Button>
      {isDialogOpen && (
        <AlertDialogModal
          open={isDialogOpen}
          deleteTask={deleteTask}
          onCancel={() => setIsDialogOpen(false)}
        />
      )}
    </div>
  );
};

export default TrashButton;
