import "./App.css";
 
import BodyImage from "./components/BodyImage";
import Headers from "./components/Headers/Headers";
import Introduction from "./components/Introduction";
import PersonDetail from "./components/PersonDetail";
import Template from "./components/Template/Template";
 
import Favorite from './components/Favorite';

function App() {
  return (
    <div className="mx-auto container mb-20 transDur">
      <Headers />
      <BodyImage />
      <PersonDetail />
      <Template />
      <Introduction />
      <Favorite/>
    </div>
  );
}

export default App;
