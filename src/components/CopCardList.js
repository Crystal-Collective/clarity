import React from "react";
import styled from "styled-components";
import CopCard from "./CopCard";
import { useTable } from "react-table";

export const Wrapper = styled.div`
  width: 1300px;
  display: flex;
  flex-wrap: wrap;
`;

function CopCardList(props) {
  const { cops } = props;
  const data = React.useMemo(() => cops, [cops]);
  const columns = React.useMemo(
    () => [
      {
        Header: "Status",
        accessor: "status", // accessor is the "key" in the data
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Year",
        accessor: "year",
      },
    ],
    []
  );

  console.log(cops);
  console.log(columns);

  const { rows } = useTable({ columns, data });

  return (
    <Wrapper>
      {rows.map((row) => {
        const { original: cop } = row;

        console.log(cop);
        return (
          <CopCard
            name={cop.name}
            location={cop.location}
            department={cop.department}
            incidents={cop.incidents}
            status={cop.status}
          />
        );
      })}
    </Wrapper>
  );
}

export default CopCardList;
