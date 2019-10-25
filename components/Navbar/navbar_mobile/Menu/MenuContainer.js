import { useState } from "react";
import { useTransition } from "react-spring";
import { Menu } from "../styled";

export default ({ isOpened, children }) => {
  const transitions = useTransition(isOpened, null, {
    from: { opacity: 0.8, height: "10%" },
    enter: { opacity: 1, height: "100%" },
    leave: { opacity: 0, height: "0%" }
  });

  return transitions.map(({ item, key, props }) =>
    item ? (
      <Menu key={key} style={{ ...props }}>
        {children}
        <div style={{ flex: 1 }}></div>
      </Menu>
    ) : null
  );
};
