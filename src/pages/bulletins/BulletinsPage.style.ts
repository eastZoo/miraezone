import styled from "styled-components";
import { device } from "@/styles/GlobalStyle";

export const ContentWrapper = styled.div`
  width: 100%;
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e5e5;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
    margin-bottom: 24px;
    padding-bottom: 16px;
  }
`;

export const ViewMode = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ViewIcon = styled.button<{ $active?: boolean }>`
  width: 32px;
  height: 32px;
  border: 1px solid #e5e5e5;
  background: ${({ $active }) => ($active ? "#1a1a2e" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#666")};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  transition: all 0.2s ease;

  &:hover {
    border-color: #1a1a2e;
  }
`;

export const InfoText = styled.span`
  font-size: 1.4rem;
  color: #666;
  margin-left: 12px;
`;

export const SearchArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media ${device.mobile} {
    width: 100%;
  }
`;

export const SelectBox = styled.select`
  padding: 8px 12px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-size: 1.4rem;
  background: #ffffff;
  cursor: pointer;

  @media ${device.mobile} {
    flex-shrink: 0;
  }
`;

export const SearchInput = styled.input`
  padding: 8px 16px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-size: 1.4rem;
  width: 250px;

  &:focus {
    outline: none;
    border-color: #1a1a2e;
  }

  @media ${device.mobile} {
    flex: 1;
    width: auto;
  }
`;

export const SearchButton = styled.button`
  padding: 8px 20px;
  background: #1a1a2e;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #2a2a3e;
  }
`;

export const BulletinsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;

  @media ${device.mobile} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 30px;
  }
`;

export const BulletinCard = styled.div`
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    border-color: #1a1a2e;
  }
`;

export const BulletinThumbnail = styled.div`
  width: 100%;
  aspect-ratio: 3 / 4;
  background: #f8f9ff;
  position: relative;
  overflow: hidden;
`;

export const ThumbnailPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 1.6rem;
  font-weight: 600;
  background: linear-gradient(135deg, #f8f9ff 0%, #e8ebff 100%);
`;

export const BulletinInfo = styled.div`
  padding: 16px;
`;

export const BulletinDate = styled.div`
  font-size: 1.3rem;
  color: #999;
  margin-bottom: 8px;
`;

export const BulletinTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: #1a1a2e;
  line-height: 1.4;

  @media ${device.mobile} {
    font-size: 1.4rem;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
`;

export const PaginationButton = styled.button<{ disabled?: boolean }>`
  padding: 8px 16px;
  border: 1px solid #e5e5e5;
  background: #ffffff;
  color: #666;
  font-size: 1.4rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    border-color: #1a1a2e;
    color: #1a1a2e;
  }
`;

export const PaginationNumber = styled.button<{ $active?: boolean }>`
  padding: 8px 12px;
  border: 1px solid #e5e5e5;
  background: ${({ $active }) => ($active ? "#1a1a2e" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#666")};
  font-size: 1.4rem;
  cursor: pointer;
  min-width: 36px;
  transition: all 0.2s ease;

  &:hover {
    border-color: #1a1a2e;
    color: ${({ $active }) => ($active ? "#ffffff" : "#1a1a2e")};
  }
`;

