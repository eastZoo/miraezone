import React from "react";
import * as S from "./ProductItem.style";
import sale from "@/styles/assets/images/sale.png";
import { LuShoppingCart } from "react-icons/lu";
import { HiOutlineHeart } from "react-icons/hi2";

// src\components\molecules\WishlistSection\index.tsx
// src\components\atoms\ProductItem\index.tsx
// src\components\molecules\EventProductsSection\index.tsx
// 에서 사용중

interface ProductItemProps {
  id?: number;
  title: string;
  unit: string;
  price: string;
  image?: string;
  labels: string[];
  isSpecialPrice?: boolean;
  isComingSoon?: boolean;
  onWishlist?: () => void;
  onAddToCart?: () => void;
  // 사용 유형에 따라 하트,장바구니 아이콘 노출 여부
  showWishlist?: boolean;
  showCart?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
}

const ProductItem: React.FC<ProductItemProps> = ({
  // id,
  title,
  unit,
  price,
  image,
  labels,
  isSpecialPrice = false,
  isComingSoon = false,
  onWishlist,
  onAddToCart,
  showWishlist = true,
  showCart = true,
  size = "lg",
}) => {
  const getLabelClass = (label: string) => {
    switch (label) {
      case "냉장":
        return "refrigerated";
      case "냉동":
        return "frozen";
      case "베스트":
        return "best";
      case "행사":
        return "event";
      case "특가":
        return "special";
      case "입고예정":
        return "coming-soon";
      case "NEW":
        return "new";
      default:
        return "";
    }
  };

  return (
    <S.ProductItemContainer>
      <S.ProductImageContainer $size={size}>
        {/* 이미지 없을 떈 대체 이모지 */}
        {image ? (
          <S.ProductImage src={image} alt={title} />
        ) : (
          <S.ProductImage>🥩</S.ProductImage>
        )}

        {/* 특가 라벨 */}
        {isSpecialPrice && <S.SpecialPriceLabel src={sale} alt="sale" />}

        {/* 입고예정 라벨 */}
        {isComingSoon && <S.ComingSoonLabel>입고예정</S.ComingSoonLabel>}
      </S.ProductImageContainer>

      <S.ProductInfo>
        <S.ProductTitle>{title}</S.ProductTitle>
        <S.ProductPrice>
          <div>
            <S.ProductUnit>{unit}당</S.ProductUnit> {price}
          </div>
          <div>
            <S.ProductActions>
              {showWishlist && (
                <S.ActionButton onClick={onWishlist}>
                  <HiOutlineHeart />
                </S.ActionButton>
              )}
              {showCart && (
                <S.CartButton onClick={onAddToCart}>
                  <LuShoppingCart />
                </S.CartButton>
              )}
            </S.ProductActions>
          </div>
        </S.ProductPrice>

        <S.ProductLabels>
          {labels.map((label, index) => (
            <S.Label key={index} className={getLabelClass(label)}>
              {label}
            </S.Label>
          ))}
        </S.ProductLabels>
      </S.ProductInfo>
    </S.ProductItemContainer>
  );
};

export default ProductItem;
