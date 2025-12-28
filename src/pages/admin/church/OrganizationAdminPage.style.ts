import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Section = styled.div`
  margin-bottom: 48px;
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px solid #e0e0e0;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

// 조직도 미리보기
export const OrgChartPreview = styled.div`
  margin-bottom: 24px;
  padding: 24px;
  background: #f8f9fa;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
`;

export const OrgLevel = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

export const OrgItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 20px;
  background: white;
  border-radius: 4px;
  border: 1px solid #ddd;
  min-width: 120px;
`;

export const OrgPosition = styled.span`
  font-size: 14px;
  color: #666;
  margin-bottom: 4px;
`;

export const OrgName = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

export const OrgConnector = styled.div`
  text-align: center;
  color: #999;
  font-size: 20px;
  margin: 8px 0;
`;

// 조직 구성원 목록
export const MemberListContainer = styled.div`
  margin-top: 24px;
  border-top: 2px solid #e0e0e0;
  padding-top: 24px;
`;

export const MemberListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const MemberListTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const MemberCount = styled.span`
  font-size: 14px;
  color: #666;
  background: #f0f0f0;
  padding: 4px 12px;
  border-radius: 12px;
`;

export const MemberListScrollable = styled.div`
  max-height: 500px;
  overflow-y: auto;
  padding-right: 8px;

  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;

    &:hover {
      background: #555;
    }
  }
`;

export const MemberList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MemberItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #f8f9fa;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  transition: all 0.2s;

  &:hover {
    background: #f0f0f0;
    border-color: #007bff;
  }
`;

export const MemberContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

export const MemberName = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`;

export const MemberInfo = styled.div`
  display: flex;
  gap: 16px;
  font-size: 13px;
  color: #666;

  span {
    padding: 2px 8px;
    background: white;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
  }
`;

// 부서 목록
export const DepartmentListContainer = styled.div`
  margin-top: 24px;
  border-top: 2px solid #e0e0e0;
  padding-top: 24px;
`;

export const DepartmentListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const DepartmentListTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const DepartmentCount = styled.span`
  font-size: 14px;
  color: #666;
  background: #f0f0f0;
  padding: 4px 12px;
  border-radius: 12px;
`;

export const DepartmentListScrollable = styled.div`
  max-height: 500px;
  overflow-y: auto;
  padding-right: 8px;

  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;

    &:hover {
      background: #555;
    }
  }
`;

export const DepartmentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const DepartmentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #f8f9fa;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  transition: all 0.2s;

  &:hover {
    background: #f0f0f0;
    border-color: #007bff;
  }
`;

export const DepartmentContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

export const DepartmentTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const DepartmentDesc = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
  line-height: 1.6;
`;

// 직분 목록
export const PositionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

export const PositionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
`;

export const PositionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

export const PositionName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const PositionDesc = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
  line-height: 1.6;
`;

// 공통 폼 스타일
export const AddForm = styled.div`
  margin-top: 24px;
  padding-top: 24px;
  border-top: 2px solid #e0e0e0;
`;

export const FormTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
`;

export const EditForm = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  width: 100%;
`;

export const EmptyMessage = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #999;
  font-size: 14px;
`;

export const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const Select = styled.select`
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background: white;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const TextArea = styled.textarea`
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
  min-width: 200px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button<{ $danger?: boolean }>`
  padding: 8px 16px;
  background: ${(props) => (props.$danger ? "#dc3545" : "#007bff")};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;

  &:hover {
    background: ${(props) => (props.$danger ? "#c82333" : "#0056b3")};
  }
`;

