import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withGoogleSheets } from "react-db-google-sheets";
import { CopCardList, StateMap, CopPanel } from "components";
import { ReactSVG } from "react-svg";
import { STATES } from "constants.js";
import blmLogo from "images/blm.svg";

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

export const BLM = styled.div`
  right: 300px;
  top: 0px;
  position: fixed;
`;

export const Summary = styled.div`
  color: #aaa;
  font-size: 22px;
  margin-bottom: 16px;
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

    const stateCount = this.props.db["Charged Officers"].reduce((acc, row) => {
      acc[row["State of Incident"]] += 1;
      return acc;
    }, initStateDict);

    const cops = this.props.db["Charged Officers"].map((data) => ({
      name: data["Officer Name"],
      department: data["Officer-Affiliated Police Department "],
      location: data["City of Incident"] + ", " + data["State of Incident"],
      incidents: "--",
      status: "Unknown",
      victim:
        data[
          "Victim Name(s)  (Separate with commas if multiple), use colloquial version for name. So Freddie Gray instead of Freddie Carlos Gray Jr."
        ],
      date: data["Year of Incident"],
    }));

    return (
      <div align="center">
        <TopBar>
          <Logo>{"Crystal"}</Logo>
          <BLM>
            <a href="https://blacklivesmatter.com/">
              <ReactSVG src={blmLogo} />
            </a>
          </BLM>
        </TopBar>
        <StateMap stateCount={stateCount} />
        <Summary>{cops.length + " results"}</Summary>
        <CopCardList cops={cops} onCardClick={this.handleCopCardClicked} />
        {this.state.selectedCop && (
          <CopPanel
            cop={this.state.selectedCop}
            show={this.state.showPanel}
            onClose={this.handleCopPanelClosed}
          />
        )}
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
