import { useTaskContext } from "@/components/hooks/useTaskContext";
import { TableCell, TableFooter, TableRow } from "@/components/ui/table";

const CustomTableFooter = () => {
  const { tasks } = useTaskContext();

  return (
    <TableFooter>
      <TableRow>
        <TableCell colSpan={3}>Total</TableCell>
        <TableCell className="text-right">{tasks.length}</TableCell>
      </TableRow>
    </TableFooter>
  );
};

export default CustomTableFooter;
