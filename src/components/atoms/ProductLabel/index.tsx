import * as S from "../ProductItem/ProductItem.style";

export const getLabelClass = (label: string) => {
  switch (label) {
    case "냉장": return "refrigerated";
    case "냉동": return "frozen";
    case "베스트": return "best";
    case "행사": return "event";
    case "특가": return "special";
    case "입고예정": return "coming-soon";
    case "NEW": return "new";
    default: return "";
  }
};

interface ProductLabelProps {
  labels: string[];
}

const ProductLabel: React.FC<ProductLabelProps> = ({ labels }) => {
  if (!labels || labels.length === 0) return null;

  return (
    <S.ProductLabels>
      {labels.map((label, index) => (
        <S.Label key={index} className={getLabelClass(label)}>
          {label}
        </S.Label>
      ))}
    </S.ProductLabels>
  );
};

export default ProductLabel;