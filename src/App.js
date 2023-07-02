import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import { FaSpotify } from "react-icons/fa";

import pdfFile from "./HowieNguyen.pdf"; // Import your PDF file
import SpotifyPlayer from "react-spotify-web-playback";
import axios from "axios";

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const [accessToken, setAccessToken] = useState(null);
  const [trackUri, setTrackUri] = useState(
    "spotify:playlist:06kWMlOMwbfRzNbmizxRIz"
  );
  const [play, setPlay] = useState(false);
  const sections = ["home", "about", "experience"];

  const handleSpotifyLogin = () => {
    // Define these values for your application
    const clientId = "87fcc6d0cb494536a8112b362e87d18c";
    const redirectUri = encodeURIComponent(
      "https://howie-portfolio.vercel.app/api/callback"
    );
    const scopes = encodeURIComponent(
      "streaming user-read-email user-read-private"
    );

    // Create the authorization URL
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes}`;

    // Redirect the user to the authorization URL
    window.location.href = authUrl;
  };

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
    axios
      .get("/api/callback")
      .then((response) => {
        setAccessToken(response.data.access_token);
      })
      .catch((error) => {
        console.error("Error fetching access token", error);
      });
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

          <button onClick={handleSpotifyLogin}>Login to Spotify</button>

          <button onClick={() => setPlay(!play)}>
            {play ? "Pause" : "Play"}
          </button>
          <SpotifyPlayer uris={[trackUri]} play={play} />
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
