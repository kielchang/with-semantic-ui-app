import React from "react";
import { Responsive } from "semantic-ui-react";

const getWidthFactory = isMobileFromSSR => () => {
  const isSSR = typeof window === "undefined";
  const ssrValue = isMobileFromSSR ? Responsive.onlyMobile.maxWidth : Responsive.onlyTablet.minWidth;

  return isSSR ? ssrValue : window.innerWidth;
};

class Responsive_Custom extends Responsive {
  render() {
    const { children, isMobileFromSSR, ...props } = this.props;
    return (
      <Responsive {...props} fireOnMount getWidth={getWidthFactory(isMobileFromSSR)}>
        {children}
      </Responsive>
    );
  }
}

// Responsive_Custom.getInitialProps = async ({ req }) => {
//   let pageProps = {};
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }

//   return { pageProps, isMobileFromSSR };
// };

export default Responsive_Custom;
