import React, { useState, useRef } from "react";
import Modal from "@/components/atoms/Modal";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import RadioButton from "@/components/atoms/RadioButton";
import * as S from "./MailSendModal.style";

interface MailSendModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipientEmail?: string;
  recipientName?: string;
}

const MailSendModal: React.FC<MailSendModalProps> = ({
  isOpen,
  onClose,
  recipientEmail = "",
  recipientName = "",
}) => {
  const fileInput1Ref = useRef<HTMLInputElement>(null);
  const fileInput2Ref = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    subject: "",
    format: "text",
    content: "",
    attachment1: null as File | null,
    attachment2: null as File | null,
  });

  const [fileNames, setFileNames] = useState({
    file1: "선택된 파일 없음",
    file2: "선택된 파일 없음",
  });

  const formatOptions = [
    { value: "text", label: "TEXT" },
    { value: "html", label: "HTML" },
    { value: "text+html", label: "TEXT+HTML" },
  ];

  const handleSubmit = () => {
    console.log("메일 전송:", {
      recipientEmail,
      recipientName,
      ...formData,
    });
    // TODO: 실제 메일 전송 API 호출
    onClose();
    // 폼 초기화
    setFormData({
      subject: "",
      format: "text",
      content: "",
      attachment1: null,
      attachment2: null,
    });
    setFileNames({
      file1: "선택된 파일 없음",
      file2: "선택된 파일 없음",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormatChange = (
    _name: string,
    option: { value: string; label: string }
  ) => {
    setFormData((prev) => ({
      ...prev,
      format: option.value,
    }));
  };

  const handleFileSelect = (fileNumber: 1 | 2) => {
    const fileInput =
      fileNumber === 1 ? fileInput1Ref.current : fileInput2Ref.current;
    fileInput?.click();
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fileNumber: 1 | 2
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        [`attachment${fileNumber}`]: file,
      }));
      setFileNames((prev) => ({
        ...prev,
        [`file${fileNumber}`]: file.name,
      }));
    }
  };

  return (
    <Modal
      title={recipientName ? `${recipientName}님께 메일보내기` : "메일보내기"}
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="800px"
    >
      <S.MailForm>
        <S.FormRow>
          <S.Label>제목</S.Label>
          <Input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="메일 제목을 입력하세요"
            size="medium"
            fullWidth
          />
        </S.FormRow>

        <S.FormRow>
          <S.Label>형식</S.Label>
          <RadioButton
            name="format"
            options={formatOptions}
            value={formData.format}
            onChange={handleFormatChange}
          />
        </S.FormRow>

        <S.FormRow>
          <S.Label>내용</S.Label>
          <S.TextArea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="메일 내용을 입력하세요"
            rows={10}
          />
        </S.FormRow>

        <S.Divider />

        <S.AttachmentNotice>
          *첨부 파일은 누락될 수 있으므로 메일을 보낸 후 파일이 첨부되었는지
          반드시 확인해 주시기 바랍니다.
        </S.AttachmentNotice>

        <S.FormRow>
          <S.Label>첨부 파일 1</S.Label>
          <S.FileUploadGroup>
            <input
              type="file"
              ref={fileInput1Ref}
              onChange={(e) => handleFileChange(e, 1)}
              style={{ display: "none" }}
            />
            <Button
              variant="admin"
              size="medium"
              onClick={() => handleFileSelect(1)}
            >
              파일 선택
            </Button>
            <S.FileStatus>{fileNames.file1}</S.FileStatus>
          </S.FileUploadGroup>
        </S.FormRow>

        <S.FormRow>
          <S.Label>첨부 파일 2</S.Label>
          <S.FileUploadGroup>
            <input
              type="file"
              ref={fileInput2Ref}
              onChange={(e) => handleFileChange(e, 2)}
              style={{ display: "none" }}
            />
            <Button
              variant="admin"
              size="medium"
              onClick={() => handleFileSelect(2)}
            >
              파일 선택
            </Button>
            <S.FileStatus>{fileNames.file2}</S.FileStatus>
          </S.FileUploadGroup>
        </S.FormRow>

        <S.ButtonContainer>
          <Button variant="outline" size="large" onClick={onClose}>
            창닫기
          </Button>
          <Button variant="primary" size="large" onClick={handleSubmit}>
            메일발송
          </Button>
        </S.ButtonContainer>
      </S.MailForm>
    </Modal>
  );
};

export default MailSendModal;
