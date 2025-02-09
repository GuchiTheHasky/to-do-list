import { Button } from "@/components/ui/button";
import { Pencil, Check, X } from "lucide-react";
import { useState } from "react";
import { Input } from "../../ui/input";
import { FC, KeyboardEvent } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface EditButtonProps {
  onEdit: (newValue: string) => void;
  task: string;
}

const EditButton: FC<EditButtonProps> = ({ onEdit, task }) => {
  const [editedTask, setEditedTask] = useState<string>(task);
  const [isOpenEditMenu, setIsOpenEditMenu] = useState(false);

  const editHandler = () => {
    onEdit(editedTask);
  };

  return (
    <div>
      <Button
        className="bg-slate-500 hover:bg-slate-700"
        onClick={() => setIsOpenEditMenu(true)}
      >
        <Pencil />
      </Button>

      <div>
        <Sheet open={isOpenEditMenu} onOpenChange={setIsOpenEditMenu}>
          <SheetContent className="h-[200px]" side={"top"}>
            <SheetHeader>
              <SheetTitle>Edit task menu:</SheetTitle>
              <SheetDescription>
                Please enter your new task below
              </SheetDescription>
            </SheetHeader>

            <div className="flex gap-x-2">
              <Input
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
                onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
                  if (event.key === "Enter") {
                    editHandler();
                  }
                }}
              />

              <Button
                className="bg-green-600 hover:bg-green-800"
                onClick={editHandler}
              >
                <Check />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default EditButton;
