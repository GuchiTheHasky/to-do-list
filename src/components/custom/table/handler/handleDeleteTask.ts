const removeItem = <T>(arr: Array<T>, value: T): Array<T> => {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};

export const handleDeleteTask = (
  tasks: string[],
  setTasks: (tasks: string[]) => void,
  index: number
) => {
  const updatedTasks = removeItem([...tasks], tasks[index]);
  setTasks(updatedTasks);
};

