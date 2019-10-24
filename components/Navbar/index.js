import React from "react";
import Responsive from "../Responsive";
import NavbarDesktop from "./navbar_desktop";
import NavbarMobile from "./navbar_mobile";

export default ({ getWidth, ...props }) => (
  <>
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <NavbarDesktop {...props} />
    </Responsive>
    <Responsive getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
      <NavbarMobile {...props} />
    </Responsive>
  </>
);
