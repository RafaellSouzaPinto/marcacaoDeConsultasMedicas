import React from "react";
import { Button } from "react-native-elements";
import { HeaderActions, ButtonContainer } from "../styles";
import theme from "../../../styles/theme";

interface NotificationActionsProps {
  unreadCount: number;
  onMarkAllAsRead: () => void;
  onClearAll: () => void;
}

export const NotificationActions: React.FC<NotificationActionsProps> = ({
  unreadCount,
  onMarkAllAsRead,
  onClearAll,
}) => {
  return (
    <HeaderActions>
      <ButtonContainer>
        <Button
          title={`Marcar todas como lidas (${unreadCount})`}
          onPress={onMarkAllAsRead}
          disabled={unreadCount === 0}
          buttonStyle={{
            backgroundColor:
              unreadCount > 0 ? theme.colors.primary : theme.colors.border,
            paddingVertical: 8,
            paddingHorizontal: 12,
          }}
          titleStyle={{
            fontSize: 12,
          }}
        />
      </ButtonContainer>

      <ButtonContainer>
        <Button
          title="Limpar todas"
          onPress={onClearAll}
          buttonStyle={{
            backgroundColor: theme.colors.error,
            paddingVertical: 8,
            paddingHorizontal: 12,
          }}
          titleStyle={{
            fontSize: 12,
          }}
        />
      </ButtonContainer>
    </HeaderActions>
  );
};
