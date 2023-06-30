import React from "react";
import useTypewriter from "react-typewriter-hook";

const TypewriterText = ({ text }) => {
  const typewriterText = useTypewriter(text);

  return <>{typewriterText}</>;
};

export default TypewriterText;
