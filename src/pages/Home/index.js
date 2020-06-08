import React, { Component } from "react";
import "./index.css";
import CopCardList from "../components/CopCardList";

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
  render() {
    return <CopCardList cops={cops} />;
  }
}

export default Home;
