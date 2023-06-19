import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles.css';
// Importações de Páginas
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/AboutUs/About";
import Reading from "./pages/ProofReading/Reading";
import Tutorial from "./pages/TutorialAccess/Tutorial";
import PasswordCard from "./pages/PasswordForProof/PasswordCard";

function App() {
  return (
    // Routes
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/proof-reading" element={<Reading/>} />
        <Route path="/tutorial-access" element={<Tutorial/>} />
        <Route path="/password" element={<PasswordCard/>} />
      </Routes>
    </Router>
  );
}

export default App;