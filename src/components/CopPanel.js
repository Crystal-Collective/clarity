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

function CopPanel(props) {
  return (
    <PanelContainer show={props.cop}>
      <Panel>
        <PanelBody>
          <Back onClick={props.onClose}>
            <ReactSVG src={leftArrow} style={{ marginRight: "8px" }} />
            {"Back"}
          </Back>

          <CopCard cop={props.cop} inline={true} />
          <IncidentList
            incidents={[{ victim: props.cop.victim, date: props.cop.date }]}
          />
        </PanelBody>
      </Panel>
    </PanelContainer>
  );
}

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

function IncidentList(props) {
  return (
    <Incidents>
      <IncidentFieldHeader>{"INCIDENT"}</IncidentFieldHeader>
      <IncidentFieldHeader>{"DATE"}</IncidentFieldHeader>
      <IncidentFieldHeader>{"STATUS"}</IncidentFieldHeader>
      <Incident>
        <IncidentFieldData>{props.incidents[0].victim}</IncidentFieldData>
        <IncidentFieldData>{props.incidents[0].date}</IncidentFieldData>
        <IncidentFieldData>{"--"}</IncidentFieldData>
      </Incident>
    </Incidents>
  );
}

export default CopPanel;
