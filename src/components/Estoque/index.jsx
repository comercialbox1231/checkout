import React from "react";

import {
  Container,
  Text,
  Quantidade,
  BarraContagem,
  BarraContagemDark,
} from "./styles"

const Estoque = ({ quantidade }) => {
  return (
    <Container>
      <Text>
        Restam apenas <Quantidade>{quantidade}</Quantidade> unidades em estoque.
      </Text>
      <BarraContagem>
        <BarraContagemDark />
      </BarraContagem>
    </Container>
  )
}

export { Estoque }