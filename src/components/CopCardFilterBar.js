import React from "react";
import styled from "styled-components";

const FilterBar = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  flex-wrap: wrap;
`;

const FilterItem = styled.div`
  flex: 1;
  flex-direction: column;
`;

const Filter = styled.div`
  flex: 1;
`;

const FilterTitle = styled.div`
  flex: 1;
  font-size: 18px;
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
            <FilterTitle>{column.Header}</FilterTitle>
            <Filter key={i}>{column.render("Filter")}</Filter>
          </FilterItem>
        );
      })}
    </FilterBar>
  );
};

export default CopCardFilterBar;
