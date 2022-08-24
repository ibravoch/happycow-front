import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import Pages
import Home from "./Pages/Home.js";
import Offer from "./Pages/Offer";
//components
import Header from "./Components/Header.js";

import {
  faBars,
  faMagnifyingGlass,
  faXmark,
  faStar,
  faStarHalf,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faBars, faMagnifyingGlass, faXmark, faStar, faStarHalf);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:placeId" element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;
