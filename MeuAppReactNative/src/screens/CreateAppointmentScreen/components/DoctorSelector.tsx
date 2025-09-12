import React from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";
import { Doctor, availableDoctors } from "../models/doctors";
import theme from "../../../styles/theme";

interface DoctorSelectorProps {
  selectedDoctor: Doctor | null;
  onDoctorSelect: (doctor: Doctor) => void;
}

export const DoctorSelector: React.FC<DoctorSelectorProps> = ({
  selectedDoctor,
  onDoctorSelect,
}) => {
  const renderDoctor = ({ item }: { item: Doctor }) => (
    <DoctorCard
      selected={selectedDoctor?.id === item.id}
      onPress={() => onDoctorSelect(item)}
    >
      <DoctorImage source={{ uri: item.image }} />
      <DoctorInfo>
        <DoctorName>{item.name}</DoctorName>
        <DoctorSpecialty>{item.specialty}</DoctorSpecialty>
      </DoctorInfo>
      {selectedDoctor?.id === item.id && <SelectedIndicator />}
    </DoctorCard>
  );

  return (
    <FlatList
      data={availableDoctors}
      keyExtractor={(item) => item.id}
      renderItem={renderDoctor}
      showsVerticalScrollIndicator={false}
    />
  );
};

const DoctorCard = styled(TouchableOpacity)<{ selected: boolean }>`
  flex-direction: row;
  padding: ${theme.spacing.medium}px;
  margin-bottom: ${theme.spacing.small}px;
  background-color: ${(props: { selected: boolean }) =>
    props.selected ? theme.colors.primary + "20" : theme.colors.white};
  border-radius: 8px;
  border-width: ${(props: { selected: boolean }) =>
    props.selected ? "2px" : "1px"};
  border-color: ${(props: { selected: boolean }) =>
    props.selected ? theme.colors.primary : theme.colors.border};
  align-items: center;
`;

const DoctorImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: ${theme.spacing.medium}px;
`;

const DoctorInfo = styled.View`
  flex: 1;
`;

const DoctorName = styled.Text`
  font-size: ${theme.typography.subtitle.fontSize}px;
  font-weight: ${theme.typography.subtitle.fontWeight};
  color: ${theme.colors.text};
  margin-bottom: 4px;
`;

const DoctorSpecialty = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.primary};
`;

const SelectedIndicator = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${theme.colors.primary};
`;
