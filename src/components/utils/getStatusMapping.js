export default (status) => {
  const statusMap = {
    "WORKING IN LAW ENFORCEMENT": "Working Police Officer",
    "WORKING, NOT IN LAW ENFORCMENT": "Not a Police Officer",
    "WORKING IN LAW ENFORCEMENT, NOT ON PATROL": "Non-Patrol Police Officer ",
    "RETIRED FROM LAW ENFORCEMENT": "Retired as Police Officer",
    TERMINATED: "Terminated",
    "DESK DUTY": "Desk Duty",
    SUSPENDED: "Suspended",
    "SUSPENDED WITHOUT PAY": "Suspended Without Pay",
    "ADMINISTRATIVE LEAVE": "Administrative Leave",
    IMPRISONED: "Imprisoned",
    "RELEASED FROM PRISON": "Released from Prison",
    DECEASED: "Deceased",
    UNKNOWN: "Unknown",
  };

  return statusMap[status] ? statusMap[status] : statusMap["UNKNOWN"];
};
