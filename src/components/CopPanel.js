import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { CopCard } from "components";
import leftArrow from "../images/leftarrow.svg";

export const PanelContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 680px;
  transform: ${(props) => (props.show ? "translateX(0%)" : "translateX(100%)")};
  box-shadow: 0px 1.408px 21.12px rgba(52, 32, 1, 0.12);
  z-index: 99;
`;

export const Panel = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  overflow: auto;
`;

export const Back = styled.div`
  margin: 39px;
  color: #000;
  display: flex;
  :hover {
    cursor: pointer;
  }
`;

export const PanelBody = styled.div`
  text-align: left;
  margin-top: 75px;
`;

export const Incidents = styled.table`
  margin: 39px;
  width: 400px;
  font-weight: 500;
  font-size: 14px;
`;

export const Incident = styled.tr`
  outline: thin solid;
`;

export const IncidentFieldHeader = styled.td`
  padding: 26px;
  color: #9c9c9c;
`;

export const IncidentFieldData = styled.td`
  padding: 26px;
`;

const AddReport = styled.div`
  margin-left: 39px;
  text-decoration: none;
`;

const ReportLink = styled.a`
  text-decoration: none;
`;

function IncidentList(props) {
  const { incidents } = props;
  return (
    <Incidents>
      <IncidentFieldHeader>{"INCIDENT"}</IncidentFieldHeader>
      <IncidentFieldHeader>{"DATE"}</IncidentFieldHeader>
      <IncidentFieldHeader>{"STATUS"}</IncidentFieldHeader>
      {incidents &&
        incidents.map((incident) => {
          const { chargedOrIndicted, date, victim } = incident;
          return (
            <Incident>
              <IncidentFieldData>{victim}</IncidentFieldData>
              <IncidentFieldData>{date}</IncidentFieldData>
              <IncidentFieldData>{chargedOrIndicted}</IncidentFieldData>
            </Incident>
          );
        })}
    </Incidents>
  );
}

function CopPanel(props) {
  const { cop, onClose } = props;
  const { chargedOrIndicted, date, victim } = cop;
  return (
    <PanelContainer show={cop}>
      <Panel>
        <PanelBody>
          <Back onClick={onClose}>
            <ReactSVG src={leftArrow} style={{ marginRight: "8px" }} />
            {"Back"}
          </Back>

          <CopCard cop={cop} inline={true} />
          <IncidentList incidents={[{ date, chargedOrIndicted, victim }]} />
          <AddReport>
            <ReportLink
              href="https://forms.gle/S4ohosYKn6NUQcps8"
              target="_blank"
              rel="noopener noreferrer"
            >
              + Add a report
            </ReportLink>
          </AddReport>
        </PanelBody>
      </Panel>
    </PanelContainer>
  );
}

export default CopPanel;
