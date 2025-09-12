// src/screens/SettingsScreen/components/GeneralSettings.tsx
import React from "react";
import { Switch } from "react-native-elements";
import {
  AppSettings,
  getLanguageDisplay,
  getThemeDisplay,
} from "../models/appSettings";
import {
  Section,
  SectionTitle,
  SettingCard,
  SettingRow,
  SettingLabel,
  SettingValue,
} from "../styles";

interface GeneralSettingsProps {
  settings: AppSettings;
  onNotificationsToggle: (value: boolean) => void;
  onAutoBackupToggle: (value: boolean) => void;
}

export const GeneralSettings: React.FC<GeneralSettingsProps> = ({
  settings,
  onNotificationsToggle,
  onAutoBackupToggle,
}) => {
  return (
    <Section>
      <SectionTitle>Configurações Gerais</SectionTitle>

      <SettingCard>
        <SettingRow>
          <SettingLabel>Notificações</SettingLabel>
          <Switch
            value={settings.notifications}
            onValueChange={onNotificationsToggle}
          />
        </SettingRow>
      </SettingCard>

      <SettingCard>
        <SettingRow>
          <SettingLabel>Backup automático</SettingLabel>
          <Switch
            value={settings.autoBackup}
            onValueChange={onAutoBackupToggle}
          />
        </SettingRow>
      </SettingCard>

      <SettingCard>
        <SettingRow>
          <SettingLabel>Tema</SettingLabel>
          <SettingValue>{getThemeDisplay(settings.theme)}</SettingValue>
        </SettingRow>
      </SettingCard>

      <SettingCard>
        <SettingRow>
          <SettingLabel>Idioma</SettingLabel>
          <SettingValue>{getLanguageDisplay(settings.language)}</SettingValue>
        </SettingRow>
      </SettingCard>
    </Section>
  );
};
