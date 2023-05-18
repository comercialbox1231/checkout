import React from "react"
import { BsCheckCircle } from "react-icons/bs"

import {
  BodyCard,
  ButtonBest,
  Container,
  Content,
  CutPrice,
  CutPriceValue,
  HeaderCard,
  ImageProduct,
  Main,
  Stars,
  TitleProduct,
  Text,
  ButtonCtn,
  CartoesImg,
  SelosCard,
  Selo,
  ButtonCard,
} from "./styles"

const CardProduct = ({
  infoPromo,
  titleProduct,
  subtitleProduct,
  imageProduct,
  cutPriceValue,
  parcelas,
  valorParcelas,
  valorTotal,
  linkButton,
}) => {
  return (
    <Container>
      <ButtonBest>{infoPromo}</ButtonBest>
      <HeaderCard>
        <TitleProduct>
          {titleProduct}
          <br />
          {subtitleProduct}
        </TitleProduct>
      </HeaderCard>

      <BodyCard>
        <Main>
          <ImageProduct src={imageProduct} alt="Imagem do Produto" />
          <Content>
            <Stars>⭐⭐⭐⭐⭐</Stars>
            <CutPrice>
              Era:
              <br />
              <CutPriceValue>{cutPriceValue}</CutPriceValue>
            </CutPrice>
            <Text style={{ marginBottom: "13px" }}>
              Apenas {parcelas}x de: R$ {valorParcelas}
            </Text>
            <Text>Agora: R$ {valorTotal}</Text>
            <ButtonCtn>
              <ButtonCard onClick={linkButton}>COMPRAR AGORA</ButtonCard>
            </ButtonCtn>
            <CartoesImg
              src="https://cdn.shopify.com/s/files/1/0685/7965/5974/files/bandeiras-cartoes-pix_png.webp?v=1673820091"
              alt="Cartões aceitos"
            />
          </Content>
        </Main>

        <SelosCard>
          <Selo>
            <BsCheckCircle fill="#444444" size="16px" />
            Garantia de satisfação
          </Selo>
          <Selo>
            <BsCheckCircle fill="#444444" size="14px" />
            Produto 100% Original
          </Selo>
        </SelosCard>
      </BodyCard>
    </Container>
  )
}

export { CardProduct }
