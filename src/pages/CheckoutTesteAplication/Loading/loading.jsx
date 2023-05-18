import React from "react"
import LoadingImg from "../assets/loader_animation.gif"
import { Container, ImageLoading, Text } from "./styles"

function Loading() {
  return (
    <Container>
      <ImageLoading src={LoadingImg} alt="Loading" />
      <Text style={{marginTop: "-25px"}}>Seu pedido está sendo processado</Text>
      <Text style={{ fontWeight: "400" }}>Não feche essa página</Text>
    </Container>
  )
}

export default Loading
