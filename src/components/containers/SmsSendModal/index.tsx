import React, { useState, useEffect } from "react";
import Modal from "@/components/atoms/Modal";
import Button from "@/components/atoms/Button";
import * as S from "./SmsSendModal.style";

interface SmsSendModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipientPhone?: string;
  recipientName?: string;
}

const SmsSendModal: React.FC<SmsSendModalProps> = ({
  isOpen,
  onClose,
  recipientPhone = "",
  recipientName = "",
}) => {
  const [message, setMessage] = useState("");
  const [byteCount, setByteCount] = useState(0);
  const senderPhone = "010-7232-0909"; // 발신번호 (고정값)

  // 한글 1자 = 2바이트, 영문/숫자 1자 = 1바이트 계산
  const calculateByteLength = (text: string): number => {
    let byteLength = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text.charCodeAt(i);
      // 한글, 한자 등 2바이트 문자
      if (char > 127) {
        byteLength += 2;
      } else {
        byteLength += 1;
      }
    }
    return byteLength;
  };

  useEffect(() => {
    const bytes = calculateByteLength(message);
    setByteCount(bytes);
  }, [message]);

  const handleSubmit = () => {
    console.log("문자 전송:", {
      recipientPhone,
      recipientName,
      senderPhone,
      message,
      byteCount,
    });
    // TODO: 실제 SMS 전송 API 호출
    onClose();
    // 폼 초기화
    setMessage("");
    setByteCount(0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newMessage = e.target.value;
    const bytes = calculateByteLength(newMessage);
    
    // 90바이트 제한
    if (bytes <= 90) {
      setMessage(newMessage);
    }
  };

  return (
    <Modal
      title={recipientName ? `${recipientName}님께 문자전송` : "문자전송"}
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="600px"
    >
      <S.SmsForm>
        <S.NoticeText>
          * 한글 45자까지 전송가능합니다.
        </S.NoticeText>

        <S.MessageContainer>
          <S.TextArea
            value={message}
            onChange={handleChange}
            placeholder="* 한글 45자까지 전송가능합니다."
            maxLength={45}
          />
          <S.ByteCounter>{byteCount} / 90 byte</S.ByteCounter>
        </S.MessageContainer>

        <S.PhoneInfoSection>
          <S.PhoneInfoRow>
            <S.Label>발신번호</S.Label>
            <S.PhoneNumber>{senderPhone}</S.PhoneNumber>
          </S.PhoneInfoRow>

          <S.PhoneInfoRow>
            <S.Label>수신번호</S.Label>
            <S.PhoneNumber>{recipientPhone || "번호 없음"}</S.PhoneNumber>
          </S.PhoneInfoRow>
        </S.PhoneInfoSection>

        <S.ButtonContainer>
          <Button variant="outline" size="large" onClick={onClose}>
            창닫기
          </Button>
          <Button variant="primary" size="large" onClick={handleSubmit}>
            문자발송
          </Button>
        </S.ButtonContainer>
      </S.SmsForm>
    </Modal>
  );
};

export default SmsSendModal;

