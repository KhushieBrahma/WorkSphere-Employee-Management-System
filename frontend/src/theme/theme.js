import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#0f172a",
    },
    success: {
      main: "#16a34a",
    },
    error: {
      main: "#dc2626",
    },
    background: {
      default: "#f5f7fb",
    },
  },

  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
  },

  shape: {
    borderRadius: 10,
  },
});

export default theme;