import React from "react";
import styled from "styled-components";
import { useGlobalFilter, useTable, useFilters } from "react-table";
import CopCardFilterBar from "./CopCardFilterBar";
import { STATES } from "constants.js";
import { CopCard } from "components";
import matchSorter from "match-sorter";
import getStatusMapping from "./utils/getStatusMapping";

export const Wrapper = styled.div`
  width: 1300px;
  display: flex;
  flex-wrap: wrap;
  min-height: 400px;
`;

const Summary = styled.div`
  color: #aaa;
  font-size: 16px;
  margin: 16px 0 8px;
  font-weight: 500;
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
      if (row.values[id]) {
        options.add(row.values[id]);
      }
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
      {options.map((option, i) => {
        return (
          <option key={i} value={option}>
            {getStatusMapping(option)}
          </option>
        );
      })}
    </Select>
  );
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val) => !val;

function CopCardList(props) {
  const { cops } = props;
  const data = React.useMemo(() => cops, [cops]);
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Status",
        accessor: "status", // accessor is the "key" in the data
        Filter: StatusFilter,
        useFilter: true,
      },
      {
        Header: "State",
        accessor: "state",
        Filter: StateFilter,
        useFilter: true,
      },
      {
        Header: "Victim",
        accessor: "victim",
      },
      {
        Header: "Year",
        accessor: "date",
        Filter: NumberFilter,
        useFilter: true,
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

  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const { headerGroups, rows, setGlobalFilter, state } = useTable(
    { columns, data, defaultColumn, filterTypes },
    useFilters,
    useGlobalFilter
  );

  const headers = headerGroups[0].headers;

  return (
    <>
      <CopCardFilterBar
        headers={headers}
        setGlobalFilter={setGlobalFilter}
        globalFilter={state.globalFilter}
      />
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
