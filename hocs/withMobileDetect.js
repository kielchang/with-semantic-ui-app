import MobileDetect from "mobile-detect";
import { Responsive } from "semantic-ui-react";

export const withMobileDetect = Page => {
  const WithMobileDetect = props => <Page {...props} />;

  const getWidth = isMobileFromSSR => () => {
    const isSSR = typeof window === "undefined";
    const ssrValue = isMobileFromSSR ? Responsive.onlyMobile.maxWidth : Responsive.onlyTablet.minWidth;

    return isSSR ? ssrValue : window.innerWidth;
  };

  WithMobileDetect.getInitialProps = async context => {
    const userAgent = context.req ? context.req.headers["user-agent"] : navigator.userAgent;
    const detect = new MobileDetect(userAgent);
    const isMobileFromSSR = !!detect.mobile();

    return {
      ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}),
      deviceInfo: {
        mobile: detect.mobile(),
        tablet: detect.tablet(),
        os: detect.os(),
        userAgent: detect.userAgent()
      },
      getWidth: getWidth(isMobileFromSSR)
    };
  };

  return WithMobileDetect;
};
