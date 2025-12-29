import styled from "styled-components";

export const ContentWrapper = styled.div`
  padding: 16px;
  max-width: 1600px;
  margin: 0 auto;
`;

export const DetailContainer = styled.div`
  width: 100%;
`;

export const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 2px solid #e0e0e0;
  padding: 0 0 16px 0;
`;

export const TitleSection = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
  line-height: 1.4;
`;

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  color: #666;
`;

export const Date = styled.span``;

export const DownloadCount = styled.span``;

export const BackButton = styled.button`
  padding: 10px 24px;
  background: #333;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #555;
  }
`;

export const AttachmentSection = styled.div`
  margin-bottom: 24px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 4px;
`;

export const AttachmentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AttachmentText = styled.span`
  font-size: 14px;
  color: #666;
`;

export const BulkDownloadButton = styled.button`
  background: none;
  border: none;
  color: #1a1a2e;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  padding: 0;
  transition: color 0.2s;

  &:hover {
    color: #2a2a3e;
  }
`;

export const ImagesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ImageItem = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

// 이미지 뷰어 모달 스타일
export const ImageViewerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95); /* 더 진한 배경으로 헤더 완전히 가리기 */
  z-index: 99999; /* 헤더(z-index: 1001)보다 훨씬 위에 표시 */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  overflow: hidden; /* 스크롤 방지 */
`;

export const ImageViewerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageViewerImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const ImageViewerCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  z-index: 10001; /* 오버레이보다 위에 표시 */

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.8);
  }
`;

export const ImageViewerDownloadButton = styled.button`
  position: absolute;
  top: 20px;
  right: 70px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  z-index: 10001; /* 오버레이보다 위에 표시 */

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.8);
  }
`;

export const ImageViewerNavButton = styled.button<{ $direction: "prev" | "next" }>`
  position: absolute;
  ${(props) => (props.$direction === "prev" ? "left: 20px;" : "right: 20px;")}
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  z-index: 10001; /* 오버레이보다 위에 표시 */

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.8);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const ImageViewerCounter = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  z-index: 10001; /* 오버레이보다 위에 표시 */
`;

export const NoImages = styled.div`
  text-align: center;
  padding: 48px;
  font-size: 18px;
  color: #666;
`;

export const NotFound = styled.div`
  text-align: center;
  padding: 48px;
  font-size: 18px;
  color: #666;
`;

