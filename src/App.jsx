import "./App.css";
import { Route, Routes } from "react-router-dom";

import BodyImage from "./components/BodyImage";
import Headers from "./components/Headers/Headers";
import Introduction from "./components/Introduction";
import PersonDetail from "./components/PersonDetail";
import Template from "./components/Template/Template";
import Favorite from "./components/Favorite";
import Footer, { ListArticles } from "./components/Footer/Footer";
import Article from "./components/Footer/Article";
import ContactUs from "./components/ContactUs/ContactUs";
 

function App() {
  return (
    <div className="mx-auto container mb-20 transDur">
      <Headers />
      <BodyImage />
      <PersonDetail />
      <Template />
      <Introduction />
      <Favorite />
      <Routes>
        <Route path="/" element={<Footer />}>
          <Route path="/articles" exact element={<ListArticles />} />
          <Route path="/article/:id" element={<Article />} />
        </Route>
      </Routes>
      <ContactUs/>
    </div>
  );
}

export default App;
