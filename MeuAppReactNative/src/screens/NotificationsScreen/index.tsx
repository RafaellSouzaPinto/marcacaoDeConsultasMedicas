import React from "react";
import { RefreshControl } from "react-native";
import Header from "../../components/Header";
import { useNotifications } from "./hooks/useNotifications";
import { NotificationItem } from "./components/NotificationItem";
import { NotificationActions } from "./components/NotificationActions";
import { Notification } from "../../services/notifications";
import {
  Container,
  Content,
  Title,
  NotificationsList,
  EmptyContainer,
  EmptyText,
  LoadingContainer,
  LoadingText,
} from "./styles";

const NotificationsScreen: React.FC = () => {
  const {
    notifications,
    loading,
    loadNotifications,
    handleMarkAsRead,
    handleMarkAllAsRead,
    handleDeleteNotification,
    handleClearAll,
    getUnreadCount,
  } = useNotifications();

  const renderNotification = ({ item }: { item: Notification }) => (
    <NotificationItem
      notification={item}
      onMarkAsRead={handleMarkAsRead}
      onDelete={handleDeleteNotification}
    />
  );

  if (loading) {
    return (
      <Container>
        <Header />
        <LoadingContainer>
          <LoadingText>Carregando notificações...</LoadingText>
        </LoadingContainer>
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <Content>
        <Title>Notificações</Title>

        {notifications.length > 0 && (
          <NotificationActions
            unreadCount={getUnreadCount()}
            onMarkAllAsRead={handleMarkAllAsRead}
            onClearAll={handleClearAll}
          />
        )}

        <NotificationsList
          data={notifications}
          keyExtractor={(item: Notification) => item.id}
          renderItem={renderNotification}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={loadNotifications}
            />
          }
          ListEmptyComponent={
            <EmptyContainer>
              <EmptyText>Nenhuma notificação encontrada</EmptyText>
            </EmptyContainer>
          }
          showsVerticalScrollIndicator={false}
        />
      </Content>
    </Container>
  );
};

export default NotificationsScreen;
