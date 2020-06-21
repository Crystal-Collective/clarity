import React from "react";
import styled from "styled-components";
import { CopCard } from "components";
import { COLORS } from "constants.js";

const { yellow, reallyReallyDarkGrey } = COLORS;

export const PanelContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 680px;
  transform: ${(props) => (props.show ? "translateX(0%)" : "translateX(100%)")};
  box-shadow: 0px 1.408px 21.12px rgba(52, 32, 1, 0.12);
  z-index: 99;
  background: #fff;
`;

export const Panel = styled.div`
  padding: 64px 32px 32px;
`;

const PanelHeader = styled.div`
  display: flex;
`;

export const Back = styled.div`
  padding-top: 16px;
  color: #000;
  :hover {
    cursor: pointer;
  }
`;

const AddReport = styled.div`
  margin-left: auto;
  padding: 16px;
  background-color: ${yellow};
`;

const ReportLink = styled.a`
  text-decoration: none;
  color: ${reallyReallyDarkGrey};
  font-weight: 700;
`;

export const PanelBody = styled.div`
  text-align: left;
`;

const Incidents = styled.div`
  display: flex;
  margin-top: 32px;
  font-weight: 500;
  font-size: 14px;
  flex-direction: column;
`;

const IncidentHeader = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-bottom: 16px;
`;

const IncidentFieldHeader = styled.div`
  flex: 1;
  padding-left: 16px;
  color: #9c9c9c;
`;

export const Incident = styled.div`
  display: flex;
  flex: 1;
  outline: thin solid;
`;

export const IncidentFieldData = styled.div`
  flex: 1;
  padding: 16px;
`;

function IncidentList(props) {
  const { incidents } = props;
  return (
    <Incidents>
      <IncidentHeader>
        <IncidentFieldHeader>{"INCIDENT"}</IncidentFieldHeader>
        <IncidentFieldHeader>{"YEAR"}</IncidentFieldHeader>
        <IncidentFieldHeader>{"STATUS"}</IncidentFieldHeader>
      </IncidentHeader>
      {incidents &&
        incidents.map((incident, i) => {
          const { chargedOrIndicted, date, victim } = incident;
          return (
            <Incident key={i}>
              <IncidentFieldData>{victim}</IncidentFieldData>
              <IncidentFieldData>{date}</IncidentFieldData>
              <IncidentFieldData>{chargedOrIndicted}</IncidentFieldData>
            </Incident>
          );
        })}
    </Incidents>
  );
}

const getIndictments = (cop, cops) => {
  return cops.filter((singleCop) => {
    return singleCop.name === cop.name;
  });
};

function CopDetail(props) {
  const { cop, allCops } = props;

  return (
    <PanelContainer show={cop}>
      <Panel>
        <PanelHeader>
          <AddReport>
            <ReportLink
              href="https://forms.gle/S4ohosYKn6NUQcps8"
              target="_blank"
              rel="noopener noreferrer"
            >
              + Add Report
            </ReportLink>
          </AddReport>
        </PanelHeader>
        <PanelBody>
          <CopCard cop={cop} inline={true} disableClick />
          <IncidentList incidents={getIndictments(cop, allCops)} />
        </PanelBody>
      </Panel>
    </PanelContainer>
  );
}

export default CopDetail;
