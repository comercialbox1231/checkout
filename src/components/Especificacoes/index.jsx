import React from "react"
import { BsCheckCircleFill } from "react-icons/bs"
import {
  Container,
  ContainerSpec,
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
}) => {
  return (
    <Container>
      <Title >{titlePage}</Title>

      <Table>

        {
          acessDb.map((item, index) => (
            <ContainerSpec key={index}>
              <Content style={{ alignSelf: "start", marginLeft: "30px" }}>
                <BsCheckCircleFill size="17.5px" />
                <ContentTitle>{item.title}</ContentTitle>
              </Content>

              {item.specs.map((spec, index) => (
                <Row key={index}>
                  <Attribute>
                    <strong>{spec.name}: </strong>
                    {spec.value}
                  </Attribute>
                </Row>))}
            </ContainerSpec>))
        }
      </Table>

    </Container>
  )
}

export { Especificacoes }
