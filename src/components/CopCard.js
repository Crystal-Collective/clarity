import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import rightArrow from "../images/rightarrow.svg";

export const Card = styled.div`
  text-align: left;
  position: relative;
  margin: 13px;
  padding: 26px;
  width: 352px;
  height: ${(props) => (props.inline ? "200px" : "300px")};
  box-shadow: ${(props) =>
    props.inline ? "none" : "0px 1.408px 21.12px rgba(52, 32, 1, 0.12)"};
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;

export const CardHeader = styled.div`
  font-weight: 900;
  font-size: 26px;
  line-height: 31px;
`;

export const CardBody = styled.div`
  margin-top: 37px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CardInfoItem = styled.div`
  width: 120px;
  margin-bottom: 26px;
`;

export const CardFooter = styled.div`
  display: flex;
  color: #000;
  position: absolute;
  right: 26px;
  bottom: 26px;
  :hover {
    cursor: pointer;
  }
`;

export const CardInfoItemLabel = styled.div`
  color: #9c9c9c;
`;

export const CardInfoItemValue = styled.div`
  margin-top: 4px;
`;

export const StatusBadge = styled.div`
  background-color: black;
  color: white;
  border-radius: 26px;
  padding: 2px;
  width: 68px;
  margin-top: 4px;
  padding-left: 8px;
`;

function CopCard(props) {
  return (
    <Card inline={props.inline}>
      <CardHeader>{props.cop.name}</CardHeader>
      <CardBody>
        <CardInfoItem>
          <CardInfoItemLabel>{"CURRENT DEP"}</CardInfoItemLabel>
          <CardInfoItemValue>{props.cop.department}</CardInfoItemValue>
        </CardInfoItem>
        <CardInfoItem>
          <CardInfoItemLabel>{"LOCATION"}</CardInfoItemLabel>
          <CardInfoItemValue>{props.cop.location}</CardInfoItemValue>
        </CardInfoItem>
        <CardInfoItem>
          <CardInfoItemLabel>{"# INCIDENTS"}</CardInfoItemLabel>
          <CardInfoItemValue>{props.cop.incidents}</CardInfoItemValue>
        </CardInfoItem>
        <CardInfoItem>
          <CardInfoItemLabel>{"STATUS"}</CardInfoItemLabel>
          <StatusBadge>{props.cop.status}</StatusBadge>
        </CardInfoItem>
      </CardBody>
      {!props.inline && (
        <CardFooter onClick={() => props.onFooterClick(props.cop)}>
          {"Details"}{" "}
          <ReactSVG src={rightArrow} style={{ marginLeft: "8px" }} />
        </CardFooter>
      )}
    </Card>
  );
}

export default CopCard;
