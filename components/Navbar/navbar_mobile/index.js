import React, { useState, useEffect } from "react";
import { Navbar, NavLogo } from "./styled";
import MenuIcon from "./MenuIcon";
import Menu from "./Menu";
import Logo from "../../Logo";

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar>
      <NavLogo>
        <Logo size={150} />
      </NavLogo>
      <MenuIcon
        size={36}
        isOpened={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "59px",
            left: 0,
            height: "1px",
            width: "100vw",
            borderBottom: "1px #363434 solid"
          }}
        ></div>
      )}
      <Menu
        isOpened={isOpen}
        onMenuClosed={() => {
          setIsOpen(false);
        }}
      />
    </Navbar>
  );
};
