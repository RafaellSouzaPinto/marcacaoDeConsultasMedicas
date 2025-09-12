import React from "react";
import Header from "../../components/Header";
import ProfileImagePicker from "../../components/ProfileImagePicker";
import { useEditProfile } from "./hooks/useEditProfile";
import { EditForm } from "./components/EditForm";
import { ActionButtonsEdit } from "./components/ActionButtonsEdit";
import {
  Container,
  Content,
  Title,
  ProfileImageContainer,
  LoadingContainer,
  LoadingText,
} from "./styles";

const EditProfileScreen: React.FC = () => {
  const {
    user,
    name,
    setName,
    email,
    setEmail,
    specialty,
    setSpecialty,
    profileImage,
    loading,
    handleImageSelected,
    handleSaveProfile,
    handleCancel,
    resetForm,
  } = useEditProfile();

  if (loading) {
    return (
      <Container>
        <Header />
        <LoadingContainer>
          <LoadingText>Salvando perfil...</LoadingText>
        </LoadingContainer>
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <Content>
        <Title>Editar Perfil</Title>

        <ProfileImageContainer>
          <ProfileImagePicker
            currentImageUri={profileImage}
            onImageSelected={handleImageSelected}
            size={120}
            editable={true}
          />
        </ProfileImageContainer>

        <EditForm
          user={user}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          specialty={specialty}
          setSpecialty={setSpecialty}
        />

        <ActionButtonsEdit
          loading={loading}
          onSave={handleSaveProfile}
          onCancel={handleCancel}
          onReset={resetForm}
        />
      </Content>
    </Container>
  );
};

export default EditProfileScreen;
