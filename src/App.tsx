import MyProvider from "./components/custom/my-provider";
import MyApp from "./components/custom/my-app";

function App() {
  return (
    <MyProvider>
      <MyApp />
    </MyProvider>
  );
}

export default App;
