import React, { useState } from "react";
import AdminMainTemplate from "@/components/template/AdminMainTemplate";
import LoadingSpinner from "@/components/atoms/LoadingSpinner";
import {
  useMemberList,
  useApproveMember,
  useToggleMemberActive,
} from "@/lib/hooks/useMember";
import * as S from "./MemberAdminPage.style";
import dayjs from "dayjs";

const MemberAdminPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState<string>("");
  const limit = 10;

  // 회원 목록 조회
  const { data, isLoading } = useMemberList(page, limit, search);
  const members = data?.data || [];
  const total = data?.total || 0;

  // Mutations
  const approveMember = useApproveMember();
  const toggleMemberActive = useToggleMemberActive();

  const totalPages = Math.ceil(total / limit);

  // 검색 핸들러
  const handleSearch = () => {
    setPage(1);
  };

  // 회원 승인/비승인
  const handleApprove = async (id: number, isApproved: boolean) => {
    try {
      await approveMember.mutateAsync({ id, isApproved });
      alert(isApproved ? "회원이 승인되었습니다." : "회원 승인이 취소되었습니다.");
    } catch (error) {
      alert("처리 중 오류가 발생했습니다.");
    }
  };

  // 회원 활성화/비활성화
  const handleToggleActive = async (id: number, isActive: boolean) => {
    try {
      await toggleMemberActive.mutateAsync({ id, isActive });
      alert(isActive ? "회원이 활성화되었습니다." : "회원이 비활성화되었습니다.");
    } catch (error: any) {
      alert(error?.message || "처리 중 오류가 발생했습니다.");
    }
  };

  if (isLoading) {
    return (
      <AdminMainTemplate
        containerType="standard"
        pageTitle="회원 관리"
        breadcrumb={["관리자", "회원 관리"]}
      >
        <S.Container>
          <LoadingSpinner size="medium" />
        </S.Container>
      </AdminMainTemplate>
    );
  }

  return (
    <AdminMainTemplate
      containerType="standard"
      pageTitle="회원 관리"
      breadcrumb={["관리자", "회원 관리"]}
    >
      <S.Container>
        <S.Section>
          {/* 검색 바 */}
          <S.Toolbar>
            <S.SearchArea>
              <S.SearchInput
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                placeholder="이메일 또는 이름으로 검색"
              />
              <S.SearchButton onClick={handleSearch}>검색</S.SearchButton>
            </S.SearchArea>
          </S.Toolbar>

          {/* 회원 목록 */}
          <S.MemberList>
            {members.length === 0 ? (
              <S.EmptyMessage>등록된 회원이 없습니다.</S.EmptyMessage>
            ) : (
              members.map((member) => (
                <S.MemberItem key={member.id}>
                  <S.MemberInfo>
                    <S.MemberName>
                      {member.name}
                      {member.isMaster && <S.MasterBadge>마스터</S.MasterBadge>}
                      {member.isApproved ? (
                        <S.ApprovedBadge>승인됨</S.ApprovedBadge>
                      ) : (
                        <S.PendingBadge>대기중</S.PendingBadge>
                      )}
                      {!member.isActive && (
                        <S.InactiveBadge>비활성</S.InactiveBadge>
                      )}
                    </S.MemberName>
                    <S.MemberEmail>{member.email}</S.MemberEmail>
                    {member.phone && <S.MemberPhone>{member.phone}</S.MemberPhone>}
                    <S.MemberMeta>
                      <S.MemberDate>
                        가입일: {dayjs(member.createdAt).format("YYYY.MM.DD")}
                      </S.MemberDate>
                      {member.lastLoginAt && (
                        <S.MemberDate>
                          마지막 로그인:{" "}
                          {dayjs(member.lastLoginAt).format("YYYY.MM.DD HH:mm")}
                        </S.MemberDate>
                      )}
                    </S.MemberMeta>
                  </S.MemberInfo>
                  <S.MemberActions>
                    {!member.isMaster && (
                      <>
                        <S.ApproveButton
                          onClick={() =>
                            handleApprove(member.id, !member.isApproved)
                          }
                          $isApproved={member.isApproved}
                        >
                          {member.isApproved ? "승인 취소" : "승인"}
                        </S.ApproveButton>
                        <S.ToggleButton
                          onClick={() =>
                            handleToggleActive(member.id, !member.isActive)
                          }
                          $isActive={member.isActive}
                        >
                          {member.isActive ? "비활성화" : "활성화"}
                        </S.ToggleButton>
                      </>
                    )}
                  </S.MemberActions>
                </S.MemberItem>
              ))
            )}
          </S.MemberList>

          {/* 페이지네이션 */}
          {totalPages > 1 && (
            <S.Pagination>
              <S.PaginationButton
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
              >
                이전
              </S.PaginationButton>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <S.PaginationNumber
                  key={num}
                  $active={num === page}
                  onClick={() => setPage(num)}
                >
                  {num}
                </S.PaginationNumber>
              ))}
              <S.PaginationButton
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
              >
                다음
              </S.PaginationButton>
            </S.Pagination>
          )}
        </S.Section>
      </S.Container>
    </AdminMainTemplate>
  );
};

export default MemberAdminPage;

