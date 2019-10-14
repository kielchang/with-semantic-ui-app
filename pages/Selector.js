import styled from "styled-components";

const Navbar = styled.nav`
  background-color: #b86f60;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.6rem;
  /* height: ${({ theme }) => theme.size.navHeight}; */
`;

const NavItemContainer = styled.ul`
  background-color: #fafafa;
  display: flex;
  /* height: calc(${({ theme }) => theme.size.navHeight} - 10px); */
`;

const NavItem = styled.li`
  background-color: #bcff40;
  list-style: none;
  margin-right: 5px;

  & :last-child {
    margin-right: 0;
  }

  & :last-child a {
    color: #b86f60;
  }

  & :first-child a {
    font-weight: bold;
    color: #183d6e;
  }

  & a {
    text-decoration: none;
    color: #3e72b7;
    position: relative;
    padding: 1rem 0;
    margin: 0 3rem;
    letter-spacing: 2px;
  }
`;

export default () => (
  <>
    <Navbar>
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
    </Navbar>
  </>
);
