import React, { memo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const MapChart = ({ setTooltipContent }) => {
  return (
    <ComposableMap
      data-tip=""
      projection="geoAlbersUsa"
      width={1500}
      style={{ marginTop: "-70px" }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                stroke="#555"
                geography={geo}
                fill="#333"
                onMouseEnter={() => {
                  const { name } = geo.properties;
                  setTooltipContent(`${name} - 34`);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                style={{
                  hover: {
                    fill: "#FCE21B",
                    outline: "none",
                  },
                }}
              />
            ))}
          </>
        )}
      </Geographies>
    </ComposableMap>
  );
};

export default memo(MapChart);
