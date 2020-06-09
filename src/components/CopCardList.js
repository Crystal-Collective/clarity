import React from "react";
import styled from "styled-components";
import CopCard from "./CopCard";
import { useTable, useFilters } from "react-table";
import CopCardFilterBar from "./CopCardFilterBar";

export const Wrapper = styled.div`
  width: 1300px;
  display: flex;
  flex-wrap: wrap;
`;

// This is a custom UI for our 'between' or number range
// filter. It uses two number boxes and filters rows to
// ones that have values between the two
const NumberFilter = ({ column: { filterValue = null, setFilter, id } }) => {
  console.log("id", id);

  return (
    <div
      style={{
        display: "flex",
      }}
    >
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
    </div>
  );
};

const StateFilter = () => {
  return "StateFilter";
};

const StatusFilter = () => {
  return "StatusFilter";
};

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
      <CopCardFilterBar headers={headers} />
      <Wrapper>
        {rows.map((row, i) => {
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
        })}
      </Wrapper>
    </>
  );
}

export default CopCardList;
