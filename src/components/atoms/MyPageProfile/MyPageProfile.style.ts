import styled from "styled-components";

export const MyPageProfileWrap = styled.section`
  border-radius: 10px;
  overflow: hidden;
  background: #f7f7f7;
  margin-bottom: 24px;
`;

export const ProfileTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  position: relative;
`;

export const EditBtn = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  top: 20px;
  right: 20px;;
  height: 32px;
  padding: 0 12px;
  border: none;
  background: none;
  color: #999;
  font-size: 1.4rem;
  cursor: pointer;
  
  svg {
    width: 15px;
    height: 15px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  padding: 44px;
`;

export const ProfileLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-right: 130px;
  padding: 12px;
`;

export const UserName = styled.h2`
  margin: 0;
  font-size: 2.6rem;
  font-weight: 700;
  color: #111;

  span {
   font-size: 1.8rem;
   font-weight: normal;
  }
`;

export const PointRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 35px;

  .Label {
    font-size: 1.4rem;
    color: #666;
  }
  .Value {
    font-size: 1.8rem;
    font-weight: bold;
    color: #a44945;

    small {
      font-size: 1.2rem;
      margin-left: 2px;
    }
  }
`;

export const ProfileRight = styled.div`
  position: relative;
  
  &::after {
    content: "";
    display: block;
    height: 110px;
    width: 1px;
    background-color: #ddd;

    position: absolute;
    top: 50%;
    left: -12px;
    transform: translateY(-50%);
  }
`;

export const ProfileInfoList = styled.ul`

  padding-left: 45px;
  margin: 0;
  padding-top: 12px;
`;

export const ProfileInfoItem = styled.li`
  display: grid;
  grid-template-columns: 150px 1fr;
  align-items: center;
  margin-bottom: 8px;
  font-size: 1.4rem;
  color: #666;
`;

export const Label = styled.span`
  font-weight: 500;
  color: #666;
`;

export const Value = styled.span`
  color: #666;
`;


export const BottomBanner = styled.div`
  background: #a44945;
  color: #fff;
  text-align: center;
  padding: 12px 16px;
  font-size: 1.6rem;
  border-top: 1px solid #a44945;
  border-radius: 0 0 10px 10px;
`;