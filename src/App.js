import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import pdfFile from "./HowieNguyen.pdf"; // Import your PDF file

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const sections = ["home", "about", "experience"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowInnerHeight = window.innerHeight;

      let activeSection = "home";

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        const offsetStart = sectionElement.offsetTop - windowInnerHeight / 2;
        const offsetEnd = offsetStart + sectionElement.offsetHeight;

        if (scrollY >= offsetStart && scrollY < offsetEnd) {
          activeSection = section;
        }
      });

      setCurrentSection(activeSection);
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
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
      </header>
    </div>
  );
}

export default App;
