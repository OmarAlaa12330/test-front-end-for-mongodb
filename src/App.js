import DisplayItems from "./FirstComponent/DisplayItems";
import AddItems from "./SecondComponent/AddItems";
import data from "./FirstComponent/Testdata.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DisplayItems data={data} />
      <AddItems />
    </div>
  );
}

export default App;
