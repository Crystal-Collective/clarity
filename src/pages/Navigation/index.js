import React from "react";
import Home from "./../Home";
import About from "./../About";
import { Route } from "react-router-dom";
import NavigationHeader from "components/NavigationHeader";

const Navigation = () => {
  return (
    <>
      <NavigationHeader />
      <Route exact={true} path="/">
        <Home />
      </Route>
      <Route exact={true} path="/about">
        <About />
      </Route>
    </>
  );
};

export default Navigation;
