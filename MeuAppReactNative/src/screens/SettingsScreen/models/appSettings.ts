// src/screens/SettingsScreen/models/appSettings.ts
export interface AppSettings {
  notifications: boolean;
  autoBackup: boolean;
  theme: "light" | "dark";
  language: string;
}

export const defaultSettings: AppSettings = {
  notifications: true,
  autoBackup: true,
  theme: "light",
  language: "pt-BR",
};

export const getLanguageDisplay = (language: string): string => {
  switch (language) {
    case "pt-BR":
      return "Português (Brasil)";
    case "en-US":
      return "English (US)";
    case "es-ES":
      return "Español";
    default:
      return "Português (Brasil)";
  }
};

export const getThemeDisplay = (theme: string): string => {
  switch (theme) {
    case "light":
      return "Claro";
    case "dark":
      return "Escuro";
    default:
      return "Claro";
  }
};

export const formatStorageSize = (bytes: number): string => {
  if (bytes === 0) return "0 B";

  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};
