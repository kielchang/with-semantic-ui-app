import React from "react";
import Responsive from "../Responsive";
import NavbarDesktop from "./navbar_desktop";
import NavbarMobile from "./navbar_mobile";

export default ({ ...props }) => (
  <>
    <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
      <NavbarMobile {...props} />
    </Responsive>
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      <NavbarDesktop {...props} />
    </Responsive>
  </>
);
