import React, { useState, useRef } from "react"
import {
  BsCheckCircle,
  BsPhone,
  BsCloudDownload,
  BsPrinter,
} from "react-icons/bs"
import { AiOutlineCopy } from "react-icons/ai"
import { useLocation } from "react-router-dom"
import { format, parseISO } from "date-fns"
import {
  GlobalStyle,
  ButtonCopy,
  Container,
  DivCode,
  DivCopy,
  DivIcon,
  DivPedido,
  DivQrcode,
  ImageLoja,
  Text,
  TextPedido,
  Title,
  WrapperInformations,
  DivValidade,
  ButtonDownload,
  ButtonContainer,
  BoletoPdf,
} from "./styles"

function PayBoleto() {
  const location = useLocation()
  const { dataFromApi, orderId, precoFinalBoleto } = location.state
  const [codeBoleto, setCodeBoleto] = useState(
    dataFromApi.data.boleto_payment_code
  )
  const boletoPdf = dataFromApi.data.pdf
  const inputRef = useRef(null)

  // validade do Boleto
  const validadeBoleto = dataFromApi.data.due_date
  const validadeBoletoFormat = format(parseISO(validadeBoleto), "dd/MM/yyyy")

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeBoleto)
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
            <TextPedido style={{ color: "#A3A4A4", textAlign: "center" }}>
              Agora você só precisa finalizar o pagamento
            </TextPedido>
          </DivPedido>

          <DivCopy>
            <Title>Boleto gerado</Title>
            <Text
              style={{
                marginLeft: "5px",
                paddingBottom: "20px",
                borderBottom: "1px solid #f1f1f1",
              }}
            >
              Seu boleto foi gerado com sucesso! Abaixo encontra-se as
              informaçõs necessárias para finalizar o seu pagamento.
            </Text>
            <DivValidade>
              <Text>
                Valor:{" "}
                <strong>
                  R$ {precoFinalBoleto.toString().replace(".", ",")}
                </strong>
              </Text>
              <Text>
                Data de validade: <strong>{validadeBoletoFormat}</strong>
              </Text>
            </DivValidade>

            <Text
              style={{
                fontSize: "0.875rem",
                fontWeight: "500",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              PEDIDO{" "}
              <span style={{ fontWeight: "600", color: "#40b76a" }}>
                #{orderId}
              </span>
            </Text>
            <ButtonContainer>
              <ButtonCopy type="button" onClick={copyToClipboard}>
                <DivIcon>
                  <AiOutlineCopy size="100%" />
                </DivIcon>
                Copiar código
              </ButtonCopy>

              <BoletoPdf href={boletoPdf} target="_blank">
                <ButtonDownload type="button">
                  <DivIcon>
                    <BsCloudDownload size="100%" />
                  </DivIcon>
                  Baixar boleto
                </ButtonDownload>
              </BoletoPdf>
            </ButtonContainer>
          </DivCopy>

          <DivCopy style={{ marginTop: "30px" }}>
            <Title>Opções de pagamento</Title>

            <div
              style={{
                margin: "20px 0 15px 10px",
                display: "flex",
                alignItems: "flex-start",
                gap: "5px",
              }}
            >
              <DivIcon>
                <BsPrinter size="100%" fill="#0FA2B7" />
              </DivIcon>
              <Text>
                Imprima e pague seu boleto em lotéricas ou caixas eletrônicos
              </Text>
            </div>

            <div
              style={{
                marginLeft: "10px",
                display: "flex",
                alignItems: "flex-start",
                gap: "5px",
              }}
            >
              <DivIcon>
                <BsPhone size="100%" fill="#0FA2B7" />
              </DivIcon>

              <Text>Pague seu boleto usando seu aplicativo bancário</Text>
            </div>
          </DivCopy>

          <DivCode>
            <input
              style={{ display: "none" }}
              type="text"
              ref={inputRef}
              value={codeBoleto}
              onChange={(e) => setCodeBoleto(e.target.value)}
            />
          </DivCode>
        </DivQrcode>
      </WrapperInformations>
    </Container>
  )
}

export default PayBoleto
