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

export const ProfileCard = styled.View`
  background-color: ${theme.colors.white};
  border-radius: 12px;
  padding: ${theme.spacing.large}px;
  align-items: center;
  margin-bottom: ${theme.spacing.large}px;
  elevation: 2;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  shadow-offset: 0px 2px;
`;

export const Name = styled.Text`
  font-size: ${theme.typography.title.fontSize}px;
  font-weight: ${theme.typography.title.fontWeight};
  color: ${theme.colors.text};
  margin-top: ${theme.spacing.medium}px;
  text-align: center;
`;

export const Email = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.primary};
  margin-top: ${theme.spacing.small}px;
  text-align: center;
`;

export const RoleBadge = styled.View<{ role: string }>`
  background-color: ${(props: { role: string }) => {
    switch (props.role) {
      case "admin":
        return theme.colors.error + "20";
      case "doctor":
        return theme.colors.success + "20";
      case "patient":
        return theme.colors.primary + "20";
      default:
        return theme.colors.primary + "20";
    }
  }};
  padding: ${theme.spacing.small}px ${theme.spacing.medium}px;
  border-radius: 20px;
  margin-top: ${theme.spacing.medium}px;
`;

export const RoleText = styled.Text`
  color: ${theme.colors.text};
  font-size: ${theme.typography.body.fontSize}px;
  font-weight: 600;
`;

export const SpecialtyText = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.secondary};
  margin-top: ${theme.spacing.small}px;
  text-align: center;
  font-style: italic;
`;

export const ButtonContainer = styled.View`
  margin-bottom: ${theme.spacing.medium}px;
`;

export const ActionList = styled.View`
  margin-top: ${theme.spacing.medium}px;
`;
