import * as S from "./HomeCategoryMobile.style";
import * as C from "@/styles/GlobalStyle";
import { Link } from "react-router-dom";

import { FaRegSnowflake } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";
import { MdOutlineAssignment } from "react-icons/md";

const categories = [
  { icon: <GiWaterDrop />,  prefix: "냉장", label: "한우", path: "/" },
  { icon: <FaRegSnowflake />, prefix: "냉동", label: "한우", path: "/" },
  { icon: <GiWaterDrop />, prefix: "냉장", label: "한돈", path: "/" },
  { icon: <FaRegSnowflake />, prefix: "냉동", label: "한돈", path: "/" },
  { icon: <GiWaterDrop />, prefix: "냉장", label: "수입우육", path: "/" },
  { icon: <FaRegSnowflake />, prefix: "냉동", label: "수입우육", path: "/" },
  { icon: <GiWaterDrop />, prefix: "냉장", label: "수입돈육", path: "/" },
  { icon: <FaRegSnowflake />, prefix: "냉동", label: "수입돈육", path: "/" },
  { icon: <GiWaterDrop />, prefix: "냉장", label: "닭·오리", path: "/" },
  { icon: <FaRegSnowflake />, prefix: "냉동", label: "닭·오리", path: "/" },
  { icon: <GiWaterDrop />, prefix: "냉장", label: "가림 제주돈", path: "/" },
  { icon: <FaRegSnowflake />, prefix: "냉동", label: "가림 제주돈", path: "/" },
  { icon: <GiWaterDrop />, label: "가림 세절육", path: "/shop/typeList?cate_type=seller&ca_id=007" },
  { icon: <MdOutlineAssignment />, prefix: "고객요청사항", path: "/mypage/requests" },
];

export const HomeCategoryMobile: React.FC = () => {
  return (
    <S.HomeCategoryMobileContainer>
      <C.MainContainerWrapper>
        <S.CategoryHeader>
          <S.CategoryTitle>맞춤 정육 카테고리</S.CategoryTitle>
        </S.CategoryHeader>

        <S.CategoryGrid>
          {categories.map((item, idx) => (
            <Link key={idx} to={item.path}>
              <S.CategoryItem>
                <S.CategoryIcon>{item.icon}</S.CategoryIcon>
                <S.CategoryLabel>
                  <S.LabelPrefix>{item.prefix}</S.LabelPrefix>
                  <S.LabelStrong>{item.label}</S.LabelStrong>
                </S.CategoryLabel>
              </S.CategoryItem>
            </Link>
        ))}
        </S.CategoryGrid>
      </C.MainContainerWrapper>
    </S.HomeCategoryMobileContainer>
  );
};