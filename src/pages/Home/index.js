import React, { Component } from "react";
import PropTypes from "prop-types";
import { withGoogleSheets } from "react-db-google-sheets";
import CopCardList from "../components/CopCardList";
import MapChart from "./MapChart";
import styled from "styled-components";
import "./index.css";

export const TopBar = styled.div`
  position: fixed;
  background-color: black;
  opacity: 0.9;
  height: 75px;
  width: 100%;
  z-index: 99;
`;

export const Logo = styled.div`
  left: 200px;
  top: 20px;
  position: fixed;
  color: #fce21b;
  font-size: 30px;
  font-weight: 800;
`;

export const Summary = styled.div`
  color: #aaa;
  font-size: 22px;
  margin-bottom: 16px;
`;

class Home extends Component {
  render() {
    const cops = this.props.db["Charged Officers"].map((data) => ({
      name: data["Officer Name"],
      department: data["Officer-Affiliated Police Department "],
      location: data["City of Incident"] + ", " + data["State of Incident"],
      incidents: "--",
      status: "Unknown",
    }));

    return (
      <div align="center">
        <TopBar>
          <Logo>{"Crystal"}</Logo>
        </TopBar>
        <MapChart />
        <Summary>{cops.length + " results"}</Summary>
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
