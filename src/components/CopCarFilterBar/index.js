import React from "react";
import styled from "styled-components";
import { useAsyncDebounce } from "react-table";
import { Paper, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  filterBarContainer: {
    height: "74px",
  },
}));

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
  const classes = useStyles();

  const { headers, setGlobalFilter, globalFilter } = props;
  const filters = headers.filter((header) => {
    return header.useFilter;
  });

  return (
    <Paper>
      <Grid
        container
        direction={"row"}
        alignContent="center"
        justify="center"
        className={classes.filterBarContainer}
      >
        <Grid item xs={3}>
          <GlobalFilter
            setGlobalFilter={setGlobalFilter}
            globalFilter={globalFilter}
          />
        </Grid>
        {filters.map((column, i) => {
          const { Header, render } = column;
          const titleToSkip = "Name";
          return (
            <Grid item xs={2} key={i}>
              {Header !== titleToSkip && <FilterTitle>{Header}:</FilterTitle>}
              <Filter>{render("Filter")}</Filter>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

export default CopCardFilterBar;
