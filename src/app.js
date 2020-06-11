import React from "react";
import GoogleSheetsProvider from "react-db-google-sheets";
import { Navigation } from "pages";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
  <GoogleSheetsProvider>
    <Router style={{ height: "100%" }}>
      <Navigation style={{ height: "100%" }} />
    </Router>
  </GoogleSheetsProvider>
);

export default App;
