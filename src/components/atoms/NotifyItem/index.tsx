import * as S from "./NotifyItme.style";

interface NotificationItemProps {
  message: string;
  isRead?: boolean;
  onClick?: () => void;
};

const NotifyItem: React.FC<NotificationItemProps> = ({
  message,
  isRead = false,
  onClick,
}) => {
  return (
    <S.NotifyItem isRead={isRead} onClick={onClick}>
      <S.NotifyText>{message}</S.NotifyText>
      <S.StatusIcon isRead={isRead}></S.StatusIcon>
    </S.NotifyItem>
  );
};

export default NotifyItem;
