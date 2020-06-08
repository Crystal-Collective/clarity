import React from "react";
import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  margin: 13px;
  padding: 26px;
  width: 352px;
  height: 300px;
  box-shadow: 0px 1.408px 21.12px rgba(52, 32, 1, 0.12);
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
  position: absolute;
  right: 26px;
  bottom: 26px;
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
  width: 50px;
  margin-top: 4px;
  padding-left: 8px;
`;

function CopCard(props) {
  return (
    <Card>
      <CardHeader>{props.name}</CardHeader>
      <CardBody>
        <CardInfoItem>
          <CardInfoItemLabel>{"CURRENT DEP"}</CardInfoItemLabel>
          <CardInfoItemValue>{props.department}</CardInfoItemValue>
        </CardInfoItem>
        <CardInfoItem>
          <CardInfoItemLabel>{"LOCATION"}</CardInfoItemLabel>
          <CardInfoItemValue>{props.location}</CardInfoItemValue>
        </CardInfoItem>
        <CardInfoItem>
          <CardInfoItemLabel>{"# INCIDENTS"}</CardInfoItemLabel>
          <CardInfoItemValue>{props.incidents}</CardInfoItemValue>
        </CardInfoItem>
        <CardInfoItem>
          <CardInfoItemLabel>{"STATUS"}</CardInfoItemLabel>
          <StatusBadge>{props.status}</StatusBadge>
        </CardInfoItem>
      </CardBody>
      <CardFooter>{"Details →"}</CardFooter>
    </Card>
  );
}

export default CopCard;
