import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Features from "./Components/Features";
import WhyRicoz from "./Components/WhyRicoz";
import Courses from "./Components/Courses";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Features />
      <WhyRicoz />
      <Courses />
    </div>
  );
}

export default App;
