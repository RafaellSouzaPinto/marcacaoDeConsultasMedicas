import styled from "styled-components/native";
import { ScrollView, FlatList } from "react-native";
import theme from "../../styles/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Content = styled(ScrollView)`
  flex: 1;
  padding: ${theme.spacing.medium}px;
`;

export const Title = styled.Text`
  font-size: ${theme.typography.title.fontSize}px;
  font-weight: ${theme.typography.title.fontWeight};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.large}px;
  text-align: center;
`;

export const NotificationsList = styled(FlatList)`
  flex: 1;
`;

export const NotificationCard = styled.TouchableOpacity<{ isRead: boolean }>`
  background-color: ${(props: { isRead: boolean }) =>
    props.isRead ? theme.colors.white : theme.colors.primary + "10"};
  border-radius: 8px;
  padding: ${theme.spacing.medium}px;
  margin-bottom: ${theme.spacing.small}px;
  border-left-width: 4px;
  border-left-color: ${(props: { isRead: boolean }) =>
    props.isRead ? theme.colors.border : theme.colors.primary};
  elevation: 1;
  shadow-color: #000;
  shadow-opacity: 0.05;
  shadow-radius: 2px;
  shadow-offset: 0px 1px;
`;

export const NotificationHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${theme.spacing.small}px;
`;

export const NotificationTitle = styled.Text<{ isRead: boolean }>`
  font-size: ${theme.typography.subtitle.fontSize}px;
  font-weight: ${(props: { isRead: boolean }) =>
    props.isRead ? "normal" : "bold"};
  color: ${theme.colors.text};
  flex: 1;
  margin-right: ${theme.spacing.small}px;
`;

export const NotificationTime = styled.Text`
  font-size: ${theme.typography.caption.fontSize}px;
  color: ${theme.colors.textSecondary};
`;

export const NotificationMessage = styled.Text<{ isRead: boolean }>`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.text};
  opacity: ${(props: { isRead: boolean }) => (props.isRead ? 0.7 : 1)};
  line-height: 20px;
`;

export const NotificationBadge = styled.View<{ type: string }>`
  background-color: ${(props: { type: string }) => {
    switch (props.type) {
      case "appointment_confirmed":
        return theme.colors.success;
      case "appointment_cancelled":
        return theme.colors.error;
      case "appointment_reminder":
        return theme.colors.warning;
      default:
        return theme.colors.primary;
    }
  }};
  padding: 2px 8px;
  border-radius: 12px;
  margin-left: ${theme.spacing.small}px;
`;

export const BadgeText = styled.Text`
  color: ${theme.colors.white};
  font-size: ${theme.typography.caption.fontSize}px;
  font-weight: 600;
`;

export const ActionButtons = styled.View`
  flex-direction: row;
  margin-top: ${theme.spacing.medium}px;
`;

export const ActionButton = styled.TouchableOpacity`
  padding: ${theme.spacing.small}px;
  margin-right: ${theme.spacing.small}px;
`;

export const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing.large}px;
`;

export const EmptyText = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.textSecondary};
  text-align: center;
  opacity: 0.6;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.Text`
  margin-top: ${theme.spacing.medium}px;
  color: ${theme.colors.text};
  font-size: ${theme.typography.body.fontSize}px;
`;

export const HeaderActions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${theme.spacing.medium}px;
`;

export const ButtonContainer = styled.View`
  margin-bottom: ${theme.spacing.small}px;
`;
