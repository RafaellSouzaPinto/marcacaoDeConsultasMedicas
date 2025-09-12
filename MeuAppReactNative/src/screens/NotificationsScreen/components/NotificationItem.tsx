import React from "react";
import { Icon } from "react-native-elements";
import { Notification } from "../../../services/notifications";
import theme from "../../../styles/theme";
import {
  NotificationCard,
  NotificationHeader,
  NotificationTitle,
  NotificationTime,
  NotificationMessage,
  NotificationBadge,
  BadgeText,
  ActionButtons,
  ActionButton,
} from "../styles";

interface NotificationItemProps {
  notification: Notification;
  onMarkAsRead: (id: string) => void;
  onDelete: (id: string) => void;
}

const getTypeDisplay = (type: string): string => {
  switch (type) {
    case "appointment_confirmed":
      return "Confirmada";
    case "appointment_cancelled":
      return "Cancelada";
    case "appointment_reminder":
      return "Lembrete";
    case "general":
    default:
      return "Geral";
  }
};

const formatTime = (date: Date): string => {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMins < 1) {
    return "Agora";
  } else if (diffMins < 60) {
    return `${diffMins}m`;
  } else if (diffHours < 24) {
    return `${diffHours}h`;
  } else {
    return `${diffDays}d`;
  }
};

export const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  onMarkAsRead,
  onDelete,
}) => {
  const handlePress = () => {
    if (!notification.read) {
      onMarkAsRead(notification.id);
    }
  };

  return (
    <NotificationCard isRead={notification.read} onPress={handlePress}>
      <NotificationHeader>
        <NotificationTitle isRead={notification.read}>
          {notification.title}
        </NotificationTitle>
        <NotificationBadge type={notification.type}>
          <BadgeText>{getTypeDisplay(notification.type)}</BadgeText>
        </NotificationBadge>
      </NotificationHeader>

      <NotificationMessage isRead={notification.read}>
        {notification.message}
      </NotificationMessage>

      <NotificationTime>
        {formatTime(new Date(notification.createdAt))}
      </NotificationTime>

      <ActionButtons>
        {!notification.read && (
          <ActionButton onPress={() => onMarkAsRead(notification.id)}>
            <Icon
              name="check"
              type="material"
              size={20}
              color={theme.colors.success}
            />
          </ActionButton>
        )}
        <ActionButton onPress={() => onDelete(notification.id)}>
          <Icon
            name="delete"
            type="material"
            size={20}
            color={theme.colors.error}
          />
        </ActionButton>
      </ActionButtons>
    </NotificationCard>
  );
};
