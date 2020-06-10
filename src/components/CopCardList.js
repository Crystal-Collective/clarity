import React from "react";
import styled from "styled-components";
import { useTable, useFilters } from "react-table";
import CopCardFilterBar from "./CopCardFilterBar";
import { STATES } from "constants.js";
import { CopCard } from "components";

export const Wrapper = styled.div`
  width: 1300px;
  display: flex;
  flex-wrap: wrap;
`;

const Summary = styled.div`
  color: #aaa;
  font-size: 16px;
  margin: 16px 0 8px;
  font-weight: 500;
`;

const Input = styled.input`
  border: none;
  outline: none;
`;

const Select = styled.select`
  max-width: 150px;
  border: none;
  outline: none;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: -5px;
  padding-right: 15px;
`;

// Define a default UI for filtering
function NameFilter({ column: { filterValue, preFilteredRows, setFilter } }) {
  return (
    <Input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`Search...`}
    />
  );
}

const NumberFilter = ({
  column: { filterValue, setFilter, preFilteredRows, id },
}) => {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      row.values[id] && options.add(row.values[id]);
    });
    return [...options.values()].sort();
  }, [id, preFilteredRows]);

  return (
    <Select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

const StateFilter = ({ column: { filterValue = "", setFilter, id } }) => {
  return (
    <Select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {STATES.map((option, i) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

// This filter will populate its option from the available Status options in the data
function StatusFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  return (
    <Select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
}

function CopCardList(props) {
  const { cops } = props;
  const data = React.useMemo(() => cops, [cops]);
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name", // accessor is the "key" in the data
        Filter: NameFilter,
        skipTitle: true,
      },
      {
        Header: "Status",
        accessor: "status", // accessor is the "key" in the data
        Filter: StatusFilter,
      },
      {
        Header: "State",
        accessor: "state",
        Filter: StateFilter,
      },
      {
        Header: "Year",
        accessor: "date",
        Filter: NumberFilter,
      },
    ],
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: () => null,
    }),
    []
  );

  const { headerGroups, rows } = useTable(
    { columns, data, defaultColumn },
    useFilters
  );

  const headers = headerGroups[0].headers;

  return (
    <>
      <CopCardFilterBar headers={headers} />
      <Summary>{rows.length + " results"}</Summary>
      <Wrapper>
        {rows.map((row, i) => {
          const { original: cop } = row;
          return (
            <CopCard
              key={i}
              cop={cop}
              inline={false}
              onFooterClick={props.onCardClick}
            />
          );
        })}
      </Wrapper>
    </>
  );
}

export default CopCardList;
