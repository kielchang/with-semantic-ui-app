import React, { Component } from "react";
import Navbar from "../Navbar";
import MobileDetect from "mobile-detect";
import IEnotSupport from "../IEnotSupport";

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ req }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    const md = new MobileDetect(userAgent);
    const isMobileFromSSR = !!md.mobile();
    console.log(isMobileFromSSR);

    return {
      pageProps,
      isMobileFromSSR,
      deviceInfo: {
        mobile: md.mobile(),
        tablet: md.tablet(),
        os: md.os(),
        userAgent: md.userAgent()
      }
    };
  }

  render() {
    return (
      <>
        <IEnotSupport />
        <Navbar />
        {this.props.children}
      </>
    );
  }
}

export default Layout;
