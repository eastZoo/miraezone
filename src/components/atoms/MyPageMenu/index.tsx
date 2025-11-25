import { menuGroups } from "@/lib/data/dummy";
import * as S from "./MyPageMenu.style";
import { Link, NavLink } from "react-router-dom";

export const MyPageMenu = () => {
  return (
    <S.MyPageMenu>
      <S.MyPageMenuTitle>
        <Link to="/mypage">
          <span>MY PAGE</span>
          마이 페이지
        </Link>
      </S.MyPageMenuTitle>

      {/* 메뉴 그룹 */}
      {menuGroups.map((group) => (
        <S.MyPageMenuBox key={group.title}>
          <S.MyPageMenuListTitle>{group.title}</S.MyPageMenuListTitle>
          <S.MyPageMenuList>
            {group.items.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} className={({ isActive }) => (isActive ? "active" : undefined)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </S.MyPageMenuList>
        </S.MyPageMenuBox>
      ))}

      {/* 고객센터 박스 */}
      <S.MyPageCsBox>
        <S.MyPageCsItem>
          <S.MyPageCsTitle>부민축산 원육 고객센터</S.MyPageCsTitle>
          <S.MyPageCsPhone>010-5076-0406</S.MyPageCsPhone>
          <S.MyPageCsInfo>
            <li>평일 : 09시 ~ 18시</li>
            <li>(토요일, 공휴일 휴무)</li>
            <li>점심 : 오후 12시 ~ 오후 1시</li>
          </S.MyPageCsInfo>
        </S.MyPageCsItem>

        <S.MyPageCsItem>
          <S.MyPageCsTitle>가림에프앤씨 세절육 고객센터</S.MyPageCsTitle>
          <S.MyPageCsPhone>051-722-3666</S.MyPageCsPhone>
          <S.MyPageCsInfo>
            <li>평일 : 09시 ~ 18시</li>
            <li>(토요일, 공휴일 휴무)</li>
            <li>점심 : 오후 12시 ~ 오후 1시</li>
          </S.MyPageCsInfo>
        </S.MyPageCsItem>
      </S.MyPageCsBox>
    </S.MyPageMenu>
  );
};
