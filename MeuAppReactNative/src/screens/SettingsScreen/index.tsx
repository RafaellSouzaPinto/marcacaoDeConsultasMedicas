// src/screens/SettingsScreen/index.tsx
import React from "react";
import Header from "../../components/Header";
import { useSettings } from "./hooks/useSettings";
import { GeneralSettings } from "./components/GeneralSettings";
import { DataManagement } from "./components/DataManagement";
import { SettingsActions } from "./components/SettingsActions";
import {
  Container,
  Content,
  Title,
  LoadingContainer,
  LoadingText,
} from "./styles";

const SettingsScreen: React.FC = () => {
  const {
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
  } = useSettings();

  if (loading) {
    return (
      <Container>
        <Header />
        <LoadingContainer>
          <LoadingText>Carregando configurações...</LoadingText>
        </LoadingContainer>
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <Content>
        <Title>Configurações</Title>

        <GeneralSettings
          settings={settings}
          onNotificationsToggle={handleNotificationsToggle}
          onAutoBackupToggle={handleAutoBackupToggle}
        />

        <DataManagement
          storageInfo={storageInfo}
          onExportData={handleExportData}
          onImportData={handleImportData}
          onClearCache={handleClearCache}
        />

        <SettingsActions
          onResetSettings={handleResetSettings}
          onSignOut={handleSignOut}
        />
      </Content>
    </Container>
  );
};

export default SettingsScreen;
