import React from "react";
import GoogleSheetsProvider from "react-db-google-sheets";
import { Home } from "pages";

const App = () => (
  <GoogleSheetsProvider>
    <Home />
  </GoogleSheetsProvider>
);

export default App;
