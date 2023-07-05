import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useMove} from "react-use-gesture";

const MouseFollower = () => {
  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useMove(({ xy: [px, py] }) => set({ x: px, y: py }));

  return (
    <animated.div
      {...bind()}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: "red",
        transform: "translate3d(-50%, -50%, 0)",
        x,
        y,
        zIndex: 9999,
      }}
    />
  );
};

export default MouseFollower;
