import React from "react";
import GoogleSheetsProvider from "react-db-google-sheets";
import { Navigation } from "pages";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "./theme";

const App = () => (
  <GoogleSheetsProvider>
    <Router style={{ height: "100%" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation style={{ height: "100%" }} />
      </ThemeProvider>
    </Router>
  </GoogleSheetsProvider>
);

export default App;
