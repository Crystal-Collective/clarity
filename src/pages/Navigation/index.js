import React, { Component } from "react";
import clsx from "clsx";
import styled from "styled-components";
import Home from "./../Home";
import About from "./../About";
import { Route, Link } from "react-router-dom";
import { AppBar, Box, Grid, Link as MaterialLink } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#181818",
    height: "74px",
  },
  content: {
    flexGrow: 1,
    paddingTop: "74px",
  },
  logoLink: {
    flexGrow: 1,
    color: theme.palette.yellow,
    fontSize: "30px",
    fontWeight: 800,
    textDecoration: "none",
  },
  logoWrapper: {
    marginTop: "12px",
  },
  navLink: {
    textDecoration: "none",
    fontWeight: 700,
    color: theme.palette.yellow,
  },
  navLinkWrapper: {
    marginTop: "24px",
  },
  navLinkReport: {
    color: theme.palette.reallyReallyDarkGrey,
    backgroundColor: theme.palette.yellow,
    padding: "12px 16px 12px 16px",
  },
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Box className={classes.logoWrapper}>
              <MaterialLink
                underline={"none"}
                className={classes.logoLink}
                component={Link}
                to="/"
              >
                Crystal
              </MaterialLink>
            </Box>
          </Grid>
          <Grid item xs>
            <Box className={classes.navLinkWrapper}>
              <MaterialLink
                underline={"none"}
                className={classes.navLink}
                component={Link}
                to={"/about"}
              >
                About
              </MaterialLink>
            </Box>
          </Grid>
          <Grid item xs>
            <Box className={classes.navLinkWrapper}>
              <MaterialLink
                underline={"none"}
                className={classes.navLink}
                href="https://join.slack.com/t/crystalpolice/shared_invite/zt-essyn1xu-G5CAEuWgvSaZ04iIQ11FCQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discuss on Slack
              </MaterialLink>
            </Box>
          </Grid>
          <Grid item xs>
            <Box className={classes.navLinkWrapper}>
              <MaterialLink
                underline={"none"}
                className={classes.navLink}
                href="https://docs.google.com/spreadsheets/d/1_8sFcTwqlBvVgd7XTekIdBGQnMdyAnB5qxuKObwdauw/edit#gid=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Give Feedback
              </MaterialLink>
            </Box>
          </Grid>
          <Grid item xs>
            <Box className={clsx(classes.navLinkWrapper, classes.reportBox)}>
              <MaterialLink
                underline={"none"}
                className={clsx(classes.navLink, classes.navLinkReport)}
                href="https://forms.gle/S4ohosYKn6NUQcps8"
                target="_blank"
                rel="noopener noreferrer"
              >
                + Add Report
              </MaterialLink>
            </Box>
          </Grid>
        </Grid>
      </AppBar>
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
