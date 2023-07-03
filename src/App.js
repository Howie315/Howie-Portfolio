import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import { FaSpotify } from "react-icons/fa";

import pdfFile from "./HowieNguyen.pdf"; // Import your PDF file
import SpotifyPlayer from "react-spotify-web-playback";
import SpotifyWebApi from "spotify-web-api-js";

import axios from "axios";

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const [token, setToken] = useState(null);
  const [trackUri, setTrackUri] = useState(
    "spotify:playlist:06kWMlOMwbfRzNbmizxRIz"
  );
  const [play, setPlay] = useState(false);

  const sections = ["home", "about", "experience"];
  const spotifyApi = new SpotifyWebApi({
    clientId: "87fcc6d0cb494536a8112b362e87d18c",
  });
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

  useEffect(() => {
    // Get the hash of the url
    const hash = window.location.hash
      .substring(1)
      .split("&")
      .reduce(function (initial, item) {
        if (item) {
          var parts = item.split("=");
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {});

    window.location.hash = "";

    let _token = hash.access_token;

    if (_token) {
      // Set token
      setToken(_token);
      spotifyApi.setAccessToken(_token);
    }
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
