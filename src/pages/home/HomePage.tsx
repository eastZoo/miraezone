import { useState, useEffect, useRef } from "react";
import MainTemplate from "@/components/template/MainTemplate";
import * as S from "./HomePage.style";
import homeBg1 from "@/styles/assets/images/home_bg1.jpg";
import homeBg2 from "@/styles/assets/images/home_bg2.jpg";
import homeBg3 from "@/styles/assets/images/home_bg3.jpg";
import { HiPlay } from "react-icons/hi";

/**
 * 홈/대시보드 페이지
 * - 인증된 사용자만 접근 가능 (ProtectedRoute로 보호됨)
 */
export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [homeBg1, homeBg2, homeBg3];

  // 섹션 refs
  const weeklyMessageRef = useRef<HTMLDivElement>(null);
  const quickNavRefs = useRef<(HTMLDivElement | null)[]>([]);
  const nextGenSectionHeaderRef = useRef<HTMLDivElement>(null);
  const nextGenDescriptionRef = useRef<HTMLParagraphElement>(null);
  const nextGenRefs = useRef<(HTMLDivElement | null)[]>([]);
  const photoSectionHeaderRef = useRef<HTMLDivElement>(null);
  const photoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 10초마다 변경

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          // 화면에서 벗어나면 visible 클래스 제거하여 다시 애니메이션 가능하도록
          entry.target.classList.remove("visible");
        }
      });
    }, observerOptions);

    // 모든 섹션과 요소 관찰
    const allRefs = [
      weeklyMessageRef.current,
      ...quickNavRefs.current,
      nextGenSectionHeaderRef.current,
      nextGenDescriptionRef.current,
      ...nextGenRefs.current,
      photoSectionHeaderRef.current,
      ...photoRefs.current,
    ].filter(Boolean);

    allRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      allRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      <MainTemplate transparentHeader>
        <S.BackgroundCanvas>
          <S.BackgroundSlide>
            {images.map((image, index) => (
              <S.BackgroundImage
                key={`bg-${index}`}
                src={image}
                alt={`배경 이미지 ${index + 1}`}
                $isActive={index === currentIndex}
              />
            ))}
          </S.BackgroundSlide>
        </S.BackgroundCanvas>

        <S.HomeContainer>
          <S.OverlayText $opacity={1}>
            <S.MainTitle>
              {'"오늘 보다 내일이 더 좋은 교회"'
                .split("")
                .map((char, index) => (
                  <S.LetterSpan
                    key={index}
                    $delay={index * 0.05}
                    $index={index}
                  >
                    {char === " " ? "\u00A0" : char}
                  </S.LetterSpan>
                ))}
            </S.MainTitle>
            <S.SubTitle>
              {"미래존교회".split("").map((char, index) => (
                <S.LetterSpan key={index} $delay={index * 0.05 + 0.5}>
                  {char}
                </S.LetterSpan>
              ))}
            </S.SubTitle>
          </S.OverlayText>
        </S.HomeContainer>

        <S.SectionSurface $hasBackground>
          <S.WeeklyMessageSection ref={weeklyMessageRef}>
            <S.WeeklyMessageImage>
              <S.BibleImage />
            </S.WeeklyMessageImage>
            <S.WeeklyMessageContent>
              <S.WeeklyMessageDate>2025-11-23</S.WeeklyMessageDate>
              <S.WeeklyMessageTitle>
                "그리스도인들은 지금 어디에 있습니까?"
              </S.WeeklyMessageTitle>
              <S.WeeklyMessageInfo>
                야고보서 4:13 - 5:6 나영호 담임목사
              </S.WeeklyMessageInfo>
              <S.WeeklyMessageButton>
                <HiPlay />
                금주의 말씀 더보기
              </S.WeeklyMessageButton>
            </S.WeeklyMessageContent>
          </S.WeeklyMessageSection>
        </S.SectionSurface>

        <S.SectionSurface>
          <S.ContentSection>
            <S.QuickNavSection>
              {[
                {
                  bgImage: "church",
                  title: "교회소개",
                  subtitle: "Church Introduce",
                },
                {
                  bgImage: "worship",
                  title: "예배시간",
                  subtitle: "Worship Time",
                },
                {
                  bgImage: "location",
                  title: "오시는길",
                  subtitle: "Location",
                },
                { bgImage: "news", title: "교회소식", subtitle: "News" },
              ].map((item, index) => (
                <S.QuickNavCard
                  key={index}
                  ref={(el) => {
                    quickNavRefs.current[index] = el;
                  }}
                >
                  <S.QuickNavImage $bgImage={item.bgImage}>
                    <S.QuickNavOverlay>
                      <S.QuickNavTitle>{item.title}</S.QuickNavTitle>
                      <S.QuickNavSubtitle>{item.subtitle}</S.QuickNavSubtitle>
                    </S.QuickNavOverlay>
                  </S.QuickNavImage>
                </S.QuickNavCard>
              ))}
            </S.QuickNavSection>
          </S.ContentSection>
        </S.SectionSurface>

        <S.SectionSurface>
          <S.NextGenerationSection>
            <S.SectionHeader ref={nextGenSectionHeaderRef}>
              <S.SectionSubtitle>CHURCH SCHOOL</S.SectionSubtitle>
              <S.SectionTitle>다음세대</S.SectionTitle>
            </S.SectionHeader>
            <S.NextGenerationDescription ref={nextGenDescriptionRef}>
              아이들과 청소년들에게 성경을 가르치고, 하나님과 이웃을 사랑하는
              그리스도인으로 양육하며, 하나님의 형상으로 사람을 이해하고
              사랑하며 도우며, 그리스도를 전하는 일을 합니다.
            </S.NextGenerationDescription>
            <S.NextGenerationGrid>
              {[
                { number: "01", label: "유초등부" },
                { number: "04", label: "중고등부" },
                { number: "05", label: "청년부" },
              ].map((item, index) => (
                <S.NextGenItem
                  key={index}
                  ref={(el) => {
                    nextGenRefs.current[index] = el;
                  }}
                >
                  <S.NextGenCircle>
                    <S.NextGenNumber>{item.number}</S.NextGenNumber>
                  </S.NextGenCircle>
                  <S.NextGenLabel>{item.label}</S.NextGenLabel>
                </S.NextGenItem>
              ))}
            </S.NextGenerationGrid>
          </S.NextGenerationSection>
        </S.SectionSurface>

        <S.SectionSurface>
          <S.PhotoGallerySection>
            <S.SectionHeader ref={photoSectionHeaderRef}>
              <S.SectionSubtitle>PHOTO GALLERY</S.SectionSubtitle>
              <S.SectionTitle>교회앨범</S.SectionTitle>
            </S.SectionHeader>
            <S.PhotoGrid>
              {Array.from({ length: 8 }).map((_, index) => (
                <S.PhotoItem
                  key={index}
                  ref={(el) => {
                    photoRefs.current[index] = el;
                  }}
                >
                  <S.PhotoImage $index={index} />
                </S.PhotoItem>
              ))}
            </S.PhotoGrid>
          </S.PhotoGallerySection>
        </S.SectionSurface>
      </MainTemplate>
    </>
  );
}
