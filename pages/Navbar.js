import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const Navbar = styled.nav`
  background-color: #1c1c1c;
  color: #fafafa;
  padding: 0 5vw;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.9em;
  height: ${({ theme }) => theme.size.navHeight};
`;

const NavLogo = styled.div`
  flex: 1;
  & h1 {
  }
`;

const NavItemContainer = styled.ul`
  /* background-color: #898989; */
  flex: 8;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  margin: 0 3rem;
  /* height: calc(${({ theme }) => theme.size.navHeight} - 10px); */
`;

const NavItem = styled.li`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  list-style: none;
  min-width: 6rem;
  text-align: center;

  & a {
    text-decoration: none;
    color: #fafafa;
    position: relative;
    letter-spacing: 2px;
    border-width: 0;
    border-style: solid;
  }

  & a::before,
  & a::after {
    content: "";
    position: absolute;
    width: 3px;
    height: 0%;
    border-width: 1px;
    border-radius: 0.8px;
    box-shadow: 0px 20px 10px 0px #fafafa;
    background-image: linear-gradient(to top, #fafafa, transparent);
    transition: height 0.08s ease-in;
  }

  & a::before {
    left: -9px;
  }

  & a::after {
    right: -9px;
  }

  &:hover a ::before,
  &:hover a ::after {
    height: 100%;
    box-shadow: 0px 100% 5px 100px #fafafa;
    transition: height 0.2s ease-out;
  }
`;

const NavSubItem = styled.div`
  color: black;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 60px;
  left: 5vw;
  height: 0;
  transition: height 0.07s ease-out;
  overflow: hidden;
  background-color: #fafafaa0;
  backdrop-filter: saturate(180%) blur(10px);
  width: 90vw;
  z-index: 10;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);

  ${NavItem}:hover & {
    height: 150px;
    transition: height 0.3s ease-out;
    transition-delay: 0.07s;
  }

  > * {
    flex: 0 0 23%; /* explanation below */
    margin: 25px 1%;
    height: 100px;
    filter: grayscale(100%);
    transition: filter 0.5s linear;
  }

  > *:hover {
    transition: filter 0.3s linear;
    filter: grayscale(0%);
  }
`;

const NavLeftItems = styled.div`
  /* background-color: #696969; */
  display: flex;
  flex: 2;
  justify-content: flex-end;
`;

const Image = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
`;

export default () => (
  <>
    <Navbar>
      <NavLogo>
        <h1>KCI</h1>
      </NavLogo>
      <NavItemContainer>
        <NavItem>
          <a href="#">關於我們</a>
          <NavSubItem>
            <div style={{}}>
              <Image src="https://picsum.photos/300" alt="image" />
            </div>
          </NavSubItem>
        </NavItem>
        <NavItem>
          <a href="#">解決方案</a>
          <NavSubItem>
            <div style={{}}>
              <Image src="https://picsum.photos/400" alt="image" />
            </div>
            <div style={{}}>
              <Image src="https://picsum.photos/400" alt="image" />
            </div>
            <div style={{}}>
              <Image src="https://picsum.photos/400" alt="image" />
            </div>
            <div style={{}}>
              <Image src="https://picsum.photos/400" alt="image" />
            </div>
          </NavSubItem>
        </NavItem>
        <NavItem>
          <a href="#">產品</a>
          <NavSubItem>
            <div style={{}}>
              <Image src="https://picsum.photos/600" alt="image" />
            </div>
            <div style={{}}>
              <Image src="https://picsum.photos/600" alt="image" />
            </div>
          </NavSubItem>
        </NavItem>
        <NavItem>
          <a href="#">聯絡我們</a>
          <NavSubItem>
            <div style={{}}>
              <Image src="https://picsum.photos/700" alt="image" />
            </div>
          </NavSubItem>
        </NavItem>
      </NavItemContainer>
      <NavLeftItems>
        <Icon name="user" color={"blue"} />
        <Icon name="globe" />
        <Icon name="search" />
      </NavLeftItems>
    </Navbar>

    <div style={{ height: "calc(100vh - 60px)", width: "100%" }}>
      <Image src="https://picsum.photos/1080/1920" alt="image" />
    </div>
  </>
);
