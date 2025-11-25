import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import * as S from "./MainCarousel.style";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

import banner1 from "@/styles/assets/images/banner_01.png";
import banner2 from "@/styles/assets/images/banner_02.png";
import banner3 from "@/styles/assets/images/banner_03.png";

// Swiper CSS import
import "swiper/swiper-bundle.css";

const MainCarousel: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const slides = [
    {
      id: 1,
      image: banner1,
    },
    {
      id: 2,
      image: banner2,
    },
    {
      id: 3,
      image: banner3,
    },
  ];

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setCurrentSlide(currentIndex);
    setIsFirstSlide(currentIndex === 0);
    setIsLastSlide(currentIndex === slides.length - 1);
  };

  useEffect(() => {
    // 마지막 슬라이드에서 첫 슬라이드로 자동 이동
    if (isLastSlide && swiperRef.current) {
      setTimeout(() => {
        swiperRef.current?.slideTo(0);
      }, 5000);
    }
  }, [isLastSlide]);

  const goToPrevious = () => {
    if (swiperRef.current) {
      if (isFirstSlide) {
        swiperRef.current.slideTo(slides.length - 1);
      } else {
        swiperRef.current.slidePrev();
      }
    }
  };

  const goToNext = () => {
    if (swiperRef.current) {
      if (isLastSlide) {
        swiperRef.current.slideTo(0);
      } else {
        swiperRef.current.slideNext();
      }
    }
  };

  return (
    <S.CarouselContainer>
      <S.SwiperWrapper>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={300}
          touchRatio={1}
          touchAngle={45}
          threshold={5}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
          breakpoints={{
            768: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 1.3,
              spaceBetween: 30,
            },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <S.SlideBackground>
                <img
                  src={slide.image}
                  alt={`배너 ${slide.id}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </S.SlideBackground>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.SwiperWrapper>

      <S.CarouselControls>
        <S.ControlButton onClick={goToPrevious}>
          <HiOutlineChevronLeft style={{ width: "20px", height: "auto", color: "#000000cc" }} />
        </S.ControlButton>
        <S.ControlButton onClick={goToNext}>
          <HiOutlineChevronRight style={{ width: "20px", height: "auto", color: "#000000cc" }} />
        </S.ControlButton>
      </S.CarouselControls>

      <S.SlideIndicator>
        {String(currentSlide + 1).padStart(2, "0")}/{String(slides.length).padStart(2, "0")}
      </S.SlideIndicator>
    </S.CarouselContainer>
  );
};

export default MainCarousel;
