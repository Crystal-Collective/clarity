import React from "react";
import Home from "./../Home";
import About from "./../About";
import { Route } from "react-router-dom";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavigationHeader from "components/NavigationHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    paddingTop: "74px",
  },
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavigationHeader />
      <Box className={classes.content}>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route exact={true} path="/about">
          <About />
        </Route>
      </Box>
    </div>
  );
};

export default Navigation;
