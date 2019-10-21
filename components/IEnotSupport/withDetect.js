import React, { useState, useEffect } from "react";
import { detect } from "detect-browser";

export default Component => props => {
  const [browser, setBrowser] = useState(null);

  useEffect(() => {
    const browser = detect();
    if (browser) {
      setBrowser(browser.name);
    }
  });

  if (browser === "ie") return <Component {...props} />;
  else return null;
};
