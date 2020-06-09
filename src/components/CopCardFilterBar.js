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
  const { headers } = props;

  return (
    <FilterBar>
      {headers.map((column, i) => {
        const { Header, render } = column;
        const titleToSkip = "Name";
        return (
          <FilterItem>
            {Header !== titleToSkip && <FilterTitle>{Header}:</FilterTitle>}
            <Filter key={i}>{render("Filter")}</Filter>
          </FilterItem>
        );
      })}
    </FilterBar>
  );
};

export default CopCardFilterBar;
