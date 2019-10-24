import styled from "styled-components";
import { animated } from "react-spring";

export const Navbar = styled.nav`
  background-color: #1c1c1c;
  color: #fafafa;
  padding: 0 5vw;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.9em;
  height: ${({ theme }) => theme.size.navHeight};
`;

export const Menu = styled(animated.div)`
  position: absolute;
  background-color: #1c1c1c;
  height: calc(100% - 60px);
  width: 100%;
  top: 60px;
  left: 0;
`;
