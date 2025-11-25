import styled from "styled-components";

export const HomeCategoryMobileContainer = styled.div`
  padding: 40px 0;
  background: white;
  position: static;
`;

export const CategoryHeader = styled.div`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 45px;
  position: relative;
`;

export const CategoryTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`;

export const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 4px 7px rgba(92, 92, 92, 0.1);
  border: 1px solid #eee;
`;

export const CategoryIcon = styled.div`
  font-size: 3em;
`;

export const CategoryLabel = styled.div`
  display: flex;
  gap: 2px;
  font-size: 1.4rem;
  color: #333;
`;

export const LabelPrefix = styled.div`
  font-weight: 400;
`;

export const LabelStrong = styled.div`
  font-weight: 600;
`;
