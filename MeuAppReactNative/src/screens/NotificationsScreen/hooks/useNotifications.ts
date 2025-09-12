import { useState } from "react";
import { Alert } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
import {
  notificationService,
  Notification,
} from "../../../services/notifications";

export const useNotifications = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  const loadNotifications = async () => {
    if (!user?.id) return;

    try {
      setLoading(true);
      const userNotifications = await notificationService.getNotifications(
        user.id
      );
      setNotifications(userNotifications);
    } catch (error) {
      console.error("Erro ao carregar notificações:", error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadNotifications();
    }, [user?.id])
  );

  const handleMarkAsRead = async (notificationId: string) => {
    try {
      await notificationService.markAsRead(notificationId);
      await loadNotifications(); // Recarrega a lista
    } catch (error) {
      console.error("Erro ao marcar como lida:", error);
      Alert.alert("Erro", "Não foi possível marcar a notificação como lida");
    }
  };

  const handleMarkAllAsRead = async () => {
    if (!user?.id) return;

    try {
      const unreadNotifications = notifications.filter((n) => !n.read);

      for (const notification of unreadNotifications) {
        await notificationService.markAsRead(notification.id);
      }

      await loadNotifications();
      Alert.alert("Sucesso", "Todas as notificações foram marcadas como lidas");
    } catch (error) {
      console.error("Erro ao marcar todas como lidas:", error);
      Alert.alert(
        "Erro",
        "Não foi possível marcar todas as notificações como lidas"
      );
    }
  };

  const handleDeleteNotification = async (notificationId: string) => {
    Alert.alert(
      "Confirmar exclusão",
      "Deseja realmente excluir esta notificação?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            try {
              await notificationService.deleteNotification(notificationId);
              await loadNotifications();
            } catch (error) {
              console.error("Erro ao excluir notificação:", error);
              Alert.alert("Erro", "Não foi possível excluir a notificação");
            }
          },
        },
      ]
    );
  };

  const handleClearAll = async () => {
    if (!user?.id) return;

    Alert.alert(
      "Confirmar limpeza",
      "Deseja realmente excluir todas as notificações?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir todas",
          style: "destructive",
          onPress: async () => {
            try {
              // Excluir todas as notificações uma por uma
              for (const notification of notifications) {
                await notificationService.deleteNotification(notification.id);
              }
              await loadNotifications();
              Alert.alert("Sucesso", "Todas as notificações foram excluídas");
            } catch (error) {
              console.error("Erro ao limpar notificações:", error);
              Alert.alert("Erro", "Não foi possível excluir as notificações");
            }
          },
        },
      ]
    );
  };

  const getUnreadCount = (): number => {
    return notifications.filter((n) => !n.read).length;
  };

  return {
    notifications,
    loading,
    loadNotifications,
    handleMarkAsRead,
    handleMarkAllAsRead,
    handleDeleteNotification,
    handleClearAll,
    getUnreadCount,
  };
};
