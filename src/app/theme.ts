"use client";
import { createTheme } from "@mui/material/styles";

export const dark = createTheme({
  palette: {
    primary: {
      main: "#2d8077",
      light: "#C8C8A9",
    },
    secondary: {
      main: "#213547",
      light: "#F9CDAD",
    },
    text: {
      primary: "#F64C72",
      secondary: "#83AF9B",
    },
  },
});

export const light = createTheme({
  palette: {
    primary: {
      main: "#83AF9B",
      light: "#C8C8A9",
    },
    secondary: {
      main: "#f3f3ed",
      light: "#F9CDAD",
    },
    text: {
      primary: "#F64C72",
      secondary: "#83AF9B",
    },
  },
});
