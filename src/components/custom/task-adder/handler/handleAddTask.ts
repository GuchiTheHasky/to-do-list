export const handleAddTask = (
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
