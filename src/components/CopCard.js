import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import rightArrow from "images/rightarrow.svg";
import getStatusMapping from "./utils/getStatusMapping";

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
  flex-direction: column;
`;

export const CardRow = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export const CardInfoItem = styled.div`
  flex: 1;
  margin-bottom: 16px;
`;

export const CardInfoItemFullRow = styled.div`
  flex: 1;
  margin-bottom: 16px;
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
  margin-top: 4px;
  padding: 4px 8px;
  display: inline-block;
`;

function CopCard(props) {
  const { cop, inline, onFooterClick } = props;
  return (
    <Card inline={inline}>
      <CardHeader>{cop.name}</CardHeader>
      <CardBody>
        <CardRow>
          <CardInfoItem>
            <CardInfoItemLabel>{"RECENT INCIDENT"}</CardInfoItemLabel>
            <CardInfoItemValue>{cop.victim}</CardInfoItemValue>
          </CardInfoItem>
          <CardInfoItem>
            <CardInfoItemLabel>{"LOCATION"}</CardInfoItemLabel>
            <CardInfoItemValue>{cop.location}</CardInfoItemValue>
          </CardInfoItem>
        </CardRow>
        <CardRow>
          <CardInfoItem>
            <CardInfoItemLabel>{"# INCIDENTS"}</CardInfoItemLabel>
            <CardInfoItemValue>{cop.incidents}</CardInfoItemValue>
          </CardInfoItem>
          <CardInfoItem>
            <CardInfoItemLabel>{"YEAR"}</CardInfoItemLabel>
            <CardInfoItemValue>{cop.date}</CardInfoItemValue>
          </CardInfoItem>
        </CardRow>
        <CardRow>
          <CardInfoItemFullRow>
            <CardInfoItemLabel>{"STATUS"}</CardInfoItemLabel>
            <StatusBadge>{getStatusMapping(cop.status)}</StatusBadge>
          </CardInfoItemFullRow>
        </CardRow>
      </CardBody>
      {!inline && (
        <CardFooter onClick={() => onFooterClick(cop)}>
          {"Details"}{" "}
          <ReactSVG src={rightArrow} style={{ marginLeft: "8px" }} />
        </CardFooter>
      )}
    </Card>
  );
}

export default CopCard;

CopCard.propTypes = {
  cop: PropTypes.shape({
    date: PropTypes.number,
    department: PropTypes.string,
    incidents: PropTypes.string,
    location: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
  }),
  inline: PropTypes.bool,
  onFooterClick: PropTypes.func,
};
