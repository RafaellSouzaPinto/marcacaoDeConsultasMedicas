import React from "react";
import styled from "styled-components/native";
import { ViewStyle } from "react-native";
import { Card, Text, Avatar } from "@rneui/themed";
import theme from "../styles/theme";

interface AppointmentCardProps {
  doctorName: string;
  date: string;
  time: string;
  specialty: string;
  status: "pending" | "confirmed" | "cancelled";
  onPress?: () => void;
  style?: ViewStyle;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  doctorName,
  date,
  time,
  specialty,
  status,
  onPress,
  style,
}) => {
  const getStatusColor = () => {
    switch (status) {
      case "confirmed":
        return theme.colors.success;
      case "cancelled":
        return theme.colors.error;
      default:
        return theme.colors.primary;
    }
  };

  return (
    <Card containerStyle={[styles.card, style]}>
      <DoctorInfo>
        <Avatar
          size="medium"
          rounded
          source={{
            uri: `https://randomuser.me/api/portraits/men/${Math.floor(
              Math.random() * 10
            )}.jpg`,
          }}
          containerStyle={styles.avatar}
        />
        <TextContainer>
          <DoctorName>{doctorName}</DoctorName>
          <Specialty>{specialty}</Specialty>
        </TextContainer>
      </DoctorInfo>

      <AppointmentInfo>
        <InfoRow>
          <InfoLabel>Data:</InfoLabel>
          <InfoValue>{date}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Horário:</InfoLabel>
          <InfoValue>{time}</InfoValue>
        </InfoRow>
      </AppointmentInfo>

      <StatusContainer>
        <StatusDot color={getStatusColor()} />
        <Text style={{ color: getStatusColor() }}>
          {status === "confirmed"
            ? "Confirmada"
            : status === "cancelled"
            ? "Cancelada"
            : "Pendente"}
        </Text>
      </StatusContainer>
    </Card>
  );
};

const styles = {
  card: {
    borderRadius: theme.radii.large,
    marginHorizontal: 0,
    marginVertical: 8,
    padding: 16,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  avatar: {
    backgroundColor: theme.colors.primary,
  },
};

const CardContent = styled.View`
  padding: 10px;
`;

const DoctorInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

const TextContainer = styled.View`
  margin-left: 15px;
`;

const DoctorName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.text};
`;

const Specialty = styled.Text`
  font-size: 14px;
  color: ${theme.colors.text};
  opacity: 0.7;
`;

const AppointmentInfo = styled.View`
  margin-bottom: 15px;
`;

const InfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const InfoLabel = styled.Text`
  font-size: 14px;
  color: ${theme.colors.text};
  opacity: 0.7;
`;

const InfoValue = styled.Text`
  font-size: 14px;
  color: ${theme.colors.text};
  font-weight: 500;
`;

const StatusContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const StatusDot = styled.View<{ color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${(props: { color: string }) => props.color};
  margin-right: 8px;
`;

const StatusText = styled.Text<{ color: string }>`
  fontsize: 14;
  color: ${(props: { color: string }) => props.color};
  fontweight: 500;
`;

export default AppointmentCard;
