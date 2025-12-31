import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRegister, useCurrentMember } from "@/lib/hooks/useAuth";
import * as S from "./RegisterPage.style";

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const register = useRegister();
  const { isAuthenticated } = useCurrentMember();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
  });
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState(false);

  // 이미 로그인된 경우 리다이렉트
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin/church");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // 비밀번호 확인
    if (formData.password !== formData.confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 비밀번호 길이 확인
    if (formData.password.length < 6) {
      setError("비밀번호는 최소 6자 이상이어야 합니다.");
      return;
    }

    try {
      await register.mutateAsync({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        phone: formData.phone || undefined,
      });
      setSuccess(true);
      setTimeout(() => {
        navigate("/admin");
      }, 2000);
    } catch (err: any) {
      setError(err?.response?.data?.message || "회원가입에 실패했습니다.");
    }
  };

  if (success) {
    return (
      <S.Container>
        <S.LoginCard>
          <S.SuccessMessage>
            회원가입이 완료되었습니다. 마스터 관리자의 승인을 기다려주세요.
            로그인 페이지로 이동합니다...
          </S.SuccessMessage>
        </S.LoginCard>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.LoginCard>
        <S.Title>관리자 회원가입</S.Title>
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
            <S.Label>이름</S.Label>
            <S.Input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              placeholder="이름을 입력하세요"
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label>전화번호 (선택)</S.Label>
            <S.Input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="전화번호를 입력하세요"
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
              placeholder="비밀번호를 입력하세요 (최소 6자)"
              minLength={6}
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label>비밀번호 확인</S.Label>
            <S.Input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              required
              placeholder="비밀번호를 다시 입력하세요"
              minLength={6}
            />
          </S.FormGroup>
          <S.SubmitButton type="submit" disabled={register.isPending}>
            {register.isPending ? "회원가입 중..." : "회원가입"}
          </S.SubmitButton>
        </S.Form>
        <S.RegisterLink>
          이미 계정이 있으신가요?{" "}
          <S.Link onClick={() => navigate("/admin")}>로그인</S.Link>
        </S.RegisterLink>
      </S.LoginCard>
    </S.Container>
  );
};

export default RegisterPage;

