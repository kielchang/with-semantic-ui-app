import React from "react";
import { animated, useSpring, config } from "react-spring";

const openedTransformationConfig = {
  top: "translate(2, 7) rotate(0)",
  center: "translate(2, 19) rotate(0)",
  bottom: "translate(2, 31) rotate(0)",
  color: "#fafafa" // Add color
};

const closedTransformationConfig = {
  top: "translate(5, 32) rotate(-45)",
  center: "translate(10, 4) rotate(45)",
  bottom: "translate(5, 32) rotate(-45)",
  color: "#fafafa" // Add color
};

export default ({ isOpened, onClick, ...props }) => {
  const { top, center, bottom, color } = useSpring({
    to: isOpened ? closedTransformationConfig : openedTransformationConfig,
    config: config.stiff
  });
  return (
    <div>
      <a onClick={onClick}>
        <animated.svg width="44" height="44" viewBox="0 0 44 44" fill={color} xmlns="http://www.w3.org/2000/svg">
          <animated.rect width="40" height="6" rx="2" transform={top} />
          <animated.rect width="40" height="6" rx="2" transform={center} />
          <animated.rect width="40" height="6" rx="2" transform={bottom} />
        </animated.svg>
      </a>
    </div>
  );
};
