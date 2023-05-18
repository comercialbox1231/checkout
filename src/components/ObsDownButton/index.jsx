import React from "react"

import { SDownBtn } from "./styles"

function ObsDownButton({ infoCupom, quantifyCupom }) {
  return (
    <SDownBtn className="obsDownButton">
      <span>{infoCupom}</span>
      <h4>{quantifyCupom}</h4>
    </SDownBtn>
  )
}

export default ObsDownButton;
