import React, { useState, useEffect } from "react";
import Bowser from "bowser";

export default Component => props => {
  const [isValidBrowser, setIsValidBrowser] = useState(true);

  useEffect(() => {
    const browser = Bowser.getParser(navigator.userAgent);

    // const browser = detect();
    if (browser) {
      const isValidBrowser = browser.satisfies({
        ie: ">11",
        safari: ">=9",
        chrome: ">=29",
        firefox: ">28",
        opera: ">=17"
      });
      setIsValidBrowser(isValidBrowser);
    }
  }, []);

  return <>{isValidBrowser ? null : <Component {...props} />} </>;
};
