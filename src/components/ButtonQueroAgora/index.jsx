import React from "react"

import { ButtonCtn } from "../../pages/sofa-cama-dobravel/styles"
import { Button } from "../../components/Button"
import { Selos } from "../../components/Selos"

import {
  ThirdDescription
} from "./styles"

const EuQueroAgora = ({
  linkButton,
  onClick
}) => {
  return (
    <div>
      <ThirdDescription style={{ paddingTop: 0 }}>
        <ButtonCtn>
          <Button definedClick={onClick} title="EU QUERO AGORA" link={linkButton} variant="second" />
          <Selos />
        </ButtonCtn>
      </ThirdDescription>
    </div>
  )
}

export { EuQueroAgora }
