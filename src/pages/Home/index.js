import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withGoogleSheets } from "react-db-google-sheets";
import { CopCardList } from "components";
import MapChart from "./MapChart";
import { ReactSVG } from "react-svg";
import blmLogo from "images/blm.svg";

export const TopBar = styled.div`
  position: fixed;
  background-color: black;
  opacity: 0.9;
  height: 74px;
  width: 100%;
  z-index: 99;
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

class Home extends Component {
  render() {
    const cops = this.props.db["Charged Officers"].map((data) => ({
      name: data["Officer Name"],
      department: data["Officer-Affiliated Police Department "],
      location: data["City of Incident"] + ", " + data["State of Incident"],
      incidents: "--",
      state: data["State of Incident"],
      status: "Unknown",
      year: parseInt(data["Year of Incident"], 10)
        ? parseInt(data["Year of Incident"], 10)
        : null,
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
        <MapChart />
        <CopCardList cops={cops} />
      </div>
    );
  }
}

Home.propTypes = {
  db: PropTypes.shape({
    "Charged Officers": PropTypes.arrayOf(PropTypes.object),
  }),
};

export default withGoogleSheets("Charged Officers")(Home);
