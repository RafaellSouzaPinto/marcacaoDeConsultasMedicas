import React from "react";
import { Alert } from "react-native";
import { Button, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigation";
import Header from "../../components/Header";
import { useCreateAppointment } from "./hooks/useCreateAppointment";
import { DoctorSelector } from "./components/DoctorSelector";
import { TimeSlotSelector } from "./components/TimeSlotSelector";
import { notificationService } from "../../services/notifications";
import {
  Container,
  Content,
  Title,
  Section,
  SectionTitle,
  FormContainer,
  ButtonContainer,
  LoadingContainer,
  LoadingText,
} from "./styles";
import theme from "../../styles/theme";

type CreateAppointmentScreenProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "CreateAppointment"
  >;
};

const CreateAppointmentScreen: React.FC = () => {
  const navigation =
    useNavigation<CreateAppointmentScreenProps["navigation"]>();
  const {
    selectedDoctor,
    setSelectedDoctor,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    description,
    setDescription,
    loading,
    availableSlots,
    checkAvailability,
    createAppointment,
    resetForm,
  } = useCreateAppointment();

  const handleDoctorSelect = (doctor: any) => {
    setSelectedDoctor(doctor);
    if (selectedDate) {
      checkAvailability(doctor.id, selectedDate);
    }
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    setSelectedTime("");
    if (selectedDoctor) {
      checkAvailability(selectedDoctor.id, date);
    }
  };

  const handleCreateAppointment = async () => {
    if (!selectedDoctor || !selectedDate || !selectedTime) {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios");
      return;
    }

    const success = await createAppointment();
    if (success) {
      Alert.alert("Sucesso", "Consulta agendada com sucesso!", [
        {
          text: "OK",
          onPress: () => {
            // Enviar notificação para o médico
            notificationService.createNotification({
              userId: selectedDoctor.id,
              title: "Nova Solicitação de Consulta",
              message: `Nova consulta solicitada para ${selectedDate} às ${selectedTime}`,
              type: "general",
            });
            navigation.goBack();
          },
        },
      ]);
    } else {
      Alert.alert("Erro", "Não foi possível agendar a consulta");
    }
  };

  if (loading) {
    return (
      <Container>
        <Header />
        <LoadingContainer>
          <LoadingText>Carregando...</LoadingText>
        </LoadingContainer>
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <Content>
        <Title>Agendar Consulta</Title>

        <Section>
          <SectionTitle>Selecione um médico</SectionTitle>
          <DoctorSelector
            selectedDoctor={selectedDoctor}
            onDoctorSelect={handleDoctorSelect}
          />
        </Section>

        {selectedDoctor && (
          <Section>
            <SectionTitle>Data da consulta</SectionTitle>
            <FormContainer>
              <Input
                placeholder="DD/MM/AAAA"
                value={selectedDate}
                onChangeText={handleDateChange}
                inputStyle={{ color: theme.colors.text }}
              />
            </FormContainer>
          </Section>
        )}

        {selectedDoctor && selectedDate && (
          <Section>
            <SectionTitle>Horário disponível</SectionTitle>
            <TimeSlotSelector
              availableSlots={availableSlots}
              selectedTime={selectedTime}
              onTimeSelect={setSelectedTime}
            />
          </Section>
        )}

        {selectedDoctor && selectedDate && selectedTime && (
          <Section>
            <SectionTitle>Observações (opcional)</SectionTitle>
            <FormContainer>
              <Input
                placeholder="Descreva o motivo da consulta..."
                value={description}
                onChangeText={setDescription}
                multiline
                numberOfLines={3}
                inputStyle={{ color: theme.colors.text }}
              />
            </FormContainer>
          </Section>
        )}

        <ButtonContainer>
          <Button
            title="Agendar Consulta"
            onPress={handleCreateAppointment}
            disabled={!selectedDoctor || !selectedDate || !selectedTime}
            buttonStyle={{
              backgroundColor: theme.colors.primary,
              paddingVertical: 12,
            }}
          />
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default CreateAppointmentScreen;
