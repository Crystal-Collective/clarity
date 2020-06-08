import React, { Component } from "react";
import PropTypes from "prop-types";
import { withGoogleSheets } from "react-db-google-sheets";
import CopCardList from "../components/CopCardList";
import "./index.css";

const cops = [
  {
    name: "Derek Chauvin",
    department: "MPD",
    location: "Minneapolis, MN",
    status: "Active",
  },
  {
    name: "Derek Chauvin",
    department: "MPD",
    location: "Minneapolis, MN",
    status: "Active",
  },
  {
    name: "Derek Chauvin",
    department: "MPD",
    location: "Minneapolis, MN",
    status: "Active",
  },
  {
    name: "Derek Chauvin",
    department: "MPD",
    location: "Minneapolis, MN",
    status: "Active",
  },
  {
    name: "Derek Chauvin",
    department: "MPD",
    location: "Minneapolis, MN",
    status: "Active",
  },
  {
    name: "Derek Chauvin",
    department: "MPD",
    location: "Minneapolis, MN",
    status: "Active",
  },
  {
    name: "Derek Chauvin",
    department: "MPD",
    location: "Minneapolis, MN",
    status: "Active",
  },
  {
    name: "Derek Chauvin",
    department: "MPD",
    location: "Minneapolis, MN",
    status: "Active",
  },
];

class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const cops = this.props.db["Charged Officers"].map((data) => ({
      name: data["Officer Name"],
      department: "MPD",
      location: "Minneapolis, MN",
      status: "Active",
    }));

    return <CopCardList cops={cops} />;
  }
}

Home.propTypes = {
  db: PropTypes.shape({
    "Charged Officers": PropTypes.arrayOf(PropTypes.object),
  }),
};

export default withGoogleSheets("Charged Officers")(Home);
