import React, { memo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const getStyles = (stateCount, name) => {
  return {
    default: {
      fill: stateCount[name] ? "#FCE21B" : "#333",
    },
    hover: {
      fill: "#FCE21B",
      outline: "none",
    },
  };
};

const MapChart = ({ setTooltipContent, stateCount }) => {
  return (
    <ComposableMap data-tip="" projection="geoAlbersUsa" width={1500}>
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map((geo) => {
              const { name } = geo.properties;
              return (
                <Geography
                  key={geo.rsmKey}
                  stroke="#555"
                  geography={geo}
                  fill="#333"
                  onMouseEnter={() => {
                    setTooltipContent(`${name} - ${stateCount[name]}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={getStyles(stateCount, name)}
                />
              );
            })}
          </>
        )}
      </Geographies>
    </ComposableMap>
  );
};

export default memo(MapChart);
