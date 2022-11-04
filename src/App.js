// import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import ChantiersPage from "./pages/chantiers";
import HistoirePage from "./pages/histoire";
import TemoignagesPage from "./pages/temoignages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/chantiers" element={<ChantiersPage />} />
          <Route exact path="/histoire" element={<HistoirePage />} />
          <Route exact path="/temoignages" element={<TemoignagesPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
