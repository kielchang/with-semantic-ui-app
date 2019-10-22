import styled from "styled-components";

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