import React from "react";

import { BsCheckCircleFill } from "react-icons/bs"
import { IoIosRibbon } from "react-icons/io"
import { FaLock } from "react-icons/fa"

import { ContainerSelos, Selo, TextSelo } from './styles'

const Selos = ({}) => {
  return (
    <ContainerSelos>
      <Selo>
        <BsCheckCircleFill fill="#808080" size="1.875em" />
        <TextSelo>
          Compra
          <br />
          <strong>Segura</strong>
        </TextSelo>
      </Selo>

      <Selo>
        <IoIosRibbon fill="#808080" size="2.375em" />
        <TextSelo>
          Satisfação
          <br />
          <strong>Garantida</strong>
        </TextSelo>
      </Selo>

      <Selo>
        <FaLock fill="#808080" size="1.875em" />
        <TextSelo>
          Privacidade
          <br />
          <strong>Protegida</strong>
        </TextSelo>
      </Selo>
    </ContainerSelos>
  )
}

export { Selos }