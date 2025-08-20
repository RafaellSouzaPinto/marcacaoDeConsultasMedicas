export default {
  colors: {
    // Apple iOS inspired system colors
    primary: "#007AFF", // systemBlue
    secondary: "#8E8E93", // systemGray
    background: "#F2F2F7", // systemGroupedBackground
    text: "#1C1C1E", // label
    textSecondary: "#6E6E73", // secondaryLabel
    error: "#FF3B30", // systemRed
    success: "#34C759", // systemGreen
    warning: "#FFCC00", // systemYellow
    white: "#FFFFFF",
    border: "#E5E5EA", // separator
    surface: "#FFFFFF",
  },
  typography: {
    title: {
      fontSize: 28,
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: 20,
      fontWeight: "600",
    },
    body: {
      fontSize: 16,
      fontWeight: "400",
    },
    caption: {
      fontSize: 13,
      fontWeight: "400",
    },
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
    xlarge: 32,
  },
  radii: {
    small: 8,
    medium: 12,
    large: 16,
  },
  shadows: {
    // Subtle iOS-like shadow
    card: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 2,
    },
  },
};
