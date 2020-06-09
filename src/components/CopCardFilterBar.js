import React from "react";
import styled from "styled-components";

const FilterBar = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  width: 70%;
  box-shadow: 0px 1.408px 21.12px rgba(52, 32, 1, 0.12);
`;

const FilterItem = styled.div`
  flex: 1;
`;

const FilterTitle = styled.span`
  padding-right: 8px;
  font-size: 12px;
`;

const Filter = styled.span`
  max-width: 100px;
`;

const CopCardFilterBar = (props) => {
  console.log(props);
  const { headers } = props;

  return (
    <FilterBar>
      {headers.map((column, i) => {
        console.log(column);
        return (
          <FilterItem>
            <FilterTitle>{column.Header}:</FilterTitle>
            <Filter key={i}>{column.render("Filter")}</Filter>
          </FilterItem>
        );
      })}
    </FilterBar>
  );
};

export default CopCardFilterBar;
