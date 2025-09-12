import React from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";
import theme from "../../../styles/theme";

interface TimeSlotSelectorProps {
  availableSlots: string[];
  selectedTime: string;
  onTimeSelect: (time: string) => void;
}

export const TimeSlotSelector: React.FC<TimeSlotSelectorProps> = ({
  availableSlots,
  selectedTime,
  onTimeSelect,
}) => {
  const renderTimeSlot = ({ item }: { item: string }) => (
    <TimeSlotButton
      selected={selectedTime === item}
      onPress={() => onTimeSelect(item)}
    >
      <TimeSlotText selected={selectedTime === item}>{item}</TimeSlotText>
    </TimeSlotButton>
  );

  if (availableSlots.length === 0) {
    return (
      <EmptyContainer>
        <EmptyText>Nenhum horário disponível para esta data</EmptyText>
      </EmptyContainer>
    );
  }

  return (
    <FlatList
      data={availableSlots}
      keyExtractor={(item) => item}
      renderItem={renderTimeSlot}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={{ justifyContent: "space-between" }}
    />
  );
};

const TimeSlotButton = styled(TouchableOpacity)<{ selected: boolean }>`
  background-color: ${(props: { selected: boolean }) =>
    props.selected ? theme.colors.primary : theme.colors.white};
  border: 1px solid ${theme.colors.primary};
  border-radius: 8px;
  padding: ${theme.spacing.medium}px;
  margin-bottom: ${theme.spacing.small}px;
  min-width: 30%;
  align-items: center;
`;

const TimeSlotText = styled.Text<{ selected: boolean }>`
  color: ${(props: { selected: boolean }) =>
    props.selected ? theme.colors.white : theme.colors.primary};
  font-size: ${theme.typography.body.fontSize}px;
  font-weight: 600;
`;

const EmptyContainer = styled.View`
  padding: ${theme.spacing.large}px;
  align-items: center;
`;

const EmptyText = styled.Text`
  color: ${theme.colors.text};
  font-size: ${theme.typography.body.fontSize}px;
  text-align: center;
  opacity: 0.6;
`;
