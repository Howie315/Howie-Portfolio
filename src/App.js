import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import { FaSpotify } from "react-icons/fa";

import pdfFile from "./HowieNguyen.pdf"; // Import your PDF file

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const [loading, setLoading] = useState(true); // Add this state

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

  // Simulating a loading period of 3 seconds
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2100);
  }, []);

  if (loading) {
    return (
      <iframe
        src="https://embed.lottiefiles.com/animation/66470"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          border: "none",
        }}
      ></iframe>
    );
  }
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
          <iframe
            style={{
              borderRadius: "12px",
              position: "fixed",
              bottom: "10px",
              right: "10px",
            }}
            src="https://open.spotify.com/embed/playlist/06kWMlOMwbfRzNbmizxRIz?utm_source=generator&theme=0"
            width="300"
            height="80"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
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
