import { useTransition, animated } from "react-spring";
import styled from "styled-components";

const SubMenu = styled(animated.div)`
  position: absolute;
  background-color: #fafafa;
  height: calc(100vh - 60px);
  width: 100vw;
  transform: translateX(-100vw);
  top: 0;
  left: 0;
  z-index: 100;
  /* border-bottom: 1px #fafafa solid; */
`;

export default ({ isOpened, children }) => {
  const transitions = useTransition(isOpened, null, {
    from: { transform: "translateX(100vw)" },
    enter: { transform: "translateX(0)" },
    leave: { transform: "translateX(100vw)" }
  });
  return transitions.map(({ item, key, props }) =>
    item ? (
      <SubMenu key={key} style={{ ...props }}>
        {children}
      </SubMenu>
    ) : null
  );
  return <SubMenu>{children}</SubMenu>;
};
