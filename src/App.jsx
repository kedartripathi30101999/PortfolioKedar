import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import ContactMe from "./Pages/ContactMe";
import HeroSection from "./Pages/HeroSection";
import MySkills from "./Pages/MySkills";
import MyProjects from "./Pages/MyProjects";
import ResumeSection from "./Pages/Resume";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/HeroSection" element={<HeroSection/>}/>
            <Route path="/MySkills" element={<MySkills/>}/>
            <Route path="/MyProjects" element={<MyProjects/>}/>
            <Route path="/Resume" element={<ResumeSection/>}/>
            <Route path="/ContactMe" element={<ContactMe/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;