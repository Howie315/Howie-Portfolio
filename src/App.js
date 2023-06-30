import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import pdfFile from "./HowieNguyen.pdf"; // Import your PDF file

function App() {
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const home = document.getElementById("home").getBoundingClientRect();
      const about = document.getElementById("about").getBoundingClientRect();
      const experience = document
        .getElementById("experience")
        .getBoundingClientRect();
      const halfWindowHeight = window.innerHeight / 2;

      if (home.top <= halfWindowHeight && home.bottom >= halfWindowHeight) {
        setCurrentSection("home");
      } else if (
        about.top <= halfWindowHeight &&
        about.bottom >= halfWindowHeight
      ) {
        setCurrentSection("about");
      } else if (
        experience.top <= halfWindowHeight &&
        experience.bottom >= halfWindowHeight
      ) {
        setCurrentSection("experience");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">
          <a href="#home" className={currentSection === "home" ? "active" : ""}>
            Home
          </a>
          <a
            href="#about"
            className={currentSection === "about" ? "active" : ""}
          >
            About
          </a>
          <a
            href="#experience"
            className={currentSection === "experience" ? "active" : ""}
          >
            Experience
          </a>
          <a href={pdfFile} download className="download-link button">
            Resume
          </a>
        </div>
        <Home />
        <About />
        <Experience />
      </header>
    </div>
  );
}

export default App;
