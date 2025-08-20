import React from "react";
import { AuthProvider } from "./src/contexts/AuthContext";
import { AppNavigator } from "./src/navigation/AppNavigator";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/styles/theme";
import { StatusBar } from "react-native";
import { ThemeProvider as ElementsThemeProvider } from "react-native-elements";

export default function App() {
  const elementsTheme = {
    colors: {
      primary: theme.colors.primary,
      secondary: theme.colors.secondary,
      greyOutline: theme.colors.border,
      grey0: theme.colors.background,
      black: theme.colors.text,
      white: theme.colors.white,
      success: theme.colors.success,
      error: theme.colors.error,
      warning: theme.colors.warning,
    },
    Button: {
      buttonStyle: {
        backgroundColor: theme.colors.primary,
        borderRadius: theme.radii.medium,
        paddingVertical: 14,
        paddingHorizontal: 16,
      },
      titleStyle: {
        fontWeight: "600",
        fontSize: 16,
      },
      containerStyle: {
        borderRadius: theme.radii.medium,
      },
    },
    Input: {
      containerStyle: {
        paddingHorizontal: 0,
      },
      inputContainerStyle: {
        backgroundColor: theme.colors.surface,
        borderRadius: theme.radii.medium,
        borderWidth: 1,
        borderColor: theme.colors.border,
        paddingHorizontal: 12,
        paddingVertical: 4,
      },
      inputStyle: {
        color: theme.colors.text,
        fontSize: theme.typography.body.fontSize,
      },
      placeholderTextColor: theme.colors.textSecondary,
      labelStyle: {
        color: theme.colors.textSecondary,
        marginBottom: 6,
      },
    },
    ListItem: {
      containerStyle: {
        backgroundColor: theme.colors.surface,
        borderRadius: theme.radii.medium,
        borderWidth: 1,
        borderColor: theme.colors.border,
      },
    },
    Badge: {
      textStyle: { fontWeight: "700" },
    },
  } as const;
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ElementsThemeProvider theme={elementsTheme}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={theme.colors.background}
          />
          <AppNavigator />
        </ElementsThemeProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
