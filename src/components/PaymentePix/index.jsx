import React from "react"
import { Wrapper } from "../../styles/global"

const PaymentPix = ({ qrCodeUrl }) => {
  return (
    <Wrapper>
      <h1 style={{ fontSize: "20px", margin: "20px 0" }}>Pagamento OK </h1>

      <img
        src={qrCodeUrl}
        alt="Qr Code Pix"
        style={{ width: "350px", height: "350px" }}
      />
    </Wrapper>
  )
}

export { PaymentPix }
