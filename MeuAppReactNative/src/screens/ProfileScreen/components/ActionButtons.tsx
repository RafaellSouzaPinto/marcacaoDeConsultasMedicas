import React from "react";
import { Button } from "react-native-elements";
import { ActionList, ButtonContainer } from "../styles";
import theme from "../../../styles/theme";

interface ActionButtonsProps {
  onEditProfile: () => void;
  onViewNotifications: () => void;
  onSettings: () => void;
  onNavigateToHome: () => void;
  onNavigateToDashboard: () => void;
  onSignOut: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onEditProfile,
  onViewNotifications,
  onSettings,
  onNavigateToHome,
  onNavigateToDashboard,
  onSignOut,
}) => {
  return (
    <ActionList>
      <ButtonContainer>
        <Button
          title="Editar Perfil"
          onPress={onEditProfile}
          buttonStyle={{
            backgroundColor: theme.colors.primary,
            paddingVertical: 12,
          }}
        />
      </ButtonContainer>

      <ButtonContainer>
        <Button
          title="Notificações"
          onPress={onViewNotifications}
          buttonStyle={{
            backgroundColor: theme.colors.secondary,
            paddingVertical: 12,
          }}
        />
      </ButtonContainer>

      <ButtonContainer>
        <Button
          title="Configurações"
          onPress={onSettings}
          buttonStyle={{
            backgroundColor: "#6c5ce7",
            paddingVertical: 12,
          }}
        />
      </ButtonContainer>

      <ButtonContainer>
        <Button
          title="Voltar ao Início"
          onPress={onNavigateToHome}
          buttonStyle={{
            backgroundColor: theme.colors.success,
            paddingVertical: 12,
          }}
        />
      </ButtonContainer>

      <ButtonContainer>
        <Button
          title="Meu Painel"
          onPress={onNavigateToDashboard}
          buttonStyle={{
            backgroundColor: "#fd79a8",
            paddingVertical: 12,
          }}
        />
      </ButtonContainer>

      <ButtonContainer>
        <Button
          title="Sair"
          onPress={onSignOut}
          buttonStyle={{
            backgroundColor: theme.colors.error,
            paddingVertical: 12,
          }}
        />
      </ButtonContainer>
    </ActionList>
  );
};
