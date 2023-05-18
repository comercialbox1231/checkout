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
          sku: produtoUpsell[4].id,
          name: "PREMIUM 04 UP",
          qty: 1,
          price: produtoUpsell[4].preco,
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

      <Content>
        <Upsell>
          <Title>Adicione uma OFERTA ESPECIAL ao seu pedido</Title>
          <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', gap: "20px" }}>
            <img
              src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRvE8pVudmW405Ze-gZf1pL7YUd51TkryBX7T_tT6YGBulyY12RsCn-i0nnTzLsHmj_KpUE6G3AfIzbMaO-kc56yepesE7cmalsNizVoypv"
              alt="Imagem do produto"
            />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              {/* <Text>{produtoUpsell[1].nome}</Text> */}
              <span className="ofertaRelampago">PROMOÇÃO RELÂMPAGO - Apple AirPods Max</span>
              <div className="ctnPrice">
                <span className="priceCort">R$ 389,90</span>
                <Text style={{ fontWeight: "600", fontSize: '17px', color: "rgb(201, 32, 20)", textDecorationLine: 'underline' }}>
                  R$ {produtoUpsell[3].preco}
                </Text>
              </div>
              <ButtonAdicionar type="button" onClick={handleSubmitUpsell}>
                COMPRAR AGORA
              </ButtonAdicionar>
              <span style={{ fontSize: '12px', textAlign: 'center', margin: '10px'}}>Obs: A partir do momento que você clicar no botão a sua compra será processada. <strong>Aproveite a oferta</strong></span>
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

    </Container>
  )
}

export default PayCreditCard
