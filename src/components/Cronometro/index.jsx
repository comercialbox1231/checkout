import React from "react";
import Countdown from "react-countdown";

import { ContainerCronometro, Text, TextContagem } from "./styles"
import { Selos } from "../Selos"

const Cronometro = ({time}) => {

  const renderer = ({ minutes, seconds}) => {
      return (
        <span>
          00:{minutes}:{seconds}
        </span>
      )
    }

  return (
    <ContainerCronometro>
      <Text>CORRA! A OFERTA EXPIRA EM BREVE!</Text>
      <TextContagem>
        <Countdown date={Date.now() + time} renderer={renderer} />
      </TextContagem>
      <Selos />
    </ContainerCronometro>
  )
}

export { Cronometro }