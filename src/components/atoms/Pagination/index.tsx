import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import * as S from "./Pagination.style";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pageSize?: number;
  totalItems?: number;
  onPageSizeChange?: (size: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    const startPage = Math.max(
      1,
      currentPage - Math.floor(maxVisiblePages / 2)
    );
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <S.PaginationWrapper>
      {/* <S.PageSizeSelector>
        <select value={pageSize} onChange={(e) => onPageSizeChange(Number(e.target.value))}>
          <option value={10}>10개씩</option>
          <option value={20}>20개씩</option>
          <option value={50}>50개씩</option>
        </select>
      </S.PageSizeSelector>

      <S.PaginationInfo>
        총 {totalItems}개 중 {((currentPage - 1) * pageSize) + 1}-{Math.min(currentPage * pageSize, totalItems)}개 표시
      </S.PaginationInfo> */}

      <S.PaginationControls>
        {/* <S.PageButton onClick={() => onPageChange(1)} disabled={currentPage === 1}>
          <HiChevronDoubleLeft />
        </S.PageButton> */}
        <S.PageButton
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <HiChevronLeft />
        </S.PageButton>

        {generatePageNumbers().map((page) => (
          <S.PageButton
            key={page}
            onClick={() => onPageChange(page)}
            active={page === currentPage}
          >
            {page}
          </S.PageButton>
        ))}

        <S.PageButton
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <HiChevronRight />
        </S.PageButton>
        {/* <S.PageButton onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}>
          <HiChevronDoubleRight />
        </S.PageButton> */}
      </S.PaginationControls>
    </S.PaginationWrapper>
  );
};

export default Pagination;
