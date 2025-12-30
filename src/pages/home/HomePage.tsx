import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import MainTemplate from "@/components/template/MainTemplate";
import * as S from "./HomePage.style";
import homeBg1 from "@/styles/assets/images/home_bg1.jpg";
import homeBg2 from "@/styles/assets/images/home_bg2.jpg";
import homeBg3 from "@/styles/assets/images/home_bg3.jpg";
import { HiPlay } from "react-icons/hi";
import {
  useChurchAlbumList,
  type ChurchAlbumImage,
} from "@/lib/hooks/useChurchAlbum";
import { useWorshipVideos, type WorshipVideo } from "@/lib/hooks/useWorship";
import { extractYouTubeThumbnail } from "@/lib/utils/youtubeUtils";
import { useNextGenDepartment } from "@/lib/hooks/useNextGenDepartment";
import dayjs from "dayjs";

/**
 * 홈/대시보드 페이지
 * - 인증된 사용자만 접근 가능 (ProtectedRoute로 보호됨)
 */
export default function HomePage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [homeBg1, homeBg2, homeBg3];

  // 교회 앨범 목록 조회 (최근 이미지 8개를 가져오기 위해 충분한 수량 조회)
  const { data: albumsData, isLoading: albumsLoading } = useChurchAlbumList(
    1,
    50
  );

  // 최근 설교 영상 조회 (가장 최근 1개)
  const { data: videosData } = useWorshipVideos(1, 1);
  const latestVideo: WorshipVideo | undefined = videosData?.data?.[0];

  // 썸네일 URL 처리 (유튜브 URL이면 썸네일 추출)
  const videoThumbnail = latestVideo
    ? latestVideo.thumbnailUrl ||
      (latestVideo.videoUrl
        ? extractYouTubeThumbnail(latestVideo.videoUrl) || undefined
        : undefined)
    : undefined;

  // 각 부서 정보 조회
  const { data: elementaryDept } = useNextGenDepartment("유초등부");
  const { data: youthDept } = useNextGenDepartment("중고등부");
  const { data: youngadultDept } = useNextGenDepartment("청년부");

  // 모든 앨범의 이미지를 수집하고 최신순으로 정렬하여 8개만 선택
  const recentImages = useMemo(() => {
    if (albumsLoading || !albumsData) {
      return [];
    }

    const albums = (albumsData as { data: any[]; total: number })?.data || [];
    if (albums.length === 0) {
      return [];
    }

    // 모든 앨범의 이미지를 하나의 배열로 합치기
    const allImages: (ChurchAlbumImage & { albumId: number })[] = [];
    albums.forEach((album) => {
      if (album.images && album.images.length > 0) {
        album.images.forEach((image) => {
          allImages.push({ ...image, albumId: album.id });
        });
      }
    });

    // createdAt 기준으로 최신순 정렬
    const sortedImages = allImages.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return dateB - dateA; // 최신순
    });

    // 최신 8개만 반환
    return sortedImages.slice(0, 8);
  }, [albumsData, albumsLoading]);

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
  }, [recentImages]); // recentImages가 변경될 때마다 재설정

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
              {videoThumbnail ? (
                <img
                  src={videoThumbnail}
                  alt={latestVideo?.title || "설교 영상 썸네일"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <S.BibleImage />
              )}
            </S.WeeklyMessageImage>
            <S.WeeklyMessageContent>
              <S.WeeklyMessageDate>
                {latestVideo
                  ? dayjs(latestVideo.date).format("YYYY-MM-DD")
                  : "준비중입니다..."}
              </S.WeeklyMessageDate>
              <S.WeeklyMessageTitle>
                {latestVideo ? `"${latestVideo.title}"` : '"준비중입니다..."'}
              </S.WeeklyMessageTitle>
              <S.WeeklyMessageInfo>
                {latestVideo
                  ? `${latestVideo.speaker} 담임목사`
                  : "준비중입니다..."}
              </S.WeeklyMessageInfo>
              <S.WeeklyMessageButton
                onClick={() =>
                  latestVideo
                    ? navigate(`/worship/videos/${latestVideo.id}`)
                    : navigate("/worship/videos")
                }
              >
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
                  path: "/church/introduce",
                },
                {
                  bgImage: "worship",
                  title: "예배시간",
                  subtitle: "Worship Time",
                  path: "/worship/info",
                },
                {
                  bgImage: "location",
                  title: "오시는길",
                  subtitle: "Location",
                  path: "/church/location",
                },
                {
                  bgImage: "news",
                  title: "교회소식",
                  subtitle: "News",
                  path: "/news",
                },
              ].map((item, index) => (
                <S.QuickNavCard
                  key={index}
                  ref={(el) => {
                    quickNavRefs.current[index] = el;
                  }}
                  onClick={() => navigate(item.path)}
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
                {
                  number: "01",
                  label: "유초등부",
                  path: "/nextgen/elementary",
                  heroImageUrl: elementaryDept?.heroImageUrl,
                },
                {
                  number: "02",
                  label: "중고등부",
                  path: "/nextgen/youth",
                  heroImageUrl: youthDept?.heroImageUrl,
                },
                {
                  number: "03",
                  label: "청년부",
                  path: "/nextgen/youngadult",
                  heroImageUrl: youngadultDept?.heroImageUrl,
                },
              ].map((item, index) => (
                <S.NextGenItem
                  key={index}
                  ref={(el) => {
                    nextGenRefs.current[index] = el;
                  }}
                  onClick={() => navigate(item.path)}
                >
                  <S.NextGenCircle $heroImageUrl={item.heroImageUrl}>
                    {item.heroImageUrl ? (
                      <S.NextGenCircleImage
                        src={item.heroImageUrl}
                        alt={item.label}
                      />
                    ) : null}
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
              {albumsLoading
                ? // 로딩 중일 때는 플레이스홀더 표시
                  Array.from({ length: 8 }).map((_, index) => (
                    <S.PhotoItem
                      key={`loading-${index}`}
                      ref={(el) => {
                        photoRefs.current[index] = el;
                      }}
                    >
                      <S.PhotoImage $index={index} />
                    </S.PhotoItem>
                  ))
                : recentImages.length > 0
                ? recentImages.map((image, index) => (
                    <S.PhotoItem
                      key={image.id}
                      ref={(el) => {
                        photoRefs.current[index] = el;
                      }}
                      onClick={() =>
                        navigate(`/resources/church-albums/${image.albumId}`)
                      }
                    >
                      <S.PhotoImage
                        $index={index}
                        src={image.imageUrl}
                        alt={image.fileName || "교회 앨범 이미지"}
                        loading="lazy"
                        onError={(e) => {
                          console.error("Image load error:", image.imageUrl);
                          // 이미지 로드 실패 시 배경색만 표시
                          e.currentTarget.style.opacity = "0.3";
                        }}
                      />
                    </S.PhotoItem>
                  ))
                : // 이미지가 없을 때는 플레이스홀더 표시
                  Array.from({ length: 8 }).map((_, index) => (
                    <S.PhotoItem
                      key={`placeholder-${index}`}
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
