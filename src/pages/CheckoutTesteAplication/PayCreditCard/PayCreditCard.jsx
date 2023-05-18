import React from "react"
import axios from "axios"
import { productsData } from "../CheckoutAplication/productsData"
import { BsCheckCircle } from "react-icons/bs"
import { useLocation } from "react-router-dom"
import {
  ButtonAdicionar,
  Container,
  Content,
  DivCode,
  DivCronometro,
  DivIcon,
  DivPedido,
  DivQrcode,
  GlobalStyle,
  ImageLoja,
  Text,
  TextPedido,
  Title,
  Upsell,
  WrapperInformations,
} from "./styles"

function PayCreditCard() {
  const location = useLocation()
  const { orderId, accessToken, dataFromApi } = location.state

  const upsellHash = dataFromApi.data.upsell_hash

  const produtoUpsell = productsData

  function handleSubmitUpsell() {
    const postUpsell = {
      "access-token": accessToken,
      hash: upsellHash,
      products: [
        {
          sku: produtoUpsell[1].id,
          name: produtoUpsell[1].nome,
          qty: 1,
          price: produtoUpsell[1].preco,
        },
      ],
      overwrite_cart: false,
      installments: 1,
    }

    const headers = {
      "access-token": accessToken,
    }

    axios
      .post(`https://admin.appmax.com.br/api/v3/order/upsell`, postUpsell, {
        headers,
      })
      .then((response) => {
        console.log(response.data, "DEU CERTO O UPSELL ✅")
      })
      .catch((error) => {
        console.error(error, "DEU ERRADO")
      })
  }

  return (
    <Container>
      <GlobalStyle />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ImageLoja
          style={{ marginBottom: "20px" }}
          src="https://megacaixas.shop/suacaixa/wp-content/uploads/2022/08/eletronicos_caixa.png"
          alt="Logomarca da loja"
        />
      </div>

      <Content>
        <Upsell>
          <Title>Adicione uma OFERTA ESPECIAL ao seu pedido</Title>
          <div style={{ display: "flex", gap: "20px" }}>
            <img
              src="https://cdn.shopify.com/s/files/1/0738/4249/1684/products/a_720x720_crop_center.jpg?v=1680015255"
              alt="Imagem do produto"
            />
            <div>
              <Text>{produtoUpsell[1].nome}</Text>
              <Text style={{ fontWeight: "600" }}>
                R$ {produtoUpsell[1].preco}
              </Text>
              <ButtonAdicionar type="button" onClick={handleSubmitUpsell}>
                Adicionar ao pedido
              </ButtonAdicionar>
            </div>
          </div>
        </Upsell>

        <WrapperInformations>
          <DivQrcode>
            <DivPedido>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <DivIcon>
                  <BsCheckCircle size="100%" fill="#202223" />
                </DivIcon>
                <h3>Pedido gerado com sucesso!</h3>
              </div>
            </DivPedido>

            <DivCronometro>
              <TextPedido style={{ textAlign: "center" }}>
                Seu pagamento foi computado.
                <br />
                Aguardando a confirmação da operadora de cartão de crédito.
              </TextPedido>
              <TextPedido style={{ textAlign: "center" }}>
                Você receberá mais informações no seu e-mail.
              </TextPedido>
            </DivCronometro>

            {/* Redenrização do número do pedido */}
            <DivCode>
              <Text style={{ fontSize: "0.875rem", fontWeight: "500" }}>
                PEDIDO{" "}
                <span style={{ fontWeight: "600", color: "#40b76a" }}>
                  #{orderId}
                </span>
              </Text>
            </DivCode>
          </DivQrcode>
        </WrapperInformations>
      </Content>
    </Container>
  )
}

export default PayCreditCard
