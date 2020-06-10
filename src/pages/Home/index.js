import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withGoogleSheets } from "react-db-google-sheets";
import { CopCardList, StateMap, CopPanel } from "components";
import { ReactSVG } from "react-svg";
import { STATES } from "constants.js";
import report from "images/report.svg";

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
  color: #fce21b;
  font-size: 30px;
  font-weight: 800;
`;

export const Report = styled.div`
  right: 500px;
  top: 24px;
  position: fixed;
`;

const Content = styled.div`
  padding-top: 85px;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedCop: undefined };
    this.handleCopCardClicked = this.handleCopCardClicked.bind(this);
    this.handleCopPanelClosed = this.handleCopPanelClosed.bind(this);
  }

  render() {
    const initStateDict = STATES.reduce((acc, state) => {
      acc[state] = 0;
      return acc;
    }, {});

    // Remove the first row in the table that is holding instructions
    // https://docs.google.com/spreadsheets/d/14eyaLbQEIq3_ZKQCSHSLoyspo8Y4PoGnoW6LLfwNTmE/edit?pli=1#gid=1387748258
    const chargedOfficerData = this.props.db["Charged Officers"].slice(1);

    const stateCount = chargedOfficerData.reduce((acc, row) => {
      acc[row["State of Incident"]] += 1;
      return acc;
    }, initStateDict);

    const cops = this.props.db["Charged Officers"].map((data) => ({
      date: parseInt(data["Year of Incident"], 10)
        ? parseInt(data["Year of Incident"], 10)
        : null,
      department: data["Officer-Affiliated Police Department "],
      location: data["City of Incident"] + ", " + data["State of Incident"],
      incidents: "--",
      name: data["Officer Name"],
      state: data["State of Incident"],
      status: data["LAST KNOWN STATUS"],
      victim:
        data[
          "Victim Name(s)  (Separate with commas if multiple), use colloquial version for name. So Freddie Gray instead of Freddie Carlos Gray Jr."
        ],
    }));

    return (
      <div align="center">
        <TopBar>
          <Logo>{"Crystal"}</Logo>
          <Report>
            <a
              href="https://forms.gle/S4ohosYKn6NUQcps8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ReactSVG src={report} />
            </a>
          </Report>
        </TopBar>
        <Content>
          <StateMap stateCount={stateCount} />
          <CopCardList cops={cops} onCardClick={this.handleCopCardClicked} />
          {this.state.selectedCop && (
            <CopPanel
              cop={this.state.selectedCop}
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
