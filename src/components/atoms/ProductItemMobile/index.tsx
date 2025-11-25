import * as S from "./ProductItemMobile.style";

interface ProductItem {
  id: string | number;
  name: string;
  priceText: string;
  orderNo?: string;
  imageUrl?: string;
  unitPriceText?: string;
}

interface MobileProductItemProps {
  statusText: string;
  dateText: string;
  items: ProductItem[];
  onMenuClick?: () => void;
}

export const MobileProductItem: React.FC<MobileProductItemProps> = ({
  statusText,
  dateText,
  items,
  onMenuClick,
}) => {
  const item = items[0];
  
  return (
    <S.Container>
      <S.DateText>{dateText}</S.DateText>
      
      <S.MobileCard>
        <S.CardHeader>
          <S.StatusText>{statusText}</S.StatusText>
          <S.MenuButton onClick={onMenuClick} aria-label="메뉴">
            <span>배송조회</span>
            <S.MenuIcon />
          </S.MenuButton>
        </S.CardHeader>
        
        <S.CardContent>
          <S.ProductImage 
            src={item.imageUrl || '/placeholder.png'} 
            alt={item.name}
          />
          
          <S.ProductInfo>
            <S.ProductName>{item.name}</S.ProductName>
            <S.ProductMeta>
              {item.priceText}
              {item.unitPriceText && ` · ${item.unitPriceText}`}
              {item.orderNo && ` / ${item.orderNo}`}
            </S.ProductMeta>
          </S.ProductInfo>
        </S.CardContent>
      </S.MobileCard>
    </S.Container>
  );
};
