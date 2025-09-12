// src/screens/SettingsScreen/styles.ts
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import theme from "../../styles/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Content = styled(ScrollView)`
  flex: 1;
  padding: ${theme.spacing.medium}px;
`;

export const Title = styled.Text`
  font-size: ${theme.typography.title.fontSize}px;
  font-weight: ${theme.typography.title.fontWeight};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.large}px;
  text-align: center;
`;

export const Section = styled.View`
  margin-bottom: ${theme.spacing.large}px;
`;

export const SectionTitle = styled.Text`
  font-size: ${theme.typography.subtitle.fontSize}px;
  font-weight: ${theme.typography.subtitle.fontWeight};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.medium}px;
`;

export const SettingCard = styled.View`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  padding: ${theme.spacing.medium}px;
  margin-bottom: ${theme.spacing.small}px;
  elevation: 1;
  shadow-color: #000;
  shadow-opacity: 0.05;
  shadow-radius: 2px;
  shadow-offset: 0px 1px;
`;

export const SettingRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.small}px 0;
`;

export const SettingLabel = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.text};
  flex: 1;
`;

export const SettingValue = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.primary};
  margin-left: ${theme.spacing.small}px;
`;

export const StorageInfo = styled.View`
  background-color: ${theme.colors.primary + "10"};
  border-radius: 8px;
  padding: ${theme.spacing.medium}px;
  margin-bottom: ${theme.spacing.medium}px;
`;

export const StorageText = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.small}px;
`;

export const StorageHighlight = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.primary};
  font-weight: 600;
`;

export const ButtonContainer = styled.View`
  margin-top: ${theme.spacing.medium}px;
  margin-bottom: ${theme.spacing.small}px;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.Text`
  margin-top: ${theme.spacing.medium}px;
  color: ${theme.colors.text};
  font-size: ${theme.typography.body.fontSize}px;
`;

export const AppVersion = styled.Text`
  font-size: ${theme.typography.caption.fontSize}px;
  color: ${theme.colors.textSecondary};
  text-align: center;
  margin-top: ${theme.spacing.large}px;
  opacity: 0.7;
`;
