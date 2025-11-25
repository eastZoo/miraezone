import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100vh;
  background: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
  background: white;
`;

export const SidebarTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background: #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #e0e0e0;
  }

  svg {
    width: 14px;
    height: 14px;
    color: #666;
  }
`;

export const ProductsList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProductItem = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:hover {
    background: #f8f9fa;
  }
`;

export const ProductImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  background: #f5f5f5;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
`;

export const ProductTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 8px 0;
  line-height: 1.4;
`;

export const ProductUnit = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.64;
  letter-spacing: -0.28px;
  margin-right: 4px;
  text-align: left;
  color: ${({ theme }) => theme.colors.whiteGreyText};
`;

export const ProductPrice = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.red};
  display: flex;
  align-items: center;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 20px;
  border-top: 1px solid #f0f0f0;
  background: white;
`;

export const PaginationButton = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f5f5f5;
    border-color: #a44945;
  }

  svg {
    width: 12px;
    height: 12px;
    color: #666;
  }
`;

export const PaginationText = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: #666;
`;
