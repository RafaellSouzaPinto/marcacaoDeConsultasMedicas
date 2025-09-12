import React from "react";
import { User } from "../../../types/auth";
import ProfileImagePicker from "../../../components/ProfileImagePicker";
import { getRoleText, getSpecialtyDisplay } from "../models/userInfo";
import {
  ProfileCard,
  Name,
  Email,
  RoleBadge,
  RoleText,
  SpecialtyText,
} from "../styles";

interface UserInfoCardProps {
  user: User | null;
}

export const UserInfoCard: React.FC<UserInfoCardProps> = ({ user }) => {
  if (!user) return null;

  const specialty = getSpecialtyDisplay(user);

  return (
    <ProfileCard>
      <ProfileImagePicker
        currentImageUri={user.image}
        onImageSelected={() => {}} // Read-only na tela de perfil
        size={120}
        editable={false}
      />
      <Name>{user.name}</Name>
      <Email>{user.email}</Email>
      <RoleBadge role={user.role}>
        <RoleText>{getRoleText(user.role)}</RoleText>
      </RoleBadge>
      {specialty && <SpecialtyText>Especialidade: {specialty}</SpecialtyText>}
    </ProfileCard>
  );
};
