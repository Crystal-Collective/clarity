import React, { useState } from "react";
import PropTypes from "prop-types";
import { withGoogleSheets } from "react-db-google-sheets";
import { CopCardList, StateMap, CopDetail } from "components";
import { STATES } from "constants.js";
import { Container, Grid, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mapWrapper: {
    margin: "16px auto 0",
    backgroundColor: theme.palette.white,
    maxWidth: "70%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "74px",
    },
  },
}));

const getChargedOfficerData = (data) => {
  return data.map((incident, i) => {
    return {
      date: parseInt(incident["Year of Incident"], 10)
        ? parseInt(incident["Year of Incident"], 10)
        : null,
      department: incident["Officer-Affiliated Police Department "],
      location:
        incident["City of Incident"] + ", " + incident["State of Incident"],
      chargedOrIndicted: incident["Officers Criminally Charged or Indicted"],
      incidentCount: parseInt(incident["Incident Count"], 10)
        ? parseInt(incident["Incident Count"], 10)
        : null,
      name: incident["Officer Name"],
      state: incident["State of Incident"],
      status: incident["LAST KNOWN STATUS"],
      victim: incident["Victim Name(s)"],
    };
  });
};

const Home = (props) => {
  const classes = useStyles();

  const data = getChargedOfficerData(props.db["Charged Officers"].slice(1));
  const [state, setState] = useState({
    selectedCop: undefined,
  });

  const { selectedCop } = state;

  const initStateDict = STATES.reduce((acc, state) => {
    acc[state] = 0;
    return acc;
  }, {});

  const stateCount = data.reduce((acc, row) => {
    acc[row.state] += 1;
    return acc;
  }, initStateDict);

  return (
    <Container maxWidth="lg">
      <Grid container direction="column" justify="center">
        <Paper elevation={0} className={classes.mapWrapper}>
          <Grid item>
            <StateMap stateCount={stateCount} />
          </Grid>
        </Paper>
        <Grid item>
          <CopCardList
            cops={data}
            onCardClick={() => {
              console.log("clicked");
              setState({ selectedCop });
            }}
          />
          {selectedCop && (
            <CopDetail
              cop={selectedCop}
              allCops={data}
              show={!!selectedCop}
              onClose={() => setState({ selectedCop: undefined })}
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

Home.propTypes = {
  db: PropTypes.shape({
    "Charged Officers": PropTypes.arrayOf(PropTypes.object),
  }),
};

export default withGoogleSheets("Charged Officers")(Home);
