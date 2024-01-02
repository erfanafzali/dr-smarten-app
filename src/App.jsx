import "./App.css";
import BodyImage from "./components/BodyImage";
import Headers from "./components/Headers/Headers";
import PersonDetail from "./components/PersonDetail";

function App() {
  return (
    <div className="mx-auto container">
      <Headers />
      <BodyImage />
      <PersonDetail/>
    </div>
  );
}

export default App;
