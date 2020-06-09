import React from "react";
import styled from "styled-components";
import CopCard from "./CopCard";
import { useTable, useFilters } from "react-table";
import CopCardFilterBar from "./CopCardFilterBar";
import { usStates } from "fixtures/usStates";

export const Wrapper = styled.div`
  width: 1300px;
  display: flex;
  flex-wrap: wrap;
`;

const EmptyWrapper = styled.div`
  flex: 1;
  margin-top: 32px;
  height: 100px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  justify-content: center;
`;

const Summary = styled.div`
  color: #aaa;
  font-size: 22px;
  margin-bottom: 16px;
`;

const Input = styled.input`
  border: none;
  outline: none;
`;

const Select = styled.select`
  width: 50px;
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
  console.log(usStates);
  return (
    <Select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {usStates.map((option, i) => (
        <option key={option.name} value={option.name}>
          {option.name}
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

const Empty = () => {
  return <EmptyWrapper>No results</EmptyWrapper>;
};

const hasRows = (rows) => rows && rows.length > 0;

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
        accessor: "year",
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
      <Summary>{rows.length + " results"}</Summary>
      <CopCardFilterBar headers={headers} />
      <Wrapper>
        {hasRows(rows) ? (
          rows.map((row, i) => {
            const { original: cop } = row;
            return (
              <CopCard
                key={i}
                name={cop.name}
                location={cop.location}
                department={cop.department}
                incidents={cop.incidents}
                status={cop.status}
                year={cop.year}
              />
            );
          })
        ) : (
          <Empty />
        )}
      </Wrapper>
    </>
  );
}

export default CopCardList;
