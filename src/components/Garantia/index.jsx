import React from "react";
import { Container, SeloGarantia, TextGarantia, TitleGarantia } from "./styles";

const Garantia = ({
  seloGarantia,
  titleGarantia,
  textGarantiaOne,
  textGarantiaStrongOne,
  textGarantiaTwo,
  textGarantiaStrongTwo,
  textGarantiaThree
}) => {
  return (
    <Container>
      <SeloGarantia src={seloGarantia} alt="Selo de Garantia" />
      <TitleGarantia>{titleGarantia}</TitleGarantia>
      <TextGarantia>
        {textGarantiaOne}
        <strong>{textGarantiaStrongOne}</strong>
        {textGarantiaTwo}
        <strong>{textGarantiaStrongTwo}</strong>
        {textGarantiaThree}
      </TextGarantia>
    </Container>
  )
}

export { Garantia }