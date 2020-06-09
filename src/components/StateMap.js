import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import { MapChart } from "components";

function StateMap({ stateCount }) {
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent} stateCount={stateCount} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default StateMap;
