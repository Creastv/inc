import { createTheme } from "@mui/material/styles";

const style = createTheme({
  palette: {
    primary: {
      main: "#764EBE"
    },
    secondary: {
      main: "#0044ff"
    },
    black: {
      main: "#000"
    }
  },
  typography: {
    fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
    body: {
      fontWeight: 300
    },
    h1: {
      fontSize: 31,
      fontWeight: 800
    },
    h2: {
      fontWeight: 800
    },
    h3: {
      fontWeight: 800
    },
    h4: {
      fontWeight: 800
    }
  }
});

export default style;
