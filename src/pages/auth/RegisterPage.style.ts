import styled from "styled-components";
import { device } from "@/styles/GlobalStyle";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%);
  padding: 20px;

  @media ${device.mobile} {
    padding: 16px;
  }
`;

export const LoginCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);

  @media ${device.mobile} {
    padding: 24px;
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin-bottom: 32px;

  @media ${device.mobile} {
    font-size: 2rem;
    margin-bottom: 24px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${device.mobile} {
    gap: 16px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
  color: #333;
`;

export const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1.4rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media ${device.mobile} {
    padding: 10px 14px;
    font-size: 1.6rem; /* 모바일에서 자동 확대 방지 */
  }
`;

export const SubmitButton = styled.button`
  padding: 14px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 8px;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media ${device.mobile} {
    padding: 12px;
    font-size: 1.6rem;
  }
`;

export const ErrorMessage = styled.div`
  padding: 12px;
  background: #fee;
  color: #c33;
  border-radius: 8px;
  font-size: 1.4rem;
  text-align: center;
`;

export const SuccessMessage = styled.div`
  padding: 20px;
  background: #efe;
  color: #3c3;
  border-radius: 8px;
  font-size: 1.4rem;
  text-align: center;
  line-height: 1.6;
`;

export const RegisterLink = styled.div`
  text-align: center;
  margin-top: 24px;
  font-size: 1.4rem;
  color: #666;

  @media ${device.mobile} {
    margin-top: 20px;
    font-size: 1.3rem;
  }
`;

export const Link = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

