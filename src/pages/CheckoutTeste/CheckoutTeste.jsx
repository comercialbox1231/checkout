import React, { useState, useRef } from "react"
import { HeaderPromotion } from "../../components/HeaderPromotion"
import { LogoComBanner } from "../../components/LogoComBanner"
import { GlobalStyle } from "../../styles/global"

import { FrameDefault } from "./db"
import axios from "axios"

import { Container } from "./styles"

// Página Pix QrCode
// import { PaymentPix } from "../../components/PaymentePix"

function Checkout() {
  const Db = FrameDefault

  const accessToken = "8D479FDE-06804C4D-CE2E17D2-8180D7D1"

  function handleSubmit() {
    const postCustomer = {
      "access-token": accessToken,
      firstname: "Teste",
      lastname: "Teste",
      email: "testecheckout05@teste.com",
      telephone: "(66) 98104-1282",
      postcode: "65039-123",
      address_street: "Rua Av José",
      address_street_number: "1343",
      address_street_complement: "Bloco 112",
      address_street_district: "Centro",
      address_city: "São Paulo",
      address_state: "SP",
      ip: "127.0.0.8",
      custom_txt: "Tênis de Corrida 39",
      products: [
        {
          product_sku: "123456",
          product_qty: 2,
        },
      ],
      tracking: {
        utm_source: "google",
        utm_campaign: "black-friday",
        utm_medium: "cpc",
        utm_content: "tenis-corrida",
        utm_term: "logo-link",
      },
    }

    const headers = {
      "access-token": accessToken,
    }

    axios
      .post(
        "https://homolog.sandboxappmax.com.br/api/v3/customer",
        postCustomer,
        {
          headers,
        }
      )
      .then((response) => {
        console.log(response.data, "CLIENTE ✅")

        const postOrder = {
          "access-token": accessToken,
          total: 10.0,
          products: [
            {
              sku: "123123",
              name: "My product 1",
              qty: 1,
            },
            {
              sku: "234234",
              name: "My product 2",
              qty: 2,
              digital_product: 1,
            },
          ],
          shipping: 0.0,
          customer_id: response.data.data.id,
          discount: 0,
          freight_type: "PAC",
        }
        axios
          .post(
            "https://homolog.sandboxappmax.com.br/api/v3/order",
            postOrder,
            {
              headers,
            }
          )
          .then((response) => {
            console.log(response.data, "ORDEM ✅")

            const paymentForm = {
              "access-token": accessToken,
              cart: {
                order_id: response.data.data.id,
              },
              customer: {
                customer_id: response.data.data.customer_id,
              },
              payment: {
                // CreditCard: {
                //   number: "",
                //   cvv: "",
                //   month: 4,
                //   year: 28,
                //   document_number: "",
                //   name: "teste teste",
                //   installments: 12,
                //   soft_descriptor: "MYSTORE",
                // },
                Boleto: {
                  document_number: "191.000.000-00",
                },
              },
            }
            axios
              .post(
                `https://homolog.sandboxappmax.com.br/api/v3/payment/boleto`,
                paymentForm,
                { headers }
              )
              .then((response) => {
                console.log(response.data, "DEU CERTO O PAGAMENTO ✅")
              })
              .catch((error) => {
                console.error(error, "DEU ERRADO")
              })
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <Container>
      <GlobalStyle />
      <section className="first-page">
        <HeaderPromotion
          descricaoPromocao={Db.BannerSup.descricaoPromocao}
          desconto={Db.BannerSup.desconto}
          validoSomente={Db.BannerSup.validoSomente}
          prazoValidade={Db.BannerSup.prazoValidade}
        />
        <LogoComBanner logo={Db.LogoMarca.link} AltLogo={Db.LogoMarca.alt} />
      </section>

      <button onClick={handleSubmit} type="submit">
        Pagar
      </button>
    </Container>
  )
}

export default Checkout
