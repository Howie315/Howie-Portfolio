import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";
import { TiCode } from "react-icons/ti";
import { TiDeviceDesktop } from "react-icons/ti";
import { IoIosRocket } from "react-icons/io";
import { IoIosAnalytics } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import "./Experience.css";

const Role = ({ role }) => (
  <h4
    style={{
      color: "#8a8a8a",
      fontWeight: "bold",
      marginBottom: "0px",
      marginTop: "10px",
    }}
  >
    Role: {role}
  </h4>
);

const Technologies = ({ techs }) => (
  <p
    style={{
      color: "#8a8a8a",
      fontStyle: "italic",
      marginBottom: "15px",
    }}
  >
    Technologies Used: {techs.join(", ")}
  </p>
);

const Experience = () => {
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 768px)",
  });
  return (
    <div id="experience" className="content-section">
      <h4 className="experience-header">Experience</h4>
      <VerticalTimeline layout={isMobileDevice ? "1-column" : "2-columns"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work timeline-element"
          contentStyle={{ background: "#F1F1F1", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid  #F1F1F1" }}
          date="March 2023 - May 2023"
          iconStyle={{ background: "#F1F1F1", color: "#333" }}
          icon={<TiCode />}
        >
          <div
            onClick={() =>
              window.open(
                "https://github.com/CS180-spring/cs180-22-jymbois",
                "_blank"
              )
            }
          >
            <h3 className="vertical-timeline-element-title">
              Calendar Exercise Logger
            </h3>
            <Role role="Frontend Developer" />
            <Technologies techs={["React Native", "Firebase", "Workout DB"]} />
            <p>
              • Engineered an intuitive calendar module with the capability to
              schedule, track, and send real-time reminders for exercise
              routines, enhancing user engagement and consistency towards
              achieving their fitness goals. Leveraged Firebase for secure
              back-end services, facilitating real-time data synchronization,
              user authentication, and robust data storage, resulting in
              improved app performance and user satisfaction.
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work timeline-element"
          contentStyle={{ background: "#F1F1F1", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid  #F1F1F1" }}
          date="September 2022 - March 2023"
          iconStyle={{ background: "#F1F1F1", color: "#333" }}
          icon={<TiDeviceDesktop />}
        >
          <div
            onClick={() =>
              window.open(
                "https://github.com/Howie315/Sizzle-Messaging",
                "_blank"
              )
            }
          >
            <h3 className="vertical-timeline-element-title">
              Sizzle Messaging
            </h3>
            <Role role="Frontend Developer" />
            <Technologies
              techs={["Kotlin Multiplatform", "React", "IOS", "Mongo DB"]}
            />
            <p>
              • Developed a secure messaging feature using the MongoDB database
              to enable dependable communication between patients and
              dietitians. Designed user interfaces for login, registration, and
              messaging functionalities. Furthermore, constructed backend logic
              for API calls and WebSocket integration. Such as HTTP requests,
              and real-time messaging notifications, ensuring a smooth and
              efficient data architecture
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work timeline-element"
          contentStyle={{ background: "#F1F1F1", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid  #F1F1F1" }}
          date="March 2021 - March 2021"
          iconStyle={{ background: "#F1F1F1", color: "#333" }}
          icon={<IoIosRocket />}
        >
          <div
            onClick={() =>
              window.open("https://github.com/Howie315/CS100-Project", "_blank")
            }
          >
            <h3 className="vertical-timeline-element-title">Dog Database</h3>
            <Role role="Fullstack Developer" />
            <Technologies techs={["React", "Firebase"]} />
            <p>
              {" "}
              • Managed a team of 4 in developing a website for dog breeders to
              sell and showcase their dogs to potential customers, similar to
              Facebook Marketplace. Utilized React and JavaScript to build the
              website, with Firebase.io serving as the database for storing
              object and JSON files of dog information totaling 30GB
            </p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work timeline-element"
          contentStyle={{ background: "#F1F1F1", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid  #F1F1F1" }}
          date="November 2019 - December 2019"
          iconStyle={{ background: "#F1F1F1", color: "#333" }}
          icon={<IoIosAnalytics />}
        >
          <div
            onClick={() =>
              window.open("https://github.com/Howie315/CS100-Project", "_blank")
            }
          >
            <h3 className="vertical-timeline-element-title">Treasure Game</h3>
            <Role role="Frontend Developer" />
            <Technologies techs={["Java", "Java Swing"]} />
            <p>
              • Created an engaging treasure game using Java and graphic
              libraries, providing users with a highly interactive gaming
              experience. Designed an intuitive 10x10 game board with dynamic
              text fields, enhancing the overall software performance to 60fps.
              Administered the Strategy pattern to enable class-specific action
              listeners for button implementation, resulting in a point and
              reward system that incentivizes skill development.
            </p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
