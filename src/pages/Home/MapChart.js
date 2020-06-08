import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

function MapChart() {
  return (
    <ComposableMap
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
              />
            ))}
          </>
        )}
      </Geographies>
    </ComposableMap>
  );
}

export default MapChart;
