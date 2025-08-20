import React from "react";
import styled from "styled-components/native";
import { Avatar } from "react-native-elements";
import { useAuth } from "../contexts/AuthContext";
import NotificationBell from "./NotificationBell";
import theme from "../styles/theme";
import { SafeAreaView } from "react-native-safe-area-context";

export const HeaderContainer = styled.View`
  background-color: ${theme.colors.background};
  padding: 12px 16px 8px 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.border};
`;

export const HeaderTitle = styled.Text`
  font-size: ${theme.typography.title.fontSize}px;
  font-weight: ${theme.typography.title.fontWeight};
  color: ${theme.colors.text};
`;

const Header: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <SafeArea>
      <Container>
        <UserInfo>
          <Avatar
            size="medium"
            rounded
            source={{ uri: user.image }}
            containerStyle={styles.avatar}
          />
          <TextContainer>
            <WelcomeText>Bem-vindo(a),</WelcomeText>
            <UserName>{user.name}</UserName>
          </TextContainer>
        </UserInfo>
        <NotificationBell />
      </Container>
    </SafeArea>
  );
};

const styles = {
  avatar: {
    backgroundColor: theme.colors.primary,
  },
};

const SafeArea = styled(SafeAreaView)`
  background-color: ${theme.colors.surface};
`;

const Container = styled.View`
  background-color: ${theme.colors.surface};
  padding: 12px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.border};
`;

const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TextContainer = styled.View`
  margin-left: 12px;
`;

const WelcomeText = styled.Text`
  font-size: 13px;
  color: ${theme.colors.textSecondary};
`;

const UserName = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.colors.text};
`;

export default Header;
