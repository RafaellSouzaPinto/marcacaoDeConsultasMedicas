// src/screens/SettingsScreen/hooks/useSettings.ts
import { useState } from "react";
import { Alert, Share } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { storageService } from "../../../services/storage";
import { AppSettings, defaultSettings } from "../models/appSettings";

export const useSettings = () => {
  const { signOut } = useAuth();
  const [settings, setSettings] = useState<AppSettings>(defaultSettings);
  const [loading, setLoading] = useState(true);
  const [storageInfo, setStorageInfo] = useState<any>(null);

  const loadSettings = async () => {
    try {
      setLoading(true);
      const appSettings = await storageService.getAppSettings();
      setSettings(appSettings);

      const info = await storageService.getStorageInfo();
      setStorageInfo(info);
    } catch (error) {
      console.error("Erro ao carregar configurações:", error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadSettings();
    }, [])
  );

  const updateSetting = async (key: keyof AppSettings, value: any) => {
    try {
      const newSettings = { ...settings, [key]: value };
      setSettings(newSettings);
      await storageService.updateAppSettings(newSettings);
    } catch (error) {
      console.error("Erro ao salvar configuração:", error);
      Alert.alert("Erro", "Não foi possível salvar a configuração");
    }
  };

  const handleNotificationsToggle = async (value: boolean) => {
    await updateSetting("notifications", value);
  };

  const handleAutoBackupToggle = async (value: boolean) => {
    await updateSetting("autoBackup", value);
  };

  const handleExportData = async () => {
    try {
      // Simular exportação de dados
      const exportData = {
        settings,
        timestamp: new Date().toISOString(),
      };

      await Share.share({
        message: "Dados exportados do app de consultas médicas",
        title: "Backup de dados",
      });

      Alert.alert("Sucesso", "Dados exportados com sucesso!");
    } catch (error) {
      console.error("Erro ao exportar dados:", error);
      Alert.alert("Erro", "Não foi possível exportar os dados");
    }
  };

  const handleImportData = async () => {
    Alert.alert(
      "Importar dados",
      "Esta funcionalidade permite importar dados de um backup. Implementação pendente.",
      [{ text: "OK" }]
    );
  };

  const handleClearCache = async () => {
    Alert.alert(
      "Limpar cache",
      "Deseja realmente limpar o cache do aplicativo?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Limpar",
          style: "destructive",
          onPress: async () => {
            try {
              await storageService.clearCache();
              await loadSettings(); // Recarrega informações de armazenamento
              Alert.alert("Sucesso", "Cache limpo com sucesso!");
            } catch (error) {
              console.error("Erro ao limpar cache:", error);
              Alert.alert("Erro", "Não foi possível limpar o cache");
            }
          },
        },
      ]
    );
  };

  const handleResetSettings = async () => {
    Alert.alert(
      "Resetar configurações",
      "Deseja realmente resetar todas as configurações para os valores padrão?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Resetar",
          style: "destructive",
          onPress: async () => {
            try {
              setSettings(defaultSettings);
              await storageService.updateAppSettings(defaultSettings);
              Alert.alert("Sucesso", "Configurações resetadas com sucesso!");
            } catch (error) {
              console.error("Erro ao resetar configurações:", error);
              Alert.alert("Erro", "Não foi possível resetar as configurações");
            }
          },
        },
      ]
    );
  };

  const handleSignOut = async () => {
    Alert.alert("Confirmar saída", "Deseja realmente sair da sua conta?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Sair",
        style: "destructive",
        onPress: async () => {
          try {
            await signOut();
          } catch (error) {
            console.error("Erro ao fazer logout:", error);
            Alert.alert("Erro", "Não foi possível fazer logout");
          }
        },
      },
    ]);
  };

  return {
    settings,
    loading,
    storageInfo,
    handleNotificationsToggle,
    handleAutoBackupToggle,
    handleExportData,
    handleImportData,
    handleClearCache,
    handleResetSettings,
    handleSignOut,
  };
};
