import TaskProvider from "./context/task-provider";
import TaskTable from "./components/custom/table/task-table";
import CreateTask from "./components/custom/task/create-task";
import LayOut from "./components/layout/lay-out";

function App() {
  return (
    <TaskProvider>
      <LayOut>
        <div className="flex flex-col gap-4">
          <CreateTask />
          <TaskTable />
        </div>
      </LayOut>
    </TaskProvider>
  );
}

export default App;
