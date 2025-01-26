import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useTaskContext } from "@/components/hooks/useTaskContext";
import { useState } from "react";
import { Input } from "../../../ui/input";
import { onInputKeyDown } from "../../event/onInputKeyDown";
import { HandleEditTask } from "../handler/handleEditTask";
import { IndexType } from "@/components/types/genericIndexType";
import { FC } from "react";

const PencilButton: FC<IndexType> = ({ index }) => {
  const { tasks, setTasks } = useTaskContext();
  const [editedTask, setEditedTask] = useState<string>(tasks[index]);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    HandleEditTask(tasks, setTasks, editedTask, index, setIsEditing);
  };

  return (
    <div>
      {isEditing ? (
        <Input
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          onKeyDown={(event) => {
            onInputKeyDown(event, handleSave);
          }}
        />
      ) : (
        <Button onClick={() => setIsEditing(true)}>
          <Pencil />
        </Button>
      )}
    </div>
  );
};

export default PencilButton;
