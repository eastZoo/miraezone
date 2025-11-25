import React from "react";
import * as S from "./RecentProductsSidebar.style";
import { FaTimes } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// interface RecentProduct {
//   id: number;
//   name: string;
//   price: string;
//   image: string;
// }

interface RecentProductsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  products?: any[];
}

const RecentProductsSidebar: React.FC<RecentProductsSidebarProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <>
      {isOpen && <S.Overlay onClick={onClose} />}
      <S.SidebarContainer isOpen={isOpen}>
        <S.SidebarHeader>
          <S.SidebarTitle>최근본상품 100</S.SidebarTitle>
          <S.CloseButton onClick={onClose}>
            <FaTimes />
          </S.CloseButton>
        </S.SidebarHeader>

        <S.ProductsList>
          {[].map((product: any) => (
            <S.ProductItem key={product.id}>
              <S.ProductImage>
                <img src={product.imageUrl} alt={product.title} />
              </S.ProductImage>
              <S.ProductInfo>
                <S.ProductTitle>{product.title}</S.ProductTitle>
                <S.ProductPrice>
                  <S.ProductUnit>{product.unit}당 </S.ProductUnit>
                  {product.price}
                </S.ProductPrice>
              </S.ProductInfo>
            </S.ProductItem>
          ))}
        </S.ProductsList>

        <S.Pagination>
          <S.PaginationButton>
            <FaChevronLeft />
          </S.PaginationButton>
          <S.PaginationText>1/10</S.PaginationText>
          <S.PaginationButton>
            <FaChevronRight />
          </S.PaginationButton>
        </S.Pagination>
      </S.SidebarContainer>
    </>
  );
};

export default RecentProductsSidebar;
