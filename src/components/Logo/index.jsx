import React from "react"

import { Wrapper } from "./styles"
import { Link } from "react-router-dom"

const Logo = ({ rotaLink, logo, AltLogo }) => {
  return (
    <Link to={rotaLink}>
      <Wrapper>
        <img src={logo} alt={AltLogo} />
      </Wrapper>
    </Link>
  )
}

export { Logo }
