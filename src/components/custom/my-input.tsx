import React from "react";
import { Input } from "../ui/input";


export const MyInput = ({editingValue, }) => {
  return (
    <div>
      <Input
        value={editingValue}
        onChange={handleEditTask}
        onKeyDown={(e) => {
          console.log(e.key);
          if (e.key === "Enter" && e.key.length > 0) {
            e.preventDefault();
            handleTaskChange();
          }
        }}
      />
    </div>
  );
};

export default MyInput;
