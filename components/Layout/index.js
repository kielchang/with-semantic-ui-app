import React from "react";
import Navbar from "../Navbar";
import IEnotSupport from "../IEnotSupport";
import { withMobileDetect, withValidBrowser } from "../../hocs";
import { compose } from "recompose";

const Layout = ({ getWidth, isValidBrowser }) => {
  return (
    <>
      <IEnotSupport isValidBrowser={isValidBrowser} />
      <Navbar getWidth={getWidth} />
    </>
  );
};

export default compose(
  withValidBrowser,
  withMobileDetect
)(Layout);
