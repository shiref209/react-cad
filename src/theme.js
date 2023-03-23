import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          margin:'5px 10px',
          padding:'0 10px',
          borderRadius:'15px',
          '&:hover': {
            background:"linear-gradient(102.92deg, #1B004E 16.54%, #72068F 65.06%, #4E0E8B 85.68%)", 
            color:"#FFFFFF"
          },
        },
      },
    },
  },
  palette: {
  //   action: {
  //     selected: '#E7A615',
  //     hover: '#FFD371',
  //     disabled: '#9B9B9B'
  // },
    primary: {
      main: "#1C0050",
      light: "#C637A0",
      dark: "#1C0051",
      accent:"#1B004F"
    },
    secondary: {
      main: "#FFFFFF",
      dark:"#F5F5F5"
    },
    accentOrange: {
      main: "#FF717D",
      light:'#FF887D'
    },
    gradient: {
      main: "linear-gradient(102.92deg, #1B004E 16.54%, #72068F 65.06%, #4E0E8B 85.68%)",
    },
  },
  typography: {
    fontFamily: ["Khula", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Khula", "sans-serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["Khula", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["Khula", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["Khula", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["Khula", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Khula", "sans-serif"].join(","),
      fontSize: 14,
    },
    body1: {
      fontFamily: ["Khula", "sans-serif"].join(","),
      fontSize: 16,
    },
    body2: {
      fontFamily: ["Khula", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});
