import * as S from "./SubMenu.style"
import IconHome from "@/styles/assets/images/home.png";

export const SubMenu = () => {
  return (
    <S.SubMenuBox>
      <S.SubMenuItem>
        <a href="/">
          <img src={IconHome} alt="홈아이콘" />
        </a>
      </S.SubMenuItem>

      <S.ChevronRight />

      <S.SubMenuItem>
        <S.CustomSelect name="category1" id="1">
          <option value="선택">선택</option>
          <option value="한돈">한돈</option>
          <option value="한우">한우</option>
          <option value="육우">육우</option>
        </S.CustomSelect>
        <S.ChevronDown/>
      </S.SubMenuItem>

      <S.ChevronRight />

      <S.SubMenuItem>
        <S.CustomSelect name="category2" id="2">
          <option value="선택">선택</option>
          <option value="냉장">냉장</option>
          <option value="냉동">냉동</option>
          <option value="가공">가공</option>
        </S.CustomSelect>
        <S.ChevronDown/>
      </S.SubMenuItem>
    </S.SubMenuBox>
  );
};