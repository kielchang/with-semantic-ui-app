import styled from "styled-components";

const Navbar = styled.nav`
  background-color: #b86f60;
  padding: 0 5vw;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.6rem;
  /* height: ${({ theme }) => theme.size.navHeight}; */
`;

const NavLogo = styled.div`
  flex: 1;
  & h1 {
  }
`;

const NavItemContainer = styled.ul`
  background-color: #898989;
  flex: 4;
  display: flex;
  justify-content: space-evenly;
  /* height: calc(${({ theme }) => theme.size.navHeight} - 10px); */
`;

const NavItem = styled.li`
  list-style: none;

  & a {
    text-decoration: none;
    color: #3e72b7;
    position: relative;
    padding: 1rem 0;
    letter-spacing: 2px;
  }

  & :last-child a {
    margin: 0;
  }

  & :first-child a {
    margin: 0;
  }

  & a::before,
  & a::after {
    position: absolute;
  }

  & a::after {
    z-index: 11;
    content: "";
    position: absolute;
    bottom: 0; 
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

const NavLeftItem = styled.div`
  flex: 2;
  background-color: #696969;
`;

export default () => (
  <>
    <Navbar>
      <NavLogo>
        <h1>KCI</h1>
      </NavLogo>
      <NavItemContainer>
        <NavItem>
          <a href="#">aa</a>
        </NavItem>
        <NavItem>
          <a href="#">bb</a>
        </NavItem>
        <NavItem>
          <a href="#">cc</a>
        </NavItem>
        <NavItem>
          <a href="#">dd</a>
        </NavItem>
      </NavItemContainer>
      <NavLeftItem>AA</NavLeftItem>
    </Navbar>
  </>
);
