import React, { useState } from "react"
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai"
import {
  Container,
  ImageCnt,
  Question,
  QuestionText,
  Response,
  ResponseText,
  Row,
  SubtitleFaq,
  Table,
  TitleFaq,
} from "./styles"

const Faq = ({
  titlePage,
  subtitlePage,
  acessDb
}) => {
  // estado que controla o Id do item que está atualmente aberto
  const [activeItemId, setActiveItemId] = useState(null)

  // função executada quando um item é clicado
  const handleItemClick = (itemId) => {
    setActiveItemId(itemId === activeItemId ? null : itemId)
  }

  return (
    <Container>
      <TitleFaq>{titlePage}</TitleFaq>
      <SubtitleFaq>{subtitlePage}</SubtitleFaq>
      <Table>

        {
          Object.entries(acessDb).map((i) => <Row>
            <Question onClick={() => handleItemClick(i[1].itemS)}>
              <ImageCnt>
                {activeItemId === i[1].itemS ? (
                  <AiFillMinusCircle size="25px" />
                ) : (
                  <AiFillPlusCircle size="25px" />
                )}
              </ImageCnt>
              <QuestionText>{i[1].question}</QuestionText>
            </Question>

            {activeItemId === i[1].itemS && (
              <Response open={activeItemId}>
                <ResponseText>{i[1].resposta}</ResponseText>
              </Response>
            )}
          </Row>)
        }
      </Table>
    </Container>
  )
}

export { Faq }
