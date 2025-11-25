import styled from "styled-components";

export const MyPageMenu = styled.div`
`;

export const MyPageMenuTitle = styled.div`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: #a44945;
    height: 120px;
    width: 180px;
    font-size: 2.2rem;
    font-weight: 600;
    color: #fff;
  }

  span {
    font-size: 1.6rem;
  }
`;

export const MyPageMenuBox = styled.section`
  padding: 20px 25px;
  background: #fff;
  border-bottom: 1px solid #ddd;
  
  &:last-child {
    border-bottom: 1px solid #999;
  }
  `;

export const MyPageMenuListTitle = styled.h3`
  padding-bottom: 18px;
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
  color: #111;
`;

export const MyPageMenuList = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;

  li a {
    display: block;
    padding-bottom: 18px;
    color: #111;

    &:hover {
      color: #a44945;
    }
    &.active {
      color: #a44945;
      font-weight: 600;
    }

  li a:last-child {
    padding-bottom: 0;
  }
  }
`;

export const MyPageCsBox = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
`;

export const MyPageCsItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

export const MyPageCsTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const MyPageCsPhone = styled.p`
  font-size: 2.2rem;
  font-weight: 700;
  color: #333;
  margin: 12px 0;
`;

export const MyPageCsInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;

  li {
      font-size: 1.4rem;
      color: #999;
    }
`;