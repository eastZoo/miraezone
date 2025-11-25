import styled from "styled-components";


export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  margin-bottom: 8px;
`;

export const DateText = styled.div`
  padding: 16px 8px;
  font-size: 1.4rem;
  color: #111;
  font-weight: 400;
  margin-top: 8px;
`;

export const MobileCard = styled.div`

  border: 1px solid #eee;
  border-radius: 20px;
  overflow: hidden;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 10px;
  border-bottom: 1px solid #e5e5e5;
`;

export const StatusText = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: #1a1a1a;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 0;
  
  &:hover {
    color: #666;
  }

  span {
    font-size: 1.2rem;
  }
`;

export const MenuIcon = styled.div`
  width: 20px;
  height: 20px;
  
  &::before {
    content: '⋮';
    font-size: 2rem;
    line-height: 1;
    display: block;
  }
`;

export const CardContent = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px;
`;

export const ProductImage = styled.img`
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background-color: #f5f5f5;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProductName = styled.p`
  font-size: 1.4rem;;
  color: #111;
  line-height: 1.4;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductMeta = styled.p`
  font-size: 1.2rem;
  color: #999;
  margin: 0;
  line-height: 1.3;
`;