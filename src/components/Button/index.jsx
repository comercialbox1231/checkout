import React from "react"

import { ButtonContainer } from "./styles"

const Button = ({ title, variant = "primary", definedClick }) => {
  return <ButtonContainer onClick={definedClick} variant={variant}>{title}</ButtonContainer>
}

export { Button }
