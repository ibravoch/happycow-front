import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from "./assets/data.json";

//import Pages
import Home from "./Pages/Home.js";
import Offer from "./Pages/Offer";
//components
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";

import {
  faBars,
  faMagnifyingGlass,
  faXmark,
  faStar,
  faStarHalf,
  faPhone,
  faLocationPin,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Rating from "./Components/Rating";
library.add(
  faBars,
  faMagnifyingGlass,
  faXmark,
  faStar,
  faStarHalf,
  faPhone,
  faLocationPin,
  faLink
);
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/" element={<Offer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
