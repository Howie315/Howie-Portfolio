import React from "react";
import myImage from "./profile.png"; // replace with your image's path
import { useSpring, animated } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";

import "./About.css";
const AnimatedVisibilitySensor = ({
  children,
  offset,
  animationType = "default",
}) => {
  const [refVisibility, setVisibility] = React.useState(false);

  const props = useSpring({
    from: animations[animationType].from,
    to: refVisibility
      ? animations[animationType].to
      : animations[animationType].from,
  });

  return (
    <VisibilitySensor
      partialVisibility
      offset={{ top: offset }}
      onChange={(isVisible) => setVisibility(isVisible)}
    >
      <animated.div style={props}>{children}</animated.div>
    </VisibilitySensor>
  );
};

const animations = {
  default: {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
  image: {
    from: { transform: "scale(0.85)" },
    to: { transform: "scale(1)" },
  },
};
const About = () => {
  return (
    <div id="about" className="content-section">
      <AnimatedVisibilitySensor offset={150}>
        <h2>About</h2>
      </AnimatedVisibilitySensor>

      <AnimatedVisibilitySensor offset={150}>
        <p>
          I am a highly motivated software engineer hailing from the vibrant
          city of Cincinnati, Ohio. Ever since I was a child, I've had a passion
          for solving complex problems and a deep-seated curiosity about how
          things work. This fascination, coupled with the growing influence of
          technology in our lives, led me to discover my passion for software
          development. Realizing the potential of technology to transform lives,
          I relocated to Riverside to pursue an education in computer science,
          aspiring to leverage these powerful tools to create solutions that
          make a difference.
        </p>
      </AnimatedVisibilitySensor>

      <AnimatedVisibilitySensor offset={150}>
        <p>
          My journey in the tech industry has been both challenging and
          rewarding. Over the years, I've had the opportunity to work with a
          plethora of technologies, including C++, Python, Java, C, C#,
          HTML/CSS, JavaScript, Swift, and Kotlin. Each of these languages and
          tools has its unique strengths, but my particular interest lies in web
          and mobile development. The immediacy and reach of the web, coupled
          with the intimate, personalized experience that mobile apps can
          provide, offer a unique opportunity to directly impact individuals on
          a global scale. From designing responsive, intuitive user interfaces,
          to optimizing back-end performance for a seamless user experience,
          every aspect of web and mobile development brings me a sense of
          fulfillment and drives me to continually hone my skills in these
          domains.
        </p>
      </AnimatedVisibilitySensor>

      <AnimatedVisibilitySensor offset={150}>
        <p>
          While my professional experience has equipped me with a solid
          understanding of various technologies and practical problem-solving
          skills, my educational background in computer science has endowed me
          with the ability to grasp complex concepts, methodologies, and
          algorithms that form the backbone of software development. The dynamic
          nature of the field keeps me on my toes, as there are always new
          technologies to learn, paradigms to adapt to, and problems to solve.
          Each new project is a journey, each bug a challenge, and each resolved
          issue a victory. This cyclical process of creation, problem-solving,
          and evolution is what fuels my passion and commitment to this field.
        </p>
      </AnimatedVisibilitySensor>

      <AnimatedVisibilitySensor offset={150}>
        <h3 className="techName">Technologies</h3>
        <div className="technology-list">
          <ul>
            <li className="technology-item">C++</li>
            <li className="technology-item">Python</li>
            <li className="technology-item">Java</li>
            <li className="technology-item">C</li>
            <li className="technology-item">C#</li>
          </ul>
          <ul>
            <li className="technology-item">HTML/CSS</li>
            <li className="technology-item">JavaScript</li>
            <li className="technology-item">Swift</li>
            <li className="technology-item">Kotlin</li>
          </ul>
        </div>
      </AnimatedVisibilitySensor>

      <AnimatedVisibilitySensor offset={150} animationType="image">
        <div className="about-image-container">
          <img src={myImage} alt="About Me" className="about-image" />
        </div>
      </AnimatedVisibilitySensor>
    </div>
  );
};

export default About;
