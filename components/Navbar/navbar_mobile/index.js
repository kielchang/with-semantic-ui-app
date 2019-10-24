import React, { useState, useEffect } from "react";
import { Navbar } from "./styled";
import MenuIcon from "./MenuIcon";
import Menu from "./Menu";

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar>
      <MenuIcon
        isOpened={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <Menu isOpened={isOpen} />
    </Navbar>
  );
};
