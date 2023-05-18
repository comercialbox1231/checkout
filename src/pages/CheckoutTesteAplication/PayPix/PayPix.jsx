import React, { useState, useRef } from "react"
import { BsCheckCircle, BsPhone } from "react-icons/bs"
import { AiOutlineScan } from "react-icons/ai"
import { useLocation } from "react-router-dom"
import { addMinutes, parse } from "date-fns"
import {
  GlobalStyle,
  ButtonCopy,
  Container,
  CronometroStyle,
  DivCode,
  DivCopy,
  DivCronometro,
  DivIcon,
  DivPedido,
  DivQrcode,
  ImageLoja,
  Text,
  TextPedido,
  Title,
  WrapperInformations,
} from "./styles"
import CronometroPix from "./CronometroPix"

function PayPix() {
  const location = useLocation()
  const { dataFromApi, orderId } = location.state
  const [codePix, setCodePix] = useState(dataFromApi.data.pix_emv)
  const inputRef = useRef(null)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codePix)
  }

  // captura da data de expiração do PIX via API
  const [pixCreationDate, setPixCreationDate] = useState(
    dataFromApi.data.pix_creation_date
  )
  const dateCreationFormat = parse(
    pixCreationDate,
    "yyyy-MM-dd HH:mm:ss",
    new Date()
  )
  const dateFinal = addMinutes(dateCreationFormat, 30)

  return (
    <Container>
      <GlobalStyle />

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
              <h3>PIX gerado com sucesso!</h3>
            </div>
            <TextPedido style={{ color: "#A3A4A4" }}>
              Agora você só precisa finalizar o pagamento
            </TextPedido>
          </DivPedido>

          <DivCronometro>
            <CronometroStyle>
              <CronometroPix dataCompleta={dateFinal} />
            </CronometroStyle>
            <TextPedido>Tempo para a conclusão da operação</TextPedido>
            <TextPedido>
              Efetue o pagamento agora mesmo{" "}
              <strong>escaneando o QR Code</strong>
            </TextPedido>
          </DivCronometro>

          {dataFromApi && (
            <DivCode>
              <img
                style={{ display: "block", width: "250px", height: "250px" }}
                id="base64image"
                src={`data:image/jpeg;base64, ${dataFromApi.data.pix_qrcode}`}
                alt="QR Code"
              />
            </DivCode>
          )}

          <DivCopy>
            <Title>Como pagar o seu pedido</Title>

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

              <Text>
                Abra o aplicativo do seu banco e selecione{" "}
                <strong>QR Code</strong> na opção de{" "}
                <strong>pagamento por PIX</strong>.
              </Text>
            </div>

            <div
              style={{
                marginLeft: "10px",
                display: "flex",
                alignItems: "flex-start",
                gap: "5px",
                marginTop: "20px",
              }}
            >
              <DivIcon>
                <AiOutlineScan size="100%" fill="#0FA2B7" />
              </DivIcon>
              <Text>
                Utilize a câmera do celular para{" "}
                <strong>escanear o QR Code</strong>, certifique-se que os dados
                estão corretos e finalize o pagamento.
              </Text>
            </div>
          </DivCopy>

          <DivCode>
            <Text style={{ fontWeight: "500" }}>OU</Text>
            <ButtonCopy type="button" onClick={copyToClipboard}>
              PIX COPIA E COLA
            </ButtonCopy>
            <input
              style={{ display: "none" }}
              type="text"
              ref={inputRef}
              value={codePix}
              onChange={(e) => setCodePix(e.target.value)}
            />

            <Text style={{ fontSize: "0.875rem", fontWeight: "500" }}>
              PEDIDO{" "}
              <span style={{ fontWeight: "600", color: "#40b76a" }}>
                #{orderId}
              </span>
            </Text>
          </DivCode>
        </DivQrcode>
      </WrapperInformations>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ImageLoja
          style={{ marginTop: "20px" }}
          src="https://megacaixas.shop/suacaixa/wp-content/uploads/2022/08/eletronicos_caixa.png"
          alt="Logomarca da loja"
        />
      </div>
    </Container>
  )
}

export default PayPix
