import * as S from "./CartItemCard.style";
import ProductLabel from "../ProductLabel";
import type { CartItem } from "@/lib/types/cart";
import { useMediaQuery } from "react-responsive";
import { TiDelete } from "react-icons/ti";
interface ProductCardProps {
  storeName: string;
  items: CartItem[];
  selectable?: boolean;
  selectedIds?: Set<number>;
  onToggle?: (id: number, checked: boolean) => void;
  imageSize?: "sm" | "md"
}

export const CartItemCard: React.FC<ProductCardProps> = ({
  storeName,
  items,
  selectable = false,
  selectedIds = new Set(),
  onToggle,
  imageSize = "md",
}) => {

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <S.CartItemCard $variant="wishlist">
      {/* 스토어 타이틀 */}
      <S.StoreHeader>
        {selectable && (
          <S.Checkbox
            type="checkbox"
            checked={items.every((item) => selectedIds.has(item.id))}
            onChange={(e) => {
              const checked = e.target.checked;
              items.forEach((item) => onToggle?.(item.id as number, checked));
            }}
          />
        )}
        <span>{storeName}</span>
      </S.StoreHeader>

      <S.ProductCardInfos>
        {items.map((item) => (
          <S.ProductDetail key={item.id}>
            {/* 체크박스 */}
            {selectable && (
              <S.LeftAddon>
                <S.Checkbox
                  type="checkbox"
                  checked={selectedIds.has(item.id)}
                  onChange={(e) => onToggle?.(item.id as number, e.target.checked)}
                />
              </S.LeftAddon>
            )}

            {/* 상품 상세 */}
            <S.DetailBox>
              <S.ProductImg
                $size={imageSize}
                src={item.imageUrl}
                alt={item.title}
              />

              <S.ProductInfo>
                <S.ProductName>{item.title}</S.ProductName>

                <S.QtyWrapper>
                  <S.DescriptWrapper>
                    <S.ProductDescribe $variant="wishlist">
                      {item.unit && <S.UnitPrice>{item.unit}당</S.UnitPrice>}
                      <S.ProductPrice>{item.price}</S.ProductPrice>
                    </S.ProductDescribe>

                      {item.labels && <ProductLabel labels={item.labels} />}
                   </S.DescriptWrapper>
                  <S.QtyBox>
                    <button>-</button>
                    <span>{item.qty}</span>
                    <button>+</button>
                  </S.QtyBox>
                </S.QtyWrapper>
                
                {isMobile &&
                  <S.MRemoveButton>
                    <span>342,000원</span>
                    <TiDelete/>
                  </S.MRemoveButton>
                }
              </S.ProductInfo>
            </S.DetailBox>

            {/* 삭제 */}
            {!isMobile && <S.RemoveButton>삭제</S.RemoveButton>}
          </S.ProductDetail>
        ))}
      </S.ProductCardInfos>
    </S.CartItemCard>
  );
};