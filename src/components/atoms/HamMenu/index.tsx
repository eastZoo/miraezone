import * as S from "./HamMenu.style";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// 아이콘
import { HiOutlineShoppingBag, HiOutlineCamera } from "react-icons/hi2";
import { LiaClipboardListSolid } from "react-icons/lia";
import { HiOutlineUser } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";

const categories = [
  {
    title: "한우",
    items: [
      { label: "한우암소", to: "/category/hanwoo/cow" },
      { label: "한우거세", to: "/category/hanwoo-castrated" },
    ],
  },
  {
    title: "한돈",
    items: [
      { label: "수입우육", to: "/category/import-beef" },
      { label: "수입돈육", to: "/category/import-pork" },
    ],
  },
  { title: "수입우육", items: [] },
  { title: "수입돈육", items: [] },
  { title: "닭·오리", items: [] },
  { title: "가림 세절육", items: [] },
  { title: "가림 제주돈", items: [] },
];

interface HamMenuProps {
  open: boolean;
  onClose: () => void;
}

const HamMenu: React.FC<HamMenuProps> = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState<"category" | "request" | "notice">(
    "category"
  );

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <>
      {/* 오버레이 배경 */}
      <S.Overlay data-open={open} onClick={onClose} />

      {/* 닫기 버튼 */}
      {open && (
        <S.CloseButton onClick={onClose} aria-label="메뉴 닫기">
          <IoIosClose />
        </S.CloseButton>
      )}

      {/* 햄버거 메뉴 영역 */}
      <S.HamMenuContainer data-open={open}>
        {/* 로그인/회원가입 */}
        <S.HeaderRow>
          <S.LoginBtn to="/auth/login">로그인</S.LoginBtn>
          <S.JoinBtn to="/auth/register/welcome">회원가입</S.JoinBtn>
        </S.HeaderRow>

        {/* 유틸리티 */}
        <S.UtilityMenu>
          <li>
            <Link to="/mypage/cart">
              <S.UtilityItem>
                <HiOutlineShoppingBag />
                <span>장바구니</span>
              </S.UtilityItem>
            </Link>
          </li>
          <li>
            <Link to="/mypage/order">
              <S.UtilityItem>
                <LiaClipboardListSolid />
                <span>주문/배송</span>
              </S.UtilityItem>
            </Link>
          </li>
          <li>
            <Link to="/mypage/order">
              <S.UtilityItem>
                <HiOutlineCamera />
                <span>구매후기</span>
              </S.UtilityItem>
            </Link>
          </li>
          <li>
            <Link to="/mypage">
              <S.UtilityItem>
                <HiOutlineUser />
                <span>마이페이지</span>
              </S.UtilityItem>
            </Link>
          </li>
        </S.UtilityMenu>

        {/* 메뉴 내부 탭메뉴 */}
        <S.TabMenuWrapper>
          <S.TabMenu>
            <button
              className={activeTab === "category" ? "active" : ""}
              onClick={() => setActiveTab("category")}
            >
              카테고리
            </button>
            <button
              className={activeTab === "request" ? "active" : ""}
              onClick={() => setActiveTab("request")}
            >
              고객요청사항
            </button>
            <button
              className={activeTab === "notice" ? "active" : ""}
              onClick={() => setActiveTab("notice")}
            >
              공지사항
            </button>
          </S.TabMenu>

          {/* 탭 콘텐츠 */}
          {activeTab === "category" && (
            <S.NavList>
              {categories.map((c, idx) => {
                const opened = openIdx === idx;
                return (
                  <li key={c.title}>
                    <S.AccHeader
                      type="button"
                      aria-expanded={opened}
                      onClick={() => setOpenIdx(opened ? null : idx)}
                    >
                      <span>{c.title}</span>
                      <S.Chevron $open={opened} aria-hidden />
                    </S.AccHeader>

                    <S.AccPanel data-open={opened}>
                      {c.items.map((s) => (
                        <Link key={s.to} to={s.to} onClick={onClose}>
                          {s.label}
                        </Link>
                      ))}
                    </S.AccPanel>
                  </li>
                );
              })}
            </S.NavList>
          )}

          {activeTab === "request" && (
            <div>
              <p>여기는 고객요청사항 탭 내용</p>
            </div>
          )}

          {activeTab === "notice" && (
            <div>
              <p>여기는 공지사항 탭 내용</p>
            </div>
          )}
        </S.TabMenuWrapper>

        {/* CS 정보 */}
        <S.CustomerCenter>
          <p>부민축산 원육 고객센터</p>
          <strong>010-5076-0406</strong>
          <p>가림에프앤씨 세절육 고객센터</p>
          <strong>051-1722-3666</strong>

          <small>
            평일: 09시 ~ 18시 (토/일, 공휴일 휴무)
            <br />
            점심: 오후 12시 ~ 오후 1시
          </small>
        </S.CustomerCenter>
      </S.HamMenuContainer>
    </>
  );
};

export default HamMenu;
