import MenuContainer from "./MenuContainer";
import MainMenuItem from "./MainMenuItem";
import SubMenuContainer from "./SubMenuContainer";

export default ({ isOpened, ...props }) => {
  return (
    <MenuContainer isOpened={isOpened}>
      <MainMenuItem title="關於我們">
        <SubMenuContainer isOpened={false}></SubMenuContainer>
      </MainMenuItem>
      <MainMenuItem title="產品介紹" />
      <MainMenuItem title="解決方案" />
      <MainMenuItem title="聯絡我們" />
    </MenuContainer>
  );
};
