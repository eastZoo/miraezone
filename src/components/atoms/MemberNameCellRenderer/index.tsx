import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import MailSendModal from "@/components/containers/MailSendModal";
import SmsSendModal from "@/components/containers/SmsSendModal";
import * as S from "./MemberNameCellRenderer.style";
import type { ICellRendererParams } from "ag-grid-community";

interface MenuItem {
  label: string;
  onClick: () => void;
}

const MemberNameCellRenderer: React.FC<ICellRendererParams> = ({
  value,
  data,
}) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [isMailModalOpen, setIsMailModalOpen] = useState(false);
  const [isSmsModalOpen, setIsSmsModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLSpanElement>(null);

  const menuItems: MenuItem[] = [
    {
      label: "회원정보",
      onClick: () => {
        console.log("회원정보 클릭:", data);
        setShowMenu(false);
        // 회원정보 수정 페이지로 이동 (memberId 또는 id를 사용)
        const memberId = data?.id || data?.memberId || data?.number || "1";
        navigate(`/admin/members/edit/${memberId}`);
      },
    },
    {
      label: "메일보내기",
      onClick: () => {
        console.log("메일보내기 클릭:", data);
        setShowMenu(false);
        setIsMailModalOpen(true);
      },
    },
    {
      label: "SMS보내기",
      onClick: () => {
        console.log("SMS보내기 클릭:", data);
        setShowMenu(false);
        setIsSmsModalOpen(true);
      },
    },
    {
      label: "쇼핑몰로그인",
      onClick: () => {
        console.log("쇼핑몰로그인 클릭:", data);
        setShowMenu(false);
      },
    },
  ];

  // 외부 클릭 시 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  const handleNameClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX + rect.width / 2,
      });
    }

    setShowMenu(!showMenu);
  };

  return (
    <S.CellContainer>
      <S.NameLink ref={buttonRef} onClick={handleNameClick}>
        {value || ""}
      </S.NameLink>
      {showMenu &&
        createPortal(
          <S.ContextMenu
            ref={menuRef}
            style={{
              position: "absolute",
              top: `${menuPosition.top}px`,
              left: `${menuPosition.left}px`,
              transform: "translateX(-50%)",
            }}
          >
            {menuItems.map((item, index) => (
              <S.MenuItem key={index} onClick={item.onClick}>
                {item.label}
              </S.MenuItem>
            ))}
          </S.ContextMenu>,
          document.body
        )}
      {isMailModalOpen &&
        createPortal(
          <MailSendModal
            isOpen={isMailModalOpen}
            onClose={() => setIsMailModalOpen(false)}
            recipientEmail={data?.email || data?.taxEmail || ""}
            recipientName={data?.memberName || data?.name || value || ""}
          />,
          document.body
        )}
      {isSmsModalOpen &&
        createPortal(
          <SmsSendModal
            isOpen={isSmsModalOpen}
            onClose={() => setIsSmsModalOpen(false)}
            recipientPhone={data?.phone || ""}
            recipientName={data?.memberName || data?.name || value || ""}
          />,
          document.body
        )}
    </S.CellContainer>
  );
};

export default MemberNameCellRenderer;
