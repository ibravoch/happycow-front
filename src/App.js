import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Header from "./Components/Header.js";

//pages
import Home from "./Pages/Home.js";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
