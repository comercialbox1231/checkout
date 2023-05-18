import React from "react";

import { Wrapper, TextPromotion } from "./styles";

const HeaderPromotion = ({
  descricaoPromocao,
  desconto,
  validoSomente,
  prazoValidade
}) => {
  return (
    <Wrapper>
      <TextPromotion>
        <strong>{descricaoPromocao}</strong>
        <br />
        <strong>{desconto}</strong>
        <span> {validoSomente}</span>
        <strong> {prazoValidade} </strong>
      </TextPromotion>
    </Wrapper>
  )

}

export { HeaderPromotion }