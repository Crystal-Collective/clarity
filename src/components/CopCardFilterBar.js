import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1300px;
  display: flex;
  flex-wrap: wrap;
`;

const CopCardFilterBar = (props) => {
  console.log(props);
  const { headers } = props;

  return (
    <Wrapper>
      {headers.map((column) => {
        console.log(column);
        return column.render("Filter");
      })}
    </Wrapper>
  );
};

export default CopCardFilterBar;
