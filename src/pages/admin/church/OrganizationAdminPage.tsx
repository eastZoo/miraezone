import React, { useState } from "react";
import AdminMainTemplate from "@/components/template/AdminMainTemplate";
import {
  useOrganizationMembers,
  useDepartments,
  useCreateOrganizationMember,
  useUpdateOrganizationMember,
  useDeleteOrganizationMember,
  useCreateDepartment,
  useUpdateDepartment,
  useDeleteDepartment,
  type OrganizationMember,
  type Department,
} from "@/lib/hooks/useOrganization";
import * as S from "./OrganizationAdminPage.style";

const OrganizationAdminPage: React.FC = () => {
  // 데이터 조회
  const { data: members = [] } = useOrganizationMembers();
  const { data: departments = [] } = useDepartments();

  // Mutations
  const createMember = useCreateOrganizationMember();
  const updateMember = useUpdateOrganizationMember();
  const deleteMember = useDeleteOrganizationMember();
  const createDepartment = useCreateDepartment();
  const updateDepartment = useUpdateDepartment();
  const deleteDepartment = useDeleteDepartment();

  // 조직 구성원 관리 상태
  const [editingMember, setEditingMember] = useState<number | null>(null);
  const [editingMemberData, setEditingMemberData] = useState<Partial<OrganizationMember> | null>(null);
  const [newMember, setNewMember] = useState({
    position: "",
    name: "",
    parentId: undefined as number | undefined,
  });

  // 부서 관리 상태
  const [editingDept, setEditingDept] = useState<number | null>(null);
  const [editingDeptData, setEditingDeptData] = useState<Partial<Department> | null>(null);
  const [newDepartment, setNewDepartment] = useState({ name: "", description: "", order: 0 });

  // 조직 구성원 관련 핸들러
  const handleAddMember = async () => {
    if (!newMember.position || !newMember.name) {
      alert("직분과 이름을 입력해주세요.");
      return;
    }
    try {
      await createMember.mutateAsync(newMember);
      setNewMember({ position: "", name: "", parentId: undefined });
      alert("조직 구성원이 추가되었습니다.");
    } catch (error) {
      alert("추가 중 오류가 발생했습니다.");
    }
  };

  const handleStartEditMember = (item: OrganizationMember) => {
    setEditingMember(item.id);
    setEditingMemberData({
      position: item.position,
      name: item.name,
      parentId: item.parentId,
    });
  };

  const handleUpdateMember = async (id: number) => {
    if (!editingMemberData) return;
    try {
      await updateMember.mutateAsync({ id, data: editingMemberData });
      setEditingMember(null);
      setEditingMemberData(null);
      alert("조직 구성원이 수정되었습니다.");
    } catch (error) {
      alert("수정 중 오류가 발생했습니다.");
    }
  };

  const handleDeleteMember = async (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    try {
      await deleteMember.mutateAsync(id);
      alert("조직 구성원이 삭제되었습니다.");
    } catch (error) {
      alert("삭제 중 오류가 발생했습니다.");
    }
  };

  // 부서 관련 핸들러
  const handleAddDepartment = async () => {
    if (!newDepartment.name || !newDepartment.description) {
      alert("부서명과 설명을 입력해주세요.");
      return;
    }
    try {
      await createDepartment.mutateAsync(newDepartment);
      setNewDepartment({ name: "", description: "", order: 0 });
      alert("부서가 추가되었습니다.");
    } catch (error) {
      alert("추가 중 오류가 발생했습니다.");
    }
  };

  const handleStartEditDepartment = (item: Department) => {
    setEditingDept(item.id);
    setEditingDeptData({
      name: item.name,
      description: item.description,
      order: item.order,
    });
  };

  const handleUpdateDepartment = async (id: number) => {
    if (!editingDeptData) return;
    try {
      await updateDepartment.mutateAsync({ id, data: editingDeptData });
      setEditingDept(null);
      setEditingDeptData(null);
      alert("부서가 수정되었습니다.");
    } catch (error) {
      alert("수정 중 오류가 발생했습니다.");
    }
  };

  const handleDeleteDepartment = async (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    try {
      await deleteDepartment.mutateAsync(id);
      alert("부서가 삭제되었습니다.");
    } catch (error) {
      alert("삭제 중 오류가 발생했습니다.");
    }
  };

  // 조직도 계층 구조 생성
  const buildOrgChart = (members: OrganizationMember[]): OrganizationMember[][] => {
    const levels: OrganizationMember[][] = [];
    const rootMembers = members.filter((m) => !m.parentId);
    
    const addLevel = (levelMembers: OrganizationMember[], level: number) => {
      if (levelMembers.length === 0) return;
      if (!levels[level]) levels[level] = [];
      levels[level].push(...levelMembers);
      
      const nextLevelMembers: OrganizationMember[] = [];
      levelMembers.forEach((member) => {
        const children = members.filter((m) => m.parentId === member.id);
        nextLevelMembers.push(...children);
      });
      
      if (nextLevelMembers.length > 0) {
        addLevel(nextLevelMembers, level + 1);
      }
    };
    
    addLevel(rootMembers, 0);
    return levels;
  };

  const orgLevels = buildOrgChart(members);

  return (
    <AdminMainTemplate
      containerType="standard"
      pageTitle="교회 조직 관리"
      breadcrumb={["관리자", "교회 정보 관리", "교회 조직 관리"]}
    >
      <S.Container>
        {/* 교회 조직도 섹션 */}
        <S.Section>
          <S.SectionHeader>
            <S.SectionTitle>교회 조직도</S.SectionTitle>
          </S.SectionHeader>

          {/* 조직도 표시 */}
          <S.OrgChartPreview>
            {orgLevels.length > 0 ? (
              orgLevels.map((level, levelIndex) => (
                <React.Fragment key={levelIndex}>
                  <S.OrgLevel>
                    {level.map((member) => (
                      <S.OrgItem key={member.id}>
                        <S.OrgPosition>{member.position}</S.OrgPosition>
                        <S.OrgName>{member.name}</S.OrgName>
                      </S.OrgItem>
                    ))}
                  </S.OrgLevel>
                  {levelIndex < orgLevels.length - 1 && <S.OrgConnector>│</S.OrgConnector>}
                </React.Fragment>
              ))
            ) : (
              <S.EmptyMessage>조직 구성원이 없습니다. 아래에서 추가해주세요.</S.EmptyMessage>
            )}
          </S.OrgChartPreview>

          {/* 조직 구성원 추가 폼 */}
          <S.AddForm>
            <S.FormTitle>조직 구성원 추가</S.FormTitle>
            <S.FormRow>
              <S.Input
                type="text"
                value={newMember.position}
                onChange={(e) => setNewMember({ ...newMember, position: e.target.value })}
                placeholder="직분 (예: 담임목사, 부목사, 전도사 등)"
                style={{ flex: 1, minWidth: "200px" }}
              />
              <S.Input
                type="text"
                value={newMember.name}
                onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                placeholder="이름"
                style={{ flex: 1, minWidth: "150px" }}
              />
              <S.Select
                value={newMember.parentId || ""}
                onChange={(e) =>
                  setNewMember({
                    ...newMember,
                    parentId: e.target.value ? parseInt(e.target.value) : undefined,
                  })
                }
                style={{ flex: 1, minWidth: "200px" }}
              >
                <option value="">상위 구성원 선택 (선택사항)</option>
                {members.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.position} - {m.name}
                  </option>
                ))}
              </S.Select>
              <S.Button onClick={handleAddMember}>추가</S.Button>
            </S.FormRow>
          </S.AddForm>

          {/* 조직 구성원 목록 (스크롤 가능) */}
          <S.MemberListContainer>
            <S.MemberListHeader>
              <S.MemberListTitle>조직 구성원 목록</S.MemberListTitle>
              <S.MemberCount>{members.length}명</S.MemberCount>
            </S.MemberListHeader>
            <S.MemberListScrollable>
              {members.length > 0 ? (
                members.map((member) => (
                  <S.MemberItem key={member.id}>
                    {editingMember === member.id && editingMemberData ? (
                      <S.EditForm>
                        <S.Input
                          type="text"
                          value={editingMemberData.position || ""}
                          onChange={(e) =>
                            setEditingMemberData({ ...editingMemberData, position: e.target.value })
                          }
                          placeholder="직분"
                          style={{ flex: 1, minWidth: "150px" }}
                        />
                        <S.Input
                          type="text"
                          value={editingMemberData.name || ""}
                          onChange={(e) =>
                            setEditingMemberData({ ...editingMemberData, name: e.target.value })
                          }
                          placeholder="이름"
                          style={{ flex: 1, minWidth: "150px" }}
                        />
                        <S.Select
                          value={editingMemberData.parentId || ""}
                          onChange={(e) =>
                            setEditingMemberData({
                              ...editingMemberData,
                              parentId: e.target.value ? parseInt(e.target.value) : undefined,
                            })
                          }
                          style={{ flex: 1, minWidth: "200px" }}
                        >
                          <option value="">상위 구성원 선택</option>
                          {members
                            .filter((m) => m.id !== member.id)
                            .map((m) => (
                              <option key={m.id} value={m.id}>
                                {m.position} - {m.name}
                              </option>
                            ))}
                        </S.Select>
                        <S.ButtonGroup>
                          <S.Button onClick={() => handleUpdateMember(member.id)}>저장</S.Button>
                          <S.Button onClick={() => { setEditingMember(null); setEditingMemberData(null); }}>
                            취소
                          </S.Button>
                        </S.ButtonGroup>
                      </S.EditForm>
                    ) : (
                      <>
                        <S.MemberContent>
                          <S.MemberName>{member.position} - {member.name}</S.MemberName>
                          {member.parent && (
                            <S.MemberInfo>
                              <span>상위: {member.parent.position} - {member.parent.name}</span>
                            </S.MemberInfo>
                          )}
                        </S.MemberContent>
                        <S.ButtonGroup>
                          <S.Button onClick={() => handleStartEditMember(member)}>수정</S.Button>
                          <S.Button onClick={() => handleDeleteMember(member.id)} $danger>
                            삭제
                          </S.Button>
                        </S.ButtonGroup>
                      </>
                    )}
                  </S.MemberItem>
                ))
              ) : (
                <S.EmptyMessage>등록된 조직 구성원이 없습니다.</S.EmptyMessage>
              )}
            </S.MemberListScrollable>
          </S.MemberListContainer>
        </S.Section>

        {/* 부서별 역할 섹션 */}
        <S.Section>
          <S.SectionHeader>
            <S.SectionTitle>부서별 역할</S.SectionTitle>
          </S.SectionHeader>

          {/* 부서 추가 폼 */}
          <S.AddForm>
            <S.FormTitle>부서 추가</S.FormTitle>
            <S.FormRow>
              <S.Input
                type="text"
                value={newDepartment.name}
                onChange={(e) =>
                  setNewDepartment({ ...newDepartment, name: e.target.value })
                }
                placeholder="부서명"
                style={{ flex: 1, minWidth: "200px" }}
              />
              <S.TextArea
                value={newDepartment.description}
                onChange={(e) =>
                  setNewDepartment({ ...newDepartment, description: e.target.value })
                }
                placeholder="역할 설명"
                rows={2}
                style={{ flex: 2, minWidth: "300px" }}
              />
              <S.Input
                type="number"
                value={newDepartment.order}
                onChange={(e) =>
                  setNewDepartment({
                    ...newDepartment,
                    order: parseInt(e.target.value) || 0,
                  })
                }
                placeholder="순서"
                style={{ width: "100px" }}
              />
              <S.Button onClick={handleAddDepartment}>추가</S.Button>
            </S.FormRow>
          </S.AddForm>

          {/* 부서 목록 (스크롤 가능) */}
          <S.DepartmentListContainer>
            <S.DepartmentListHeader>
              <S.DepartmentListTitle>부서 목록</S.DepartmentListTitle>
              <S.DepartmentCount>{departments.length}개</S.DepartmentCount>
            </S.DepartmentListHeader>
            <S.DepartmentListScrollable>
              {departments.length > 0 ? (
                departments.map((department) => (
                  <S.DepartmentItem key={department.id}>
                    {editingDept === department.id && editingDeptData ? (
                      <S.EditForm>
                        <S.Input
                          type="text"
                          value={editingDeptData.name || ""}
                          onChange={(e) =>
                            setEditingDeptData({ ...editingDeptData, name: e.target.value })
                          }
                          placeholder="부서명"
                          style={{ flex: 1, minWidth: "150px" }}
                        />
                        <S.TextArea
                          value={editingDeptData.description || ""}
                          onChange={(e) =>
                            setEditingDeptData({
                              ...editingDeptData,
                              description: e.target.value,
                            })
                          }
                          placeholder="역할 설명"
                          rows={2}
                          style={{ flex: 2, minWidth: "300px" }}
                        />
                        <S.Input
                          type="number"
                          value={editingDeptData.order || 0}
                          onChange={(e) =>
                            setEditingDeptData({
                              ...editingDeptData,
                              order: parseInt(e.target.value) || 0,
                            })
                          }
                          placeholder="순서"
                          style={{ width: "100px" }}
                        />
                        <S.ButtonGroup>
                          <S.Button onClick={() => handleUpdateDepartment(department.id)}>저장</S.Button>
                          <S.Button onClick={() => { setEditingDept(null); setEditingDeptData(null); }}>
                            취소
                          </S.Button>
                        </S.ButtonGroup>
                      </S.EditForm>
                    ) : (
                      <>
                        <S.DepartmentContent>
                          <S.DepartmentTitle>{department.name}</S.DepartmentTitle>
                          <S.DepartmentDesc>{department.description}</S.DepartmentDesc>
                        </S.DepartmentContent>
                        <S.ButtonGroup>
                          <S.Button onClick={() => handleStartEditDepartment(department)}>수정</S.Button>
                          <S.Button onClick={() => handleDeleteDepartment(department.id)} $danger>
                            삭제
                          </S.Button>
                        </S.ButtonGroup>
                      </>
                    )}
                  </S.DepartmentItem>
                ))
              ) : (
                <S.EmptyMessage>등록된 부서가 없습니다.</S.EmptyMessage>
              )}
            </S.DepartmentListScrollable>
          </S.DepartmentListContainer>
        </S.Section>
      </S.Container>
    </AdminMainTemplate>
  );
};

export default OrganizationAdminPage;
