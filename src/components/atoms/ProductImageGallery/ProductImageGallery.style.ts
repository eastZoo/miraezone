import styled, { css } from "styled-components";

export const GalleryBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

export const ImgMain = styled.div`
  width: 600px;
  height: 600px;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  background: #f6f6f6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const ImgThumbnail = styled.ul`
margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
  li { list-style: none; }
`;

export const ThumbBtn = styled.button<{ $active: boolean }>`
  width: 90px;
  height: 90px;
  aspect-ratio: 1;
  padding: 0;
  overflow: hidden;
  border: 0;
  background: #fff;
  cursor: pointer;

  ${({ $active }) =>
    $active &&
    css`
      border: 3px solid #c94a45;
      `
    }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;
