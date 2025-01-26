import TaskProvider from "./components/context/taskProvider";
import TaskTable from "./components/custom/table/taskTable";
import TaskAdder from "./components/custom/task-adder/taskAdder";
import LayOut from "./components/layout/layOut";

function App() {
  return (
    <TaskProvider>
      <LayOut>
        <TaskAdder />
        <TaskTable />
      </LayOut>
    </TaskProvider>
  );
}

export default App;
