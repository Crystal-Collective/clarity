import React from "react";
import styled from "styled-components";
import { CopCard } from "components";
import { COLORS } from "constants.js";
import { Grid, Paper, makeStyles } from "@material-ui/core";
import { orderBy } from "lodash";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const { yellow, reallyReallyDarkGrey } = COLORS;

const useStyles = makeStyles((theme) => ({
  drawerBackButton: {
    [theme.breakpoints.down("sm")]: {
      display: "block",
      margin: "16px",
    },
    display: "none",
  },
  incidentPaper: {
    padding: "16px",
  },
  incidentRow: {
    padding: "16px 0",
  },
}));

export const Panel = styled.div`
  padding: 64px 32px 32px;
`;

export const Back = styled.div`
  padding-top: 16px;
  color: #000;
  :hover {
    cursor: pointer;
  }
`;

const AddReport = styled.div`
  margin-bottom: 16px;
  margin-left: auto;
  padding: 16px;
  background-color: ${yellow};
`;

const ReportLink = styled.a`
  text-decoration: none;
  color: ${reallyReallyDarkGrey};
  font-weight: 700;
`;

export const Incident = styled.div`
  display: flex;
  flex: 1;
  outline: thin solid;
`;

export const IncidentFieldData = styled.div`
  flex: 1;
  padding: 16px;
`;

function IncidentList(props) {
  const classes = useStyles();

  const { incidents } = props;

  const dateSortedIncidents = orderBy(incidents, ["date"], ["desc"]);
  return (
    <Paper elevation={0} className={classes.incidentPaper}>
      <Grid container item direction="row" justify="space-between">
        <Grid item xs={5}>
          {"INCIDENT"}
        </Grid>
        <Grid item xs={2}>
          {"YEAR"}
        </Grid>
        <Grid item xs={5}>
          {"STATUS"}
        </Grid>
      </Grid>
      {dateSortedIncidents &&
        dateSortedIncidents.map((incident, i) => {
          const { chargedOrIndicted, date, victim } = incident;
          return (
            <Paper elevation={0} className={classes.incidentRow}>
              <Grid
                container
                item
                direction="row"
                justify="space-between"
                key={i}
              >
                <Grid item xs={5}>
                  {victim}
                </Grid>
                <Grid item xs={2}>
                  {date}
                </Grid>
                <Grid item xs={5}>
                  {chargedOrIndicted}
                </Grid>
              </Grid>
            </Paper>
          );
        })}
    </Paper>
  );
}

const getIndictments = (cop, cops) => {
  return cops.filter((singleCop) => {
    return singleCop.name === cop.name;
  });
};

function CopDetail(props) {
  const classes = useStyles();
  const { cop, allCops, onClickBack } = props;

  return (
    <Paper elevation={0}>
      <ArrowBackIcon
        className={classes.drawerBackButton}
        onClick={onClickBack}
      />
      <AddReport>
        <ReportLink
          href="https://forms.gle/S4ohosYKn6NUQcps8"
          target="_blank"
          rel="noopener noreferrer"
        >
          + Add Report
        </ReportLink>
      </AddReport>
      <CopCard cop={cop} inline={true} disableClick />
      <IncidentList incidents={getIndictments(cop, allCops)} />
    </Paper>
  );
}

export default CopDetail;
