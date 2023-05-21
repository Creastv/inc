import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "@mui/material/styles";
import style from "./providers/style";
import CssBaseline from "@mui/material/CssBaseline";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <ThemeProvider theme={style}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </React.Fragment>
);
