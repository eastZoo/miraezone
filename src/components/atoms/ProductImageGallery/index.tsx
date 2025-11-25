import * as S from "./ProductImageGallery.style";
import { useState } from "react";

type Img = { src: string; alt?: string };

export default function ProductImageGallery({ 
  images,
  initialIndex = 0,
} : { images: Img[]; initialIndex?: number }) { 
  if (!images?.length)return null;
  
  const [current, setCurrent] = useState( Math.min(Math.max(initialIndex, 0), images.length - 1)
);
    
    return (
    <S.GalleryBox>
      <S.ImgMain>
        <img src={images[current].src} alt={images[current].alt ?? "상품 이미지"} />
      </S.ImgMain>
      
      <S.ImgThumbnail>
        {images.map((img, i) => (
          <li key={i}>
            <S.ThumbBtn type="button" $active={i === current} onClick={() => setCurrent(i)} >
              <img src={img.src} alt={img.alt ?? `썸네일 ${i + 1}`}/>
            </S.ThumbBtn>
          </li>
        ))}
      </S.ImgThumbnail>
    </S.GalleryBox>
    );
  };