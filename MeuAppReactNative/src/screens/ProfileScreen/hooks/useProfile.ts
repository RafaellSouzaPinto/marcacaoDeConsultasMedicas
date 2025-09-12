import { useAuth } from "../../../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/navigation";

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Profile"
>;

export const useProfile = () => {
  const { user, signOut } = useAuth();
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const handleEditProfile = () => {
    navigation.navigate("EditProfile");
  };

  const handleViewNotifications = () => {
    navigation.navigate("Notifications");
  };

  const handleSettings = () => {
    navigation.navigate("Settings");
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  const navigateToDashboard = () => {
    if (user?.role === "admin") {
      navigation.navigate("AdminDashboard");
    } else if (user?.role === "doctor") {
      navigation.navigate("DoctorDashboard");
    } else if (user?.role === "patient") {
      navigation.navigate("PatientDashboard");
    }
  };

  return {
    user,
    handleEditProfile,
    handleViewNotifications,
    handleSettings,
    handleSignOut,
    navigateToHome,
    navigateToDashboard,
  };
};
