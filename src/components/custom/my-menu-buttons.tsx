import { Button } from "../ui/button";
import AlertDialogDemo from "./my-alert";

export const MenuButtons = ({
  handleTaskChange,
  handleDeleteTask,
  handleCloseMenu,
}) => {
  return (
    <div className="flex gap-x-6 mt-4">
      <Button onClick={handleTaskChange}>Edit</Button>

      <AlertDialogDemo handleDeleteTask={handleDeleteTask} />

      <Button onClick={handleCloseMenu}>Close</Button>
    </div>
  );
};

export default MenuButtons;
