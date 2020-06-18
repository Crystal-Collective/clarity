import React, { Component } from "react";
import styled from "styled-components";
import Home from "./../Home";
import About from "./../About";
import { Route, Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Link as MaterialLink,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const yellow = "#fce21b";
const reallyReallyDarkGrey = "#333";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#181818",
    height: "74px",
  },
  navLink: {
    textDecoration: "none",
    fontWeight: 700,
    color: theme.palette.yellow,
  },
  logoLink: {
    flexGrow: 1,
    marginTop: "15px",
    color: theme.palette.yellow,
    fontSize: "30px",
    fontWeight: 800,
    textDecoration: "none",
  },
}));

const NavButton = styled.div`
  margin-left: 24px;
  margin-top: 24px;
  color: ${yellow};
`;

const AboutNavButton = styled(NavButton)`
  margin-left: auto;
`;

const Feedback = styled(NavButton)``;

const Contribute = styled(NavButton)``;

const Report = styled(NavButton)`
  margin-top: 14px;
  background-color: ${yellow};
  padding: 12px 16px 14px 16px;
`;

const Content = styled.div`
  padding-top: 74px;
`;

const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <MaterialLink
          underline={"none"}
          className={classes.logoLink}
          component={Link}
          to="/"
        >
          Crystal
        </MaterialLink>
        <MaterialLink
          underline={"none"}
          className={classes.navLink}
          component={Link}
          to={"/about"}
        >
          About
        </MaterialLink>
        <MaterialLink
          underline={"none"}
          className={classes.navLink}
          href="https://join.slack.com/t/crystalpolice/shared_invite/zt-essyn1xu-G5CAEuWgvSaZ04iIQ11FCQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discuss on Slack
        </MaterialLink>
        <MaterialLink
          underline={"none"}
          className={classes.navLink}
          href="https://docs.google.com/spreadsheets/d/1_8sFcTwqlBvVgd7XTekIdBGQnMdyAnB5qxuKObwdauw/edit#gid=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Give Feedback
        </MaterialLink>
        <MaterialLink
          underline={"none"}
          className={classes.navLink}
          href="https://forms.gle/S4ohosYKn6NUQcps8"
          target="_blank"
          rel="noopener noreferrer"
        >
          + Add Report
        </MaterialLink>
      </AppBar>
      <Content style={{ flexGrow: "1" }}>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route exact={true} path="/about">
          <About />
        </Route>
      </Content>
    </div>
  );
};

export default Navigation;
