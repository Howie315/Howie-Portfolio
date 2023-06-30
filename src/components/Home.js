import React, { useState, useEffect } from "react";
import "./Home.css";

const TypewriterText = ({ text, delay = 100, onComplete }) => {
  const [typewriterText, setTypewriterText] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (typewriterText.length < text.length) {
        setTypewriterText(text.substr(0, typewriterText.length + 1));
      } else {
        clearInterval(intervalId);
        if (onComplete) {
          onComplete();
        }
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [typewriterText, text, delay, onComplete]);

  return <>{typewriterText}</>;
};

const Home = () => {
  const [isNameTyped, setIsNameTyped] = useState(false);
  const [isProfessionTyped, setIsProfessionTyped] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (isProfessionTyped) {
      setTimeout(() => setShowSummary(true), 1000);
      setTimeout(() => setShowButton(true), 2000);
    }
  }, [isProfessionTyped]);

  return (
    <div id="home" className="content-section">
      <h2>
        <TypewriterText
          text="Hi, my name is"
          delay={100}
          onComplete={() => setIsNameTyped(true)}
        />
      </h2>
      {isNameTyped && (
        <h1>
          <TypewriterText
            text="Howie Nguyen"
            delay={100}
            onComplete={() => setIsProfessionTyped(true)}
          />
        </h1>
      )}
      {isProfessionTyped && (
        <h1>
          <TypewriterText text="crafting magic for mobile" delay={100} />
        </h1>
      )}
      {showSummary && (
        <p className="fade-in">
          I'm a software engineer based in the beautiful city of Riverside,
          California. Over the course of my career, I've had the privilege to
          specialize in designing and building exceptional, high-performing
          websites and mobile applications. My passion for innovative
          technologies and my unwavering commitment to clean, efficient coding
          practices has led me to create digital experiences that are not only
          aesthetically pleasing but also inherently user-centric and
          responsive. By utilizing a keen understanding of both front-end and
          back-end technologies, I strive to deliver comprehensive solutions
          that drive engagement and exceed client expectations.
        </p>
      )}
      {showButton && <button className="fade-in">Contact me</button>}
    </div>
  );
};

export default Home;
