export const onInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setNewTask: (task: string) => void
) => {
  setNewTask(e.target.value);
};
