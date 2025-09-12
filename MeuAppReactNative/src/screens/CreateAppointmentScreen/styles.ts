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

export const FormContainer = styled.View`
  margin-bottom: ${theme.spacing.medium}px;
`;

export const ButtonContainer = styled.View`
  margin-top: ${theme.spacing.large}px;
  margin-bottom: ${theme.spacing.medium}px;
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
