// src/screens/SettingsScreen/components/SettingsActions.tsx
import React from "react";
import { Button } from "react-native-elements";
import theme from "../../../styles/theme";
import { Section, SectionTitle, ButtonContainer, AppVersion } from "../styles";

interface SettingsActionsProps {
  onResetSettings: () => void;
  onSignOut: () => void;
}

export const SettingsActions: React.FC<SettingsActionsProps> = ({
  onResetSettings,
  onSignOut,
}) => {
  return (
    <Section>
      <SectionTitle>Ações</SectionTitle>

      <ButtonContainer>
        <Button
          title="Resetar configurações"
          onPress={onResetSettings}
          buttonStyle={{
            backgroundColor: theme.colors.warning,
            paddingVertical: 10,
          }}
        />
      </ButtonContainer>

      <ButtonContainer>
        <Button
          title="Sair da conta"
          onPress={onSignOut}
          buttonStyle={{
            backgroundColor: theme.colors.error,
            paddingVertical: 10,
          }}
        />
      </ButtonContainer>

      <AppVersion>Versão 1.0.0</AppVersion>
    </Section>
  );
};
