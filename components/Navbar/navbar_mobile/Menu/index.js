import { useState } from "react";
import { useSpring, useTransition, animated } from "react-spring";
import MenuContainer from "./MenuContainer";

export default ({ isOpened, ...props }) => {
  return <MenuContainer isOpened={isOpened}>
    🐭 🐓 🐲
  </MenuContainer>;
};
