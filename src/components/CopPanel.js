import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import CopCard from "./CopCard";
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
  padding: 39px;
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
        </PanelBody>
      </Panel>
    </PanelContainer>
  );
}

export default CopPanel;
