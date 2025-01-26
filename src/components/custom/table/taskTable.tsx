import { Table, TableCaption } from "@/components/ui/table";
import CustomTableFooter from "./tableFooter";
import CustomTableHeader from "./tableHeader";
import CustomTableBody from "./tableBody";

const TaskTable = () => {
  const tableCaption = "A list of your tasks.";

  return (
    <div className="px-16">
      <Table>
        <TableCaption>{tableCaption}</TableCaption>
        <CustomTableHeader />
        <CustomTableBody />
        <CustomTableFooter />
      </Table>
    </div>
  );
};

export default TaskTable;
