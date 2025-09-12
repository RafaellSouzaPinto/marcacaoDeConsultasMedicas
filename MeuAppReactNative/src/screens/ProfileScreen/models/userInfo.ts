export const getRoleText = (role: string): string => {
  switch (role) {
    case "admin":
      return "Administrador";
    case "doctor":
      return "Médico";
    case "patient":
      return "Paciente";
    default:
      return role;
  }
};

export const getRoleColor = (role: string): string => {
  switch (role) {
    case "admin":
      return "#ff4757";
    case "doctor":
      return "#2ed573";
    case "patient":
      return "#3742fa";
    default:
      return "#3742fa";
  }
};

export const getSpecialtyDisplay = (user: any): string | null => {
  return user?.role === "doctor" && user?.specialty ? user.specialty : null;
};
