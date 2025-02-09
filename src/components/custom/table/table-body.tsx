import { useTaskContext } from "../../../context/task-provider";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import EditButton from "../task/edit-task";
import DeleteButton from "../task/delete-task";
import { v4 as uuidv4 } from "uuid";

const CustomTableBody = () => {
  const { tasks, setTasks } = useTaskContext();

  return (
    <TableBody>
      {tasks.map((task, index) => (
        <TableRow key={uuidv4()}>
          <TableCell className="font-medium">{index + 1}</TableCell>
          <TableCell>
            <div className="w-[900px] max-h-[200px] overflow-y-auto">
              {task}
            </div>
          </TableCell>
          <TableCell className="text-right">
            <div className="flex gap-2 justify-end">
              <EditButton
                task={task}
                onEdit={(newValue: string) => {
                  const updatedTasks = [...tasks];
                  const index = tasks.indexOf(task);
                  updatedTasks[index] = newValue;
                  setTasks(updatedTasks);
                }}
              />
              <DeleteButton task={task} tasks={tasks} setTasks={setTasks} />
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default CustomTableBody;
