import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Grid,
  Link as MaterialLink,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.black,
    height: "74px",
  },
  hamburgerIcon: {
    color: theme.palette.yellow,
  },
  hamburgerLink: {
    color: theme.palette.reallyReallyDarkGrey,
    width: "100%",
    height: "100%",
  },
  hamburgerMenu: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
    display: "none",
  },
  hamburgerMenuWrapper: {
    marginTop: "16px",
  },
  headerContainer: {
    width: "80%",
    margin: "0 auto",
  },
  inlineMenuItems: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
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
    flexGrow: 1,
  },
  navLink: {
    textDecoration: "none",
    fontWeight: 700,
    color: theme.palette.yellow,
  },
  navLinkWrapper: {
    marginTop: "24px",
    textAlign: "center",
  },
  navLinkReport: {
    color: theme.palette.reallyReallyDarkGrey,
    backgroundColor: theme.palette.yellow,
    padding: "12px 16px 12px 16px",
  },
}));

const NavigationHeader = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Box className={classes.headerContainer}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
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
          <Grid
            item
            container
            xs
            direction="row"
            className={classes.inlineMenuItems}
            justify="space-between"
            alignItems="center"
          >
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
          <Grid
            item
            container
            xs
            className={classes.hamburgerMenu}
            justify="flex-end"
          >
            <Box className={classes.hamburgerMenuWrapper}>
              <MenuIcon
                fontSize={"large"}
                className={classes.hamburgerIcon}
                onClick={handleClick}
              />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <MaterialLink
                    underline={"none"}
                    className={classes.hamburgerLink}
                    component={Link}
                    to={"/about"}
                  >
                    <div>About</div>
                  </MaterialLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <MaterialLink
                    underline={"none"}
                    className={classes.hamburgerLink}
                    href="https://join.slack.com/t/crystalpolice/shared_invite/zt-essyn1xu-G5CAEuWgvSaZ04iIQ11FCQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discuss on Slack
                  </MaterialLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <MaterialLink
                    underline={"none"}
                    className={classes.hamburgerLink}
                    href="https://docs.google.com/spreadsheets/d/1_8sFcTwqlBvVgd7XTekIdBGQnMdyAnB5qxuKObwdauw/edit#gid=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Give Feedback
                  </MaterialLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <MaterialLink
                    underline={"none"}
                    className={clsx(
                      classes.hamburgerLink,
                      classes.navLinkReport
                    )}
                    href="https://forms.gle/S4ohosYKn6NUQcps8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    + Add Report
                  </MaterialLink>
                </MenuItem>
              </Menu>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </AppBar>
  );
};

export default NavigationHeader;
