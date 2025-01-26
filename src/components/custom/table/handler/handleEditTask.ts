export const HandleEditTask = (
  tasks: string[],
  setTasks: (tasks: string[]) => void,
  editedTask: string,
  index: number,
  setIsEditing: (value: boolean) => void
) => {
  const updatedTasks = [...tasks];
  updatedTasks[index] = editedTask;
  setTasks(updatedTasks);
  setIsEditing(false);
};
