import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Navbar />
      </Router>
    </>
  );
}

export default App;
