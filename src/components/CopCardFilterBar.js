import React from "react";
import styled from "styled-components";
import { useAsyncDebounce } from "react-table";

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

const Input = styled.input`
  min-width: 200px;
  border: none;
  outline: none;
`;

const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <Input
      value={value || ""}
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
      placeholder={`Search By Officer or Victim Name...`}
    />
  );
};

const CopCardFilterBar = (props) => {
  const { headers, setGlobalFilter, globalFilter } = props;
  const filters = headers.filter((header) => {
    return header.useFilter;
  });

  return (
    <FilterBar>
      <FilterItem>
        <GlobalFilter
          setGlobalFilter={setGlobalFilter}
          globalFilter={globalFilter}
        />
      </FilterItem>
      {filters.map((column, i) => {
        const { Header, render } = column;
        const titleToSkip = "Name";
        return (
          <FilterItem key={i}>
            {Header !== titleToSkip && <FilterTitle>{Header}:</FilterTitle>}
            <Filter>{render("Filter")}</Filter>
          </FilterItem>
        );
      })}
    </FilterBar>
  );
};

export default CopCardFilterBar;
