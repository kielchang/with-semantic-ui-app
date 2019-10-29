import MenuContainer from "./MenuContainer";
import MainMenuItem from "./MainMenuItem";
import SubMenuContainer from "./SubMenuContainer";

export default ({ isOpened, onMenuClosed, ...props }) => {
  return (
    <MenuContainer isOpened={isOpened} onMenuClosed={onMenuClosed}>
      <MainMenuItem key={"about"} title="關於我們">
        <SubMenuContainer key={"test"} isOpened={false}></SubMenuContainer>
      </MainMenuItem>
      <MainMenuItem key={"product"} title="產品介紹" />
      <MainMenuItem key={"solution"} title="解決方案" />
      <MainMenuItem key={"contect"} title="聯絡我們" />
    </MenuContainer>
  );
};
