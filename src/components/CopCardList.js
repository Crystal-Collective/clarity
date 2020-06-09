import React from "react";
import styled from "styled-components";
import { CopCard } from "components";

export const Wrapper = styled.div`
  width: 1300px;
  display: flex;
  flex-wrap: wrap;
`;

function CopCardList(props) {
  return (
    <Wrapper>
      {props.cops.map((cop) => (
        <CopCard cop={cop} inline={false} onFooterClick={props.onCardClick} />
      ))}
    </Wrapper>
  );
}

export default CopCardList;
