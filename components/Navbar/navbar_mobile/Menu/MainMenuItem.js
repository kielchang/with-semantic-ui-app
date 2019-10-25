import { useState } from "react";
import { useSpring, useTransition, animated, config } from "react-spring";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

const Item = styled(animated.div)`
  display: flex;
  align-items: center;
  margin: 1em 20pt;
  padding: 1vh calc(5vw - 10px - 36px);
  border-bottom: 1px #363434 solid;
  user-select: none;
`;

const Title = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin: 0;
  flex: 1;
`;

export default ({ title, children }) => {
  const [onScale, setOnScale] = useState(false);
  const transitions = useTransition(true, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  const { x } = useSpring({ from: { x: 0 }, x: onScale ? 1 : 0, config: config.wobbly });
  const transformScaleConfig = {
    transform: x
      .interpolate({
        range: [0, 0.7, 1],
        output: [1, 1.1, 1]
      })
      .interpolate(x => `scale(${x})`)
  };

  const handleFocuseActive = () => {
    setOnScale(!onScale);
  };

  return transitions.map(({ item, key, props }) =>
    item ? (
      <>
        <Item
          key={key}
          onTouchStart={handleFocuseActive}
          onMouseEnter={handleFocuseActive}
          style={{ ...props, ...transformScaleConfig }}
        >
          <Title style={{ ...transformScaleConfig }}>{title}</Title>
          {/* <Icon style={{ ...transformScaleConfig }} name="angle right" size="big" /> */}
        </Item>
        {children}
      </>
    ) : null
  );
};
