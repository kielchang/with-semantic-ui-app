import MenuContainer from "./MenuContainer";
import MainMenuItem from "./MainMenuItem";

export default ({ isOpened, onMenuClosed, ...props }) => {
  return (
    <MenuContainer isOpened={isOpened} onMenuClosed={onMenuClosed}>
      <MainMenuItem key={"about"} title="關於我們" />
      <MainMenuItem key={"product"} title="產品介紹" />
      <MainMenuItem key={"solution"} title="解決方案" />
      <MainMenuItem key={"contect"} title="聯絡我們" />
    </MenuContainer>
  );
};
