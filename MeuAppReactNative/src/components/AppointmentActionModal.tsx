import React from "react";
import styled from "styled-components/native";
import { Modal, ViewStyle } from "react-native";
import { Button, Input } from "react-native-elements";
import theme from "../styles/theme";

interface AppointmentActionModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: (reason?: string) => void;
  actionType: "confirm" | "cancel";
  appointmentDetails: {
    patientName: string;
    doctorName: string;
    date: string;
    time: string;
    specialty: string;
  };
}

const AppointmentActionModal: React.FC<AppointmentActionModalProps> = ({
  visible,
  onClose,
  onConfirm,
  actionType,
  appointmentDetails,
}) => {
  const [reason, setReason] = React.useState("");

  const handleConfirm = () => {
    onConfirm(reason.trim() || undefined);
    setReason("");
    onClose();
  };

  const handleClose = () => {
    setReason("");
    onClose();
  };

  const isCancel = actionType === "cancel";

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={handleClose}
    >
      <Overlay>
        <ModalContainer>
          <Header>
            <Title>
              {isCancel ? "Cancelar Consulta" : "Confirmar Consulta"}
            </Title>
          </Header>

          <Content>
            <AppointmentInfo>
              <InfoRow>
                <InfoLabel>Paciente:</InfoLabel>
                <InfoValue>{appointmentDetails.patientName}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Médico:</InfoLabel>
                <InfoValue>{appointmentDetails.doctorName}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Especialidade:</InfoLabel>
                <InfoValue>{appointmentDetails.specialty}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Data/Hora:</InfoLabel>
                <InfoValue>
                  {appointmentDetails.date} às {appointmentDetails.time}
                </InfoValue>
              </InfoRow>
            </AppointmentInfo>

            {isCancel && (
              <ReasonContainer>
                <Input
                  label="Motivo do cancelamento (opcional)"
                  placeholder="Digite o motivo..."
                  value={reason}
                  onChangeText={setReason}
                  multiline
                  numberOfLines={3}
                  containerStyle={styles.reasonInput}
                />
              </ReasonContainer>
            )}

            <ConfirmationText isCancel={isCancel}>
              {isCancel
                ? "Tem certeza que deseja cancelar esta consulta?"
                : "Tem certeza que deseja confirmar esta consulta?"}
            </ConfirmationText>
          </Content>

          <ButtonContainer>
            <Button
              title="Cancelar"
              onPress={handleClose}
              containerStyle={styles.cancelButton as ViewStyle}
              buttonStyle={styles.cancelButtonStyle}
            />
            <Button
              title={isCancel ? "Confirmar Cancelamento" : "Confirmar"}
              onPress={handleConfirm}
              containerStyle={styles.confirmButton as ViewStyle}
              buttonStyle={[
                styles.confirmButtonStyle,
                {
                  backgroundColor: isCancel
                    ? theme.colors.error
                    : theme.colors.success,
                },
              ]}
            />
          </ButtonContainer>
        </ModalContainer>
      </Overlay>
    </Modal>
  );
};

const styles = {
  reasonInput: {
    marginBottom: 10,
  },
  cancelButton: {
    flex: 1,
    marginRight: 8,
  },
  confirmButton: {
    flex: 1,
    marginLeft: 8,
  },
  cancelButtonStyle: {
    backgroundColor: theme.colors.secondary,
    paddingVertical: 12,
    borderRadius: theme.radii.medium,
  },
  confirmButtonStyle: {
    paddingVertical: 12,
    borderRadius: theme.radii.medium,
  },
};

const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ModalContainer = styled.View`
  background-color: ${theme.colors.surface};
  border-radius: ${theme.radii.large}px;
  width: 100%;
  max-width: 420px;
  border-width: 1px;
  border-color: ${theme.colors.border};
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.12;
  shadow-radius: 10px;
  elevation: 6;
`;

const Header = styled.View`
  padding: 20px 20px 10px 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.border};
`;

const Title = styled.Text`
  font-size: ${theme.typography.subtitle.fontSize}px;
  font-weight: ${theme.typography.subtitle.fontWeight};
  color: ${theme.colors.text};
  text-align: center;
`;

const Content = styled.View`
  padding: 20px;
`;

const AppointmentInfo = styled.View`
  background-color: ${theme.colors.background};
  border-radius: ${theme.radii.medium}px;
  padding: 16px;
  margin-bottom: 16px;
`;

const InfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const InfoLabel = styled.Text`
  font-size: 14px;
  color: ${theme.colors.textSecondary};
  font-weight: 500;
`;

const InfoValue = styled.Text`
  font-size: 14px;
  color: ${theme.colors.text};
  font-weight: 600;
  flex: 1;
  text-align: right;
`;

const ReasonContainer = styled.View`
  margin-bottom: 16px;
`;

const ConfirmationText = styled.Text<{ isCancel: boolean }>`
  font-size: 16px;
  color: ${(props: { isCancel: boolean }) =>
    props.isCancel ? theme.colors.error : theme.colors.success};
  text-align: center;
  margin-bottom: 20px;
  font-weight: 600;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  padding: 0 20px 20px 20px;
`;

export default AppointmentActionModal;
