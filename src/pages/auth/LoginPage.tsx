import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin, useCurrentMember } from "@/lib/hooks/useAuth";
import { readAccessToken } from "@/lib/functions/authFunctions";
import * as S from "./LoginPage.style";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const login = useLogin();
  const { isAuthenticated } = useCurrentMember();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  // 이미 로그인된 경우 리다이렉트
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin/church");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login.mutateAsync(formData);
      navigate("/admin/church");
    } catch (err: any) {
      setError(err?.response?.data?.message || "로그인에 실패했습니다.");
    }
  };

  return (
    <S.Container>
      <S.LoginCard>
        <S.Title>관리자 로그인</S.Title>
        <S.Form onSubmit={handleSubmit}>
          {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
          <S.FormGroup>
            <S.Label>이메일</S.Label>
            <S.Input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              placeholder="이메일을 입력하세요"
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label>비밀번호</S.Label>
            <S.Input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
              placeholder="비밀번호를 입력하세요"
            />
          </S.FormGroup>
          <S.SubmitButton type="submit" disabled={login.isPending}>
            {login.isPending ? "로그인 중..." : "로그인"}
          </S.SubmitButton>
        </S.Form>
        <S.RegisterLink>
          계정이 없으신가요?{" "}
          <S.Link onClick={() => navigate("/admin/register")}>
            회원가입
          </S.Link>
        </S.RegisterLink>
      </S.LoginCard>
    </S.Container>
  );
};

export default LoginPage;
