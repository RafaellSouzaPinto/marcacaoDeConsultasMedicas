import React from "react";
import styled from "styled-components/native";
import { ViewStyle } from "react-native";
import theme from "../styles/theme";

interface StatisticsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  color?: string;
  icon?: React.ReactNode;
  style?: ViewStyle;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({
  title,
  value,
  subtitle,
  color = theme.colors.primary,
  icon,
  style,
}) => {
  return (
    <Container style={style} color={color}>
      <Header>
        {icon && <IconContainer>{icon}</IconContainer>}
        <Title>{title}</Title>
      </Header>
      <Value color={color}>{value}</Value>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Container>
  );
};

const Container = styled.View<{ color: string }>`
  background-color: ${theme.colors.surface};
  border-radius: ${theme.radii.large}px;
  padding: 16px;
  margin: 8px;
  min-height: 120px;
  justify-content: space-between;
  border-width: 1px;
  border-color: ${theme.colors.border};
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.08;
  shadow-radius: 8px;
  elevation: 2;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

const IconContainer = styled.View`
  margin-right: 8px;
`;

const Title = styled.Text`
  font-size: 14px;
  color: ${theme.colors.textSecondary};
  font-weight: 500;
`;

const Value = styled.Text<{ color: string }>`
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => props.color};
  margin-bottom: 4px;
`;

const Subtitle = styled.Text`
  font-size: 12px;
  color: ${theme.colors.text};
  opacity: 0.6;
`;

export default StatisticsCard;
