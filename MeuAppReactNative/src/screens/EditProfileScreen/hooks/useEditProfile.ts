import { useState } from "react";
import { Alert } from "react-native";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/navigation";
import { imageService } from "../../../services/imageService";
import AsyncStorage from "@react-native-async-storage/async-storage";

type EditProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "EditProfile"
>;

export const useEditProfile = () => {
  const { user, updateUser } = useAuth();
  const navigation = useNavigation<EditProfileScreenNavigationProp>();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [specialty, setSpecialty] = useState((user as any)?.specialty || "");
  const [profileImage, setProfileImage] = useState(user?.image || "");
  const [loading, setLoading] = useState(false);

  const handleImageSelected = async (imageUri: string) => {
    try {
      setProfileImage(imageUri);

      // Salva a imagem no armazenamento local se for uma nova imagem
      if (imageUri.startsWith("data:image/") && user?.id) {
        const savedImageUri = await imageService.saveProfileImage(user.id, {
          uri: imageUri,
          base64: imageUri.split(",")[1],
          width: 150,
          height: 150,
        });
        setProfileImage(savedImageUri);
      }
    } catch (error) {
      console.error("Erro ao processar imagem:", error);
      Alert.alert("Erro", "Não foi possível processar a imagem selecionada");
    }
  };

  const validateForm = (): boolean => {
    if (!name.trim()) {
      Alert.alert("Erro", "Nome é obrigatório");
      return false;
    }

    if (!email.trim()) {
      Alert.alert("Erro", "E-mail é obrigatório");
      return false;
    }

    if (user?.role === "doctor" && !specialty.trim()) {
      Alert.alert("Erro", "Especialidade é obrigatória para médicos");
      return false;
    }

    return true;
  };

  const handleSaveProfile = async (): Promise<boolean> => {
    if (!validateForm()) {
      return false;
    }

    if (!user) {
      Alert.alert("Erro", "Usuário não encontrado");
      return false;
    }

    setLoading(true);
    try {
      const updatedUser = {
        ...user,
        name: name.trim(),
        email: email.trim(),
        image: profileImage,
        ...(user.role === "doctor" && { specialty: specialty.trim() }),
      };

      // Atualizar no AsyncStorage
      const allUsers = await AsyncStorage.getItem("@MedicalApp:users");
      if (allUsers) {
        const users = JSON.parse(allUsers);
        const userIndex = users.findIndex((u: any) => u.id === user.id);
        if (userIndex !== -1) {
          users[userIndex] = updatedUser;
          await AsyncStorage.setItem(
            "@MedicalApp:users",
            JSON.stringify(users)
          );
        }
      }

      // Atualizar contexto
      await updateUser(updatedUser);

      Alert.alert("Sucesso", "Perfil atualizado com sucesso!");
      return true;
    } catch (error) {
      console.error("Erro ao salvar perfil:", error);
      Alert.alert("Erro", "Não foi possível salvar o perfil");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const resetForm = () => {
    setName(user?.name || "");
    setEmail(user?.email || "");
    setSpecialty((user as any)?.specialty || "");
    setProfileImage(user?.image || "");
  };

  return {
    user,
    name,
    setName,
    email,
    setEmail,
    specialty,
    setSpecialty,
    profileImage,
    setProfileImage,
    loading,
    handleImageSelected,
    handleSaveProfile,
    handleCancel,
    resetForm,
  };
};
