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

export const Summary = styled.div`
  color: #aaa;
  font-size: 22px;
  margin-bottom: 16px;
`;

const NumberFilter = ({ column: { filterValue = null, setFilter, id } }) => {
  return (
    <input
      value={filterValue || ""}
      type="number"
      onChange={(e) => {
        const val = e.target.value;
        setFilter((old = null) => {
          return val ? parseInt(val, 10) : null;
        });
      }}
      placeholder={`Year`}
      style={{
        width: "70px",
        marginRight: "0.5rem",
      }}
    />
  );
};

const StateFilter = ({ column: { filterValue = "", setFilter, id } }) => {
  console.log(usStates);
  return (
    <select
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
    </select>
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

  // Render a multi-select box
  return (
    <select
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
    </select>
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

  console.log(rows);

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
