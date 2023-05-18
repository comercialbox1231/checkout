import React, { useState } from "react"
import {
  FaCreditCard,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDinersClub,
} from "react-icons/fa"
import { SiPix } from "react-icons/si"
import { ImPriceTags } from "react-icons/im"
import HiperIcon from "../../assets/hipercard.svg"
import EloIcon from "../../assets/elo-icon.svg"
import BilletIcon from "../../assets/billet-icon.svg"
import FreteIcon from "../../assets/frete-icon.svg"

import {
  Row,
  Seamaster,
  TitleProduct,
  Text,
  CutPrice,
  ParcelaPrice,
  TextPay,
  ModalWrapper,
  ModalTitle,
  ModalSubtitle,
  ContainerPay,
  RowModalLight,
  RowModalDark,
  TextModalRight,
  TextModalLeft,
  TextCards,
  Cards,
  ImageCard,
  ButtonClose,
  ButtonGreen,
  RowBnt,
  InfoPix,
  InfoCreditCard,
} from "./styles"

import "react-responsive-modal/styles.css"
import { Modal } from "react-responsive-modal"

const Price = ({
  signature,
  title,
  subtitle,
  parcelas,
  cutPrice,
  parcelaPrice,

  valorTotal,

  valor2x,
  valor3x,
  valor4x,
  valor5x,
  valor6x,
  valor7x,
  valor8x,
  valor9x,
  valor10x,
  valor11x,
  valor12x,

  valorTotal2x,
  valorTotal3x,
  valorTotal4x,
  valorTotal5x,
  valorTotal6x,
  valorTotal7x,
  valorTotal8x,
  valorTotal9x,
  valorTotal10x,
  valorTotal11x,
  valorTotal12x,

  valorPix,
  discountPix,
}) => {
  const [open, setOpen] = useState(false)

  const [openCard, setOpenCard] = useState(true)
  const [openPix, setOpenPix] = useState(false)

  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)

  const openCardClick = () => {
    setOpenCard(true)
    setOpenPix(false)
  }

  const openPixClick = () => {
    setOpenPix(true)
    setOpenCard(false)
  }

  return (
    <main>
      <Seamaster>{signature}</Seamaster>
      <TitleProduct>
        {title}
        <br />
        {subtitle}
      </TitleProduct>
      <Text>
        apenas <strong>{parcelas} </strong>de:
      </Text>
      <Row>
        <CutPrice>
          <s>R${cutPrice}</s>
        </CutPrice>
        <ParcelaPrice>R$ {parcelaPrice}</ParcelaPrice>
      </Row>
      <Text>
        Ou <strong>R$ {valorTotal} à vista</strong>
      </Text>
      <TextPay onClick={onOpenModal}>Ver opções de pagamento</TextPay>

      <Modal open={open} onClose={onCloseModal} center>
        <ModalWrapper>
          <ModalTitle>Formas de Pagamento</ModalTitle>
          <ContainerPay>
            <FaCreditCard />
            <ModalSubtitle onClick={openCardClick}>
              Cartão de crédito
            </ModalSubtitle>
          </ContainerPay>

          <ContainerPay onClick={openPixClick}>
            <SiPix />
            <ModalSubtitle>Pix</ModalSubtitle>
          </ContainerPay>

          {openCard && (
            <InfoCreditCard className="creditoPay">
              <RowModalLight>
                <TextModalLeft>
                  <strong>1x</strong> de <strong>R$ {valorTotal} </strong>
                </TextModalLeft>
                <TextModalRight>
                  Total: <strong>R$ {valorTotal}</strong>
                </TextModalRight>
              </RowModalLight>
              <RowModalDark>
                <TextModalLeft>
                  <strong>2x</strong> de <strong>R$ {valor2x} </strong>
                </TextModalLeft>
                <TextModalRight>
                  Total: <strong>R$ {valorTotal2x}</strong>
                </TextModalRight>
              </RowModalDark>
              <RowModalLight>
                <TextModalLeft>
                  <strong>3x</strong> de <strong>R$ {valor3x} </strong>
                </TextModalLeft>
                <TextModalRight>
                  Total: <strong>R$ {valorTotal3x}</strong>
                </TextModalRight>
              </RowModalLight>
              <RowModalDark>
                <TextModalLeft>
                  <strong>4x</strong> de <strong>R$ {valor4x} </strong>
                </TextModalLeft>
                <TextModalRight>
                  Total: <strong>R$ {valorTotal4x}</strong>
                </TextModalRight>
              </RowModalDark>
              <RowModalLight>
                <TextModalLeft>
                  <strong>5x</strong> de <strong>R$ {valor5x} </strong>
                </TextModalLeft>
                <TextModalRight>
                  Total: <strong>R$ {valorTotal5x}</strong>
                </TextModalRight>
              </RowModalLight>
              <RowModalDark>
                <TextModalLeft>
                  <strong>6x</strong> de <strong>R$ {valor6x} </strong>
                </TextModalLeft>
                <TextModalRight>
                  Total: <strong>R$ {valorTotal6x}</strong>
                </TextModalRight>
              </RowModalDark>
              <RowModalLight>
                <TextModalLeft>
                  <strong>7x</strong> de <strong>R$ {valor7x} </strong>
                </TextModalLeft>
                <TextModalRight>
                  Total: <strong>R$ {valorTotal7x}</strong>
                </TextModalRight>
              </RowModalLight>
              <RowModalDark>
                <TextModalLeft>
                  <strong>8x</strong> de <strong>R$ {valor8x} </strong>
                </TextModalLeft>
                <TextModalRight>
                  Total: <strong>R$ {valorTotal8x}</strong>
                </TextModalRight>
              </RowModalDark>
              <RowModalLight>
                <TextModalLeft>
                  <strong>9x</strong> de <strong>R$ {valor9x} </strong>
                </TextModalLeft>
                <TextModalRight>
                  Total: <strong>R$ {valorTotal9x}</strong>
                </TextModalRight>
              </RowModalLight>
              <RowModalDark>
                <TextModalLeft>
                  <strong>10x</strong> de <strong>R$ {valor10x} </strong>
                </TextModalLeft>
                <TextModalRight>
                  Total: <strong>R$ {valorTotal10x}</strong>
                </TextModalRight>
              </RowModalDark>
              <RowModalLight>
                <TextModalLeft>
                  <strong>11x</strong> de <strong>R$ {valor11x} </strong>
                </TextModalLeft>
                <TextModalRight>
                  Total: <strong>R$ {valorTotal11x}</strong>
                </TextModalRight>
              </RowModalLight>
              <RowModalDark>
                <TextModalLeft>
                  <strong>12x</strong> de <strong>R$ {valor12x} </strong>
                </TextModalLeft>
                <TextModalRight>
                  Total: <strong>R$ {valorTotal12x}</strong>
                </TextModalRight>
              </RowModalDark>
              <TextCards>
                <strong>Cartões aceitos</strong>
              </TextCards>
              <Cards>
                <FaCcVisa fill="blue" />
                <FaCcMastercard />
                <ImageCard src={HiperIcon} />
                <FaCcAmex fill="#73C9EA" />
                <FaCcDinersClub fill="#004A97" />
                <ImageCard src={EloIcon} />
              </Cards>
            </InfoCreditCard>
          )}

          {openPix && (
            <InfoPix className="pixPay">
              <ParcelaPrice>R$ {valorPix}</ParcelaPrice>
              <Text>
                À vista com <strong>Pix</strong>
              </Text>
              <ButtonGreen>
                <ImPriceTags />
                {discountPix}% OFF no Pix
              </ButtonGreen>
              <Text>
                O pagamento é instantâneo e não pode ser parcelado. Após a
                finalização da sua compra, será gerado um QR Code para
                pagamento.
              </Text>
            </InfoPix>
          )}

          <ButtonClose onClick={onCloseModal}>FECHAR</ButtonClose>
        </ModalWrapper>
      </Modal>

      <RowBnt>
        <ButtonGreen>
          <img src={FreteIcon} alt="Frete Icon" width="17px" />
          Frete grátis
        </ButtonGreen>
        <ButtonGreen>
          <img src={BilletIcon} alt="Billet Icon" width="17px" />
          R$ {valorPix} no Pix
        </ButtonGreen>
      </RowBnt>
    </main>
  )
}

export { Price }
