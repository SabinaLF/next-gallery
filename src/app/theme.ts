'use client'
import { createTheme } from '@mui/material/styles'

export const dark = createTheme({
  palette: {
    primary: {
      main: '#7c7566',
      light: '#ccc9bc',
    },
    secondary: {
      main: '#564A4E',
      light: '#f06060',
    },
    text: {
      primary: '#d9d6d1',
      secondary: '#f06060',
    },
  },
})
