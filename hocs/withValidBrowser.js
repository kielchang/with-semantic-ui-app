import Bowser from "bowser";

export const withValidBrowser = Page => {
  const withValidBrowser = props => <Page {...props} />;

  withValidBrowser.getInitialProps = async context => {
    const userAgent = context.req ? context.req.headers["user-agent"] : navigator.userAgent;
    const browser = Bowser.getParser(userAgent);

    let isValidBrowser = false;
    if (browser) {
      isValidBrowser = browser.satisfies({
        ie: ">12",
        safari: ">=9",
        chrome: ">=29",
        firefox: ">28",
        opera: ">=17"
      });
    }
    return {
      ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}),
      isValidBrowser
    };
  };

  return withValidBrowser;
};
