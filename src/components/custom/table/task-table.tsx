import { Table } from "@/components/ui/table";
import CustomTableHeader from "./table-header";
import CustomTableBody from "./table-body";

const TaskTable = () => {
  return (
    <div className="px-16">
      <Table>
        <CustomTableHeader />
        <CustomTableBody />
      </Table>
    </div>
  );
};

export default TaskTable;
