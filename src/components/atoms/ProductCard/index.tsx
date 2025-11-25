import * as S from "./ProductCard.style";
import ProductLabel from "@/components/atoms/ProductLabel";

type Variant = "order" | "wishlist" | undefined;

interface ProductItem {
  id: string | number;
  name: string;
  priceText: string;
  orderNo?: string;
  imageUrl?: string;
  unitPriceText?: string;
  labels?: string[];
}

interface ProductCardProps {
  variant?: Variant;
  items: ProductItem[];
  statusText?: string;
  dateText?: string;
  selectable?: boolean;
  selected?: boolean;
  onToggle?: (checked: boolean) => void;
  imageSize?: "sm" | "md";
  actions?: (item: ProductItem) => React.ReactNode;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  variant,
  items,
  statusText,
  dateText,
  selectable = false,
  selected = false,
  onToggle,
  imageSize,
  actions,
}) => {
  const multi = items.length > 1;

  const renderDefaultActions = (item: ProductItem, showTrack: boolean) => {
    if (variant === "order") {
      return (
        <S.ProductCardButtons>
          {showTrack && (
            <S.CardButton as="a" href={`/order/${item.id}/track`}>
              배송조회
            </S.CardButton>
          )}
          <S.CardButton as="a" href={`/order/${item.id}`}>
            주문상세
          </S.CardButton>
          <S.CardButton as="a" href={`/order/${item.id}/review`}>
            리뷰쓰기
          </S.CardButton>
        </S.ProductCardButtons>
      );
    }
    // wishlist
    return (
      <S.ProductCardButtons>
        <S.CardButton as="button">장바구니 담기</S.CardButton>
        <S.CardButton as="button">삭제</S.CardButton>
      </S.ProductCardButtons>
    );
  };

  return (
    <S.ProductCard $variant={variant} $editMode={selectable}>
      {/* variant="order"일 때 표시되는 배송상태 및 주문 날짜 영역*/}
      <S.ProductCardInfos>
        {variant === "order" && (statusText || dateText) && (
          <S.ProductStat>
            {statusText && <S.DeliveryStat>{statusText}</S.DeliveryStat>}
            {statusText && dateText && <span>/</span>}
            {dateText && <S.DeliveryStat>{dateText}</S.DeliveryStat>}
          </S.ProductStat>
        )}

        {items.map((item, idx) => {
          const isTop = idx === 0;
          const showTrack = !multi || (multi && isTop);
          return (
            <S.ProductDetail key={item.id} $variant={variant}>
              {/* 체크박스 */}
              {selectable && (
                <S.LeftAddon>
                  <S.Checkbox
                    $editMode={selectable}
                    checked={selected}
                    onChange={(e) => onToggle?.(e.target.checked)}
                    aria-checked={selected}
                  />
                </S.LeftAddon>
              )}
              <S.DetailContainer $editMode={selectable}>
                <S.DetailBox>
                  {/* 상품 이미지 */}
                  <S.ProductImg
                    $size={imageSize}
                    src={item.imageUrl}
                    alt={item.name}
                  />
                  {/* 상품명, 가격, 라벨 */}
                  <S.ProductInfo>
                    {/* 상품명 */}
                    <S.ProductName>{item.name}</S.ProductName>

                    {/* 가격 */}
                    <S.ProductDescribe $variant={variant}>
                      {variant === "order" ? (
                        <>
                          <S.ProductPrice $variant={variant}>
                            {item.priceText}
                          </S.ProductPrice>
                          {item.unitPriceText && (
                            <S.UnitPrice $variant={variant}>
                              <span className="dot">·</span>{" "}
                              {item.unitPriceText}
                            </S.UnitPrice>
                          )}
                        </>
                      ) : (
                        <>
                          {item.unitPriceText && (
                            <S.UnitPrice $variant={variant}>
                              {item.unitPriceText}당
                            </S.UnitPrice>
                          )}
                          <S.ProductPrice $variant={variant}>
                            {item.priceText}
                          </S.ProductPrice>
                        </>
                      )}

                      {variant === "order" && item.orderNo && (
                        <S.OrderNum>주문번호 {item.orderNo}</S.OrderNum>
                      )}
                    </S.ProductDescribe>

                    {/* 라벨 */}
                    {item.labels && <ProductLabel labels={item.labels} />}
                  </S.ProductInfo>
                </S.DetailBox>

                {actions
                  ? actions(item)
                  : renderDefaultActions(item, showTrack)}
              </S.DetailContainer>
            </S.ProductDetail>
          );
        })}
      </S.ProductCardInfos>
    </S.ProductCard>
  );
};
