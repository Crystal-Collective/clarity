import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withGoogleSheets } from "react-db-google-sheets";
import { CopCardList, StateMap, CopPanel } from "components";
import { STATES } from "constants.js";

const yellow = "#fce21b";

export const TopBar = styled.div`
  position: fixed;
  background-color: black;
  opacity: 0.9;
  height: 74px;
  width: 100%;
  z-index: 98;
`;

export const Logo = styled.div`
  left: 300px;
  top: 20px;
  position: fixed;
  color: ${yellow};
  font-size: 30px;
  font-weight: 800;
`;

const Report = styled.div`
  right: 700px;
  top: 24px;
  position: fixed;
`;

const Volunteer = styled.div`
  right: 500px;
  top: 24px;
  position: fixed;
  color: ${yellow};
`;

const Link = styled.a`
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  color: ${yellow};
`;

const Content = styled.div`
  padding-top: 85px;
`;

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
    this.handleCopPanelClosed = this.handleCopPanelClosed.bind(this);
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
        <TopBar>
          <Logo>{"Crystal"}</Logo>
          <Report>
            <Link
              href="https://forms.gle/S4ohosYKn6NUQcps8"
              target="_blank"
              rel="noopener noreferrer"
            >
              + REPORT
            </Link>
          </Report>
          <Volunteer>
            <Link
              href="https://forms.gle/qD7MHiMiV35kZDvX7"
              target="_blank"
              rel="noopener noreferrer"
            >
              VOLUNTEER
            </Link>
          </Volunteer>
        </TopBar>
        <Content>
          <StateMap stateCount={stateCount} />
          <CopCardList cops={data} onCardClick={this.handleCopCardClicked} />
          {this.state.selectedCop && (
            <CopPanel
              cop={this.state.selectedCop}
              allCops={data}
              show={this.state.showPanel}
              onClose={this.handleCopPanelClosed}
            />
          )}
        </Content>
      </div>
    );
  }
  handleCopCardClicked(cop) {
    this.setState({ selectedCop: cop });
  }
  handleCopPanelClosed() {
    this.setState({ selectedCop: undefined });
  }
}

Home.propTypes = {
  db: PropTypes.shape({
    "Charged Officers": PropTypes.arrayOf(PropTypes.object),
  }),
};

export default withGoogleSheets("Charged Officers")(Home);
