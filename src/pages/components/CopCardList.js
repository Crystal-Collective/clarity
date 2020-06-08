import React from "react";
import styled from "styled-components";
import CopCard from "./CopCard";

export const Wrapper = styled.div`
  width: 1300px;
  display: flex;
  flex-wrap: wrap;
`;

function CopCardList(props) {
  return (
    <Wrapper>
      {props.cops.map((cop) => (
        <CopCard
          name={cop.name}
          location={cop.location}
          department={cop.department}
          incidents={cop.incidents}
          status={cop.status}
        />
      ))}
    </Wrapper>
  );
}

export default CopCardList;
