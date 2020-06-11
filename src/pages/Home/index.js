import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withGoogleSheets } from "react-db-google-sheets";
import { CopCardList, StateMap, CopDetail } from "components";
import { STATES } from "constants.js";

const yellow = "#fce21b";
const reallyReallyDarkGrey = "#333";

export const TopBar = styled.div`
  position: fixed;
  background-color: black;
  opacity: 0.9;
  height: 74px;
  width: 100%;
  z-index: 98;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  margin: auto;
`;

const Logo = styled.div`
  margin-top: 15px;
  color: ${yellow};
  font-size: 30px;
  font-weight: 800;
`;

const NavButton = styled.div`
  margin-left: 24px;
  margin-top: 24px;
  color: ${yellow};
`;

const About = styled(NavButton)`
  margin-left: auto;
`;

const Feedback = styled(NavButton)``;

const Contribute = styled(NavButton)``;

const Report = styled(NavButton)`
  margin-top: 14px;
  background-color: ${yellow};
  padding: 12px 16px 14px 16px;
`;

const YellowLink = styled.a`
  text-decoration: none;
  font-weight: 700;
  color: ${yellow};
`;

const DarkGreyLink = styled.a`
  text-decoration: none;
  font-weight: 700;
  color: ${reallyReallyDarkGrey};
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
        <TopBar>
          <Header>
            <Logo>
              <YellowLink
                href="https://crystalproject-info.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Crystal"}
              </YellowLink>
            </Logo>
            <About>
              <YellowLink href="">About</YellowLink>
            </About>
            <Contribute>
              <YellowLink
                href="http://docs.google.com/forms/d/e/1FAIpQLScjbFNwXTWvcoYDZNAeVwmhUITq_kjIiri6l4ZsrPXLEEOZ3Q/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contribute
              </YellowLink>
            </Contribute>
            <Feedback>
              <YellowLink
                href="https://trello.com/invite/b/gabFGnhB/5f3c74b8836b960385326e9bf2f92c59/crystal-mvp-feedback-tickets"
                target="_blank"
                rel="noopener noreferrer"
              >
                Feedback
              </YellowLink>
            </Feedback>
            <Report>
              <DarkGreyLink
                href="https://forms.gle/S4ohosYKn6NUQcps8"
                target="_blank"
                rel="noopener noreferrer"
              >
                + Add Report
              </DarkGreyLink>
            </Report>
          </Header>
        </TopBar>
        <Content>
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
        </Content>
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
