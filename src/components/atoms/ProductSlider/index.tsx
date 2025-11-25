import * as S from "./ProductSlider.style";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import "swiper/swiper-bundle.css";

type Img = { src: string; alt?: string };

export default function ProductSlider({ images }: { images: Img[] }) {
  const swiperRef = useRef<SwiperType | null>(null);
  const prev = () => swiperRef.current?.slidePrev();
  const next = () => swiperRef.current?.slideNext();

  if (!images?.length) return null;

  return (
    <S.MobileSliderBox>
      <Swiper
        modules={[Pagination, Autoplay]}
        onSwiper={(s) => (swiperRef.current = s)}
        slidesPerView={1}
        centeredSlides
        loop
        autoHeight
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={350}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <S.MobileSlide>
              <img src={img.src} alt={img.alt ?? `상품 이미지 ${i + 1}`} />
            </S.MobileSlide>
          </SwiperSlide>
        ))}
      </Swiper>

      <S.CarouselControls>
        <S.ControlButton onClick={prev} aria-label="이전 배너">
          <HiOutlineChevronLeft style={{ width: 20, height: 20 }} />
        </S.ControlButton>
        <S.ControlButton onClick={next} aria-label="다음 배너">
          <HiOutlineChevronRight style={{ width: 20, height: 20 }} />
        </S.ControlButton>
      </S.CarouselControls>
    </S.MobileSliderBox>
  );
}