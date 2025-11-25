import React from "react";
import * as S from "./Modal.style";
import { HiOutlineX, HiOutlineChevronLeft } from "react-icons/hi";
import Button from "../Button";
import { useMediaQuery } from "react-responsive";

interface ModalProps {
  modalButton?: boolean;
  title?: string;
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  maxWidth?: string;
}

const Modal = ({
  modalButton,
  title,
  children,
  isOpen,
  onClose,
  onSubmit,
  maxWidth,
}: ModalProps) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <S.ModalBackdrop onClick={handleBackdropClick}>
      <S.ModalContainer $maxWidth={maxWidth}>
        <S.ModalHeader>
          {isMobile && (
            <S.BackButton onClick={onClose}>
              <HiOutlineChevronLeft />
            </S.BackButton>
          )}
          {title && <S.ModalTitle>{title}</S.ModalTitle>}

          {!isMobile && (
            <S.CloseButton onClick={onClose}>
              <HiOutlineX />
            </S.CloseButton>
          )}
        </S.ModalHeader>
        <S.ModalContent>{children}</S.ModalContent>
        {modalButton && (
          <S.ModalButtonGroup>
            <Button variant="outline" type="button" onClick={onClose}>
              취소
            </Button>
            <Button type="button" onClick={onSubmit}>
              저장
            </Button>
          </S.ModalButtonGroup>
        )}
      </S.ModalContainer>
      {/* 버튼 */}
    </S.ModalBackdrop>
  );
};

export default Modal;
