import React from "react"
import { BsCheckCircleFill } from "react-icons/bs"
import {
  Container,
  Table,
  Title,
  Content,
  ContentTitle,
  Row,
  Attribute,
} from "./styles"

const Especificacoes = ({
  acessDb,
  titlePage,
  especificacaoOne,
  itemOne,
  descricaoOne,
  itemTwo,
  descricaoTwo,
  itemThree,
  descricaoThree,
  especificacaoTwo,
  itemFour,
  descricaoFour,
  itemFive,
  descricaoFive,
  especificacaoThree,
  itemSix,
  descricaoSix,
  itemSeven,
  descricaoSeven,
  itemEight,
  descricaoEight,
  itemNine,
  descricaoNine,
  itemTen,
  descricaoTen,
  itemEleven,
  descricaoEleven,
}) => {

  return (
    <Container>
      <Title >{titlePage}</Title>

      <Table>
        {Object.entries(acessDb).map((i) => <>
          <Content style={{ alignSelf: "start", marginLeft: "35px" }}>
            <BsCheckCircleFill size="17.5px" />
            <ContentTitle>{i[1].titulo}</ContentTitle>
          </Content>

          {Object.entries(acessDb[0].items).map((x) => console.log(x[1].tituloItem, "ERIC TESTINHO"))}

          {Object.entries(acessDb).map((x) => <Row>
            <Attribute>
              <strong>{x[1].items[0].tituloItem} : </strong>
              {x[1].items[0].descricao}
            </Attribute>
          </Row>)}
        </>)}

      </Table>

    </Container>
  )
}

export { Especificacoes }
