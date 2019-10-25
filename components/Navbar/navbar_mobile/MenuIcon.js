import React from "react";
import { animated, useSpring, config } from "react-spring";

const openedTransformationConfig = {
  top: "translate(2, 10) rotate(0)",
  center: "translate(2, 21) rotate(0)",
  bottom: "translate(2, 32) rotate(0)"
};

const closedTransformationConfig = {
  top: "translate(7, 35.5) rotate(-45)",
  center: "translate(9, 7) rotate(45)",
  bottom: "translate(7, 35.5) rotate(-45)"
};

export default ({ size, color, isOpened, onClick, ...props }) => {
  const { top, center, bottom } = useSpring({
    to: isOpened ? closedTransformationConfig : openedTransformationConfig,
    config: config.stiff
  });

  size = size ? size : "36";
  color = color ? color : "#fafafa";
  return (
    <div style={{ display: "flex" }} onClick={onClick}>
      <animated.svg width={size} height={size} viewBox="0 0 44 44" fill={color} xmlns="http://www.w3.org/2000/svg">
        <animated.rect width="40" height="2" rx="2" transform={top} />
        <animated.rect width="40" height="2" rx="2" transform={center} />
        <animated.rect width="40" height="2" rx="2" transform={bottom} />
      </animated.svg>
    </div>
  );
};
