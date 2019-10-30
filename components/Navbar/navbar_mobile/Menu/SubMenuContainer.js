import { useTransition, animated } from "react-spring";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const SubMenu = styled(animated.div)`
  position: absolute;
  background-color: #1c1c1c;
  height: calc(100vh - 60px);
  width: 100vw;
  opacity: 0;
  top: 0;
  left: 0;
  z-index: 100;
`;

export default ({ isOpened, onClosed, children }) => {
  const transitions = useTransition(isOpened, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  return transitions.map(({ item, key, props }) =>
    item ? (
      <SubMenu key={key} style={{ ...props }}>
        <div onClick={onClosed}>
          <Icon name="align left" />
        </div>
        {children}
      </SubMenu>
    ) : null
  );
};
