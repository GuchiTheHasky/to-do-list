import { useTaskContext } from "@/components/hooks/useTaskContext";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { getHash } from "./util/getHash";
import TableAction from "./action/tableActions";

const CustomTableBody = () => {
  const { tasks } = useTaskContext();

  return (
    <TableBody>
      {tasks.map((task, index) => (
        <TableRow key={getHash(task)}>
          <TableCell className="font-medium">{index + 1}</TableCell>
          <TableCell>
            <div className="w-[900px] max-h-[200px] overflow-y-auto">
              {task}
            </div>
          </TableCell>
          <TableCell className="text-right">
            <TableAction index={index} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default CustomTableBody;
