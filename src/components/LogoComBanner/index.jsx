import React from "react"

import { Wrapper } from "./styles"
import { Link } from "react-router-dom"

const LogoComBanner = ({ logo, AltLogo }) => {
  return (
    <Wrapper>
      <Link style={{ width: '30%' }} to={'/'}>
        <img src={logo} alt={AltLogo} />
      </Link>

      <div className="container_banner">
        <span>PARABÉNS, você foi a ganhadora do CUPOM:</span>

        <div className="name_cupom">
          <h3 className="animated-heading">VERÃO</h3>
          <h5 ><span style={{ fontWeight: 'bold' }}>|</span> 50% OFF</h5>
        </div>
      </div>
    </Wrapper>
  )
}

export { LogoComBanner }
