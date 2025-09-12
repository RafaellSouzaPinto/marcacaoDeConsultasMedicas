import React from "react";
import { Input } from "react-native-elements";
import { User } from "../../../types/auth";
import theme from "../../../styles/theme";
import { FormContainer, SpecialtyContainer, Label } from "../styles";

interface EditFormProps {
  user: User | null;
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  specialty: string;
  setSpecialty: (specialty: string) => void;
}

export const EditForm: React.FC<EditFormProps> = ({
  user,
  name,
  setName,
  email,
  setEmail,
  specialty,
  setSpecialty,
}) => {
  return (
    <>
      <FormContainer>
        <Input
          label="Nome completo"
          value={name}
          onChangeText={setName}
          placeholder="Digite seu nome"
          inputStyle={{ color: theme.colors.text }}
          labelStyle={{ color: theme.colors.text }}
        />
      </FormContainer>

      <FormContainer>
        <Input
          label="E-mail"
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          inputStyle={{ color: theme.colors.text }}
          labelStyle={{ color: theme.colors.text }}
        />
      </FormContainer>

      {user?.role === "doctor" && (
        <SpecialtyContainer>
          <Label>Especialidade</Label>
          <Input
            value={specialty}
            onChangeText={setSpecialty}
            placeholder="Digite sua especialidade"
            inputStyle={{ color: theme.colors.text }}
          />
        </SpecialtyContainer>
      )}
    </>
  );
};
