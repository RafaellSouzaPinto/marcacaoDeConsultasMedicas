import React from "react";
import Header from "../../components/Header";
import { useProfile } from "./hooks/useProfile";
import { UserInfoCard } from "./components/UserInfoCard";
import { ActionButtons } from "./components/ActionButtons";
import { Container, Content, Title } from "./styles";

const ProfileScreen: React.FC = () => {
  const {
    user,
    handleEditProfile,
    handleViewNotifications,
    handleSettings,
    handleSignOut,
    navigateToHome,
    navigateToDashboard,
  } = useProfile();

  return (
    <Container>
      <Header />
      <Content>
        <Title>Meu Perfil</Title>

        <UserInfoCard user={user} />

        <ActionButtons
          onEditProfile={handleEditProfile}
          onViewNotifications={handleViewNotifications}
          onSettings={handleSettings}
          onNavigateToHome={navigateToHome}
          onNavigateToDashboard={navigateToDashboard}
          onSignOut={handleSignOut}
        />
      </Content>
    </Container>
  );
};

export default ProfileScreen;
