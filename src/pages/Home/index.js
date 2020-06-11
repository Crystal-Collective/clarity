import React, { Component } from "react";
import PropTypes from "prop-types";
import { withGoogleSheets } from "react-db-google-sheets";
import { CopCardList, StateMap, CopDetail } from "components";
import { STATES } from "constants.js";

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
      incidentCount: parseInt(incident["Incident Count"], 10),
      name: incident["Officer Name"],
      state: incident["State of Incident"],
      status: incident["LAST KNOWN STATUS"],
      victim: incident["Victim Name(s)"],
    };
  });
};
class Home extends Component {
  constructor(props) {
    super(props);
    // Remove the first row in the table that is holding instructions
    // https://docs.google.com/spreadsheets/d/14eyaLbQEIq3_ZKQCSHSLoyspo8Y4PoGnoW6LLfwNTmE/edit?pli=1#gid=1387748258
    this.state = {
      selectedCop: undefined,
      data: getChargedOfficerData(props.db["Charged Officers"].slice(1)),
    };
    this.handleCopCardClicked = this.handleCopCardClicked.bind(this);
    this.handleCopDetailClosed = this.handleCopDetailClosed.bind(this);
  }

  render() {
    const { data } = this.state;
    const initStateDict = STATES.reduce((acc, state) => {
      acc[state] = 0;
      return acc;
    }, {});

    const stateCount = data.reduce((acc, row) => {
      acc[row.state] += 1;
      return acc;
    }, initStateDict);

    return (
      <div align="center">
        <StateMap stateCount={stateCount} />
        <CopCardList cops={data} onCardClick={this.handleCopCardClicked} />
        {this.state.selectedCop && (
          <CopDetail
            cop={this.state.selectedCop}
            allCops={data}
            show={this.state.showPanel}
            onClose={this.handleCopDetailClosed}
          />
        )}
      </div>
    );
  }
  handleCopCardClicked(cop) {
    this.setState({ selectedCop: cop });
  }
  handleCopDetailClosed() {
    this.setState({ selectedCop: undefined });
  }
}

Home.propTypes = {
  db: PropTypes.shape({
    "Charged Officers": PropTypes.arrayOf(PropTypes.object),
  }),
};

export default withGoogleSheets("Charged Officers")(Home);
