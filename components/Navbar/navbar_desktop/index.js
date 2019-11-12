import { Icon } from "semantic-ui-react";
import { Navbar, NavLogo, NavItemContainer, NavItem, NavSubItem, Image, NavLeftItems } from "./styled";
import Logo from "../../Logo";

export default () => (
  <Navbar>
    <NavLogo>
      <Logo size={30} />
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
);
