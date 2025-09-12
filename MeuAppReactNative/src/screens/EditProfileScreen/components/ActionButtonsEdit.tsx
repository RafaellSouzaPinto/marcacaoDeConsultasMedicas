import React from "react";
import { Button } from "react-native-elements";
import { ButtonContainer } from "../styles";
import theme from "../../../styles/theme";

interface ActionButtonsEditProps {
  loading: boolean;
  onSave: () => void;
  onCancel: () => void;
  onReset: () => void;
}

export const ActionButtonsEdit: React.FC<ActionButtonsEditProps> = ({
  loading,
  onSave,
  onCancel,
  onReset,
}) => {
  return (
    <>
      <ButtonContainer>
        <Button
          title={loading ? "Salvando..." : "Salvar Perfil"}
          onPress={onSave}
          disabled={loading}
          buttonStyle={{
            backgroundColor: theme.colors.success,
            paddingVertical: 12,
          }}
        />
      </ButtonContainer>

      <ButtonContainer>
        <Button
          title="Resetar Alterações"
          onPress={onReset}
          disabled={loading}
          buttonStyle={{
            backgroundColor: theme.colors.warning,
            paddingVertical: 12,
          }}
        />
      </ButtonContainer>

      <ButtonContainer>
        <Button
          title="Cancelar"
          onPress={onCancel}
          disabled={loading}
          buttonStyle={{
            backgroundColor: theme.colors.error,
            paddingVertical: 12,
          }}
        />
      </ButtonContainer>
    </>
  );
};
