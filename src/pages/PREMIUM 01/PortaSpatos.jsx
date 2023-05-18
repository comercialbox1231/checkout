import React, { useRef, useEffect } from "react"
import { Button } from "../../components/Button"
import { HeaderPromotion } from "../../components/HeaderPromotion"
import { LogoComBanner } from "../../components/LogoComBanner"
import { GlobalStyle } from "../../styles/global"
import CarrosselMain from "../../components/CarrosselMain"
import { Price } from "../../components/Price"
import { Estoque } from "../../components/Estoque"
import { Cronometro } from "../../components/Cronometro"
// import { EuQueroAgora } from "../../components/ButtonQueroAgora"
import DivisorSectionFourth from "../../assets/fourth-divisor.svg"
import { Garantia } from "../../components/Garantia"
import { CardProduct } from "../../components/CardProduct"
import { Faq } from "../../components/Faq"
// import { CarrosselSecundary } from "../../components/CarrosselSecundary"
import { Footer } from "../../components/Footer"
import { Text } from "../../components/Text"
import { Titulo } from "../../components/Titulo"
import { ImageComponent } from "../../components/ImagesComponent"
import { useNavigate, useParams } from "react-router-dom"
import {
  Container,
  Row,
  PriceCtn,
  // ButtonCtn,
  ElementDivisionTwo,
  Section,
  TituloText,
  TextItem,
} from "./styles"

import { FrameDefault } from "./db"
import ObsDownButton from "../../components/ObsDownButton"

function PortaSapatos() {
  const Db = FrameDefault
  const navigate = useNavigate()

  const handleCheckout = () => {
    navigate(`/checkout/${Db.id}`)
  }

  const campoRef = useRef(null)
  const price = Db.Price.preco

  const handleButtonClick = () => {
    const links = {
      productLink: "https://adquirindo.mycartpanda.com/checkout/74146008:1",
    }

    const link = links.productLink
    window.open(link, "_self")

    fbq("track", "AddToCart", {
      content_type: Db.Price.tituloProduto,
      value: price,
      currency: "BRL",
    })
  }

  // const showPricePix = price - price * 0.12
  const showCortPrice = price * 2
  const minhaSecaoRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  console.log(Db.Price.preco12x())

  return (
    <>
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

          <Row>
            <CarrosselMain acessDb={Db.CarouselPrincipal} />

            <PriceCtn id="sectionRef" ref={minhaSecaoRef}>
              <Price
                title={Db.Price.tituloProduto}
                parcelas="3x"
                cutPrice={showCortPrice.toFixed(2)}
                parcelaPrice={(price * 0.3535).toFixed(2)}
                valorTotal={price}
                valor2x={Db.Price.preco2x()}
                valor3x={Db.Price.preco3x()}
                valor4x={Db.Price.preco4x()}
                valor5x={Db.Price.preco5x()}
                valor6x={Db.Price.preco6x()}
                valor7x={Db.Price.preco7x()}
                valor8x={Db.Price.preco8x()}
                valor9x={Db.Price.preco9x()}
                valor10x={Db.Price.preco10x()}
                valor11x={Db.Price.preco11x()}
                valor12x={Db.Price.preco12x()}
                valorPix={Db.Price.precoPix()}
                discountPix="12.02"
              />
              {/* <ButtonCtn> */}

              <Button
                title="COMPRAR AGORA"
                definedClick={handleCheckout}
              ></Button>

              <ObsDownButton
                infoCupom={Db.infoCupom.infoCupom}
                quantifyCupom={Db.infoCupom.quantifyCupom}
              />

              {/* </ButtonCtn> */}
              <Estoque quantidade={21} />
              <Cronometro time={1400000} />
            </PriceCtn>
          </Row>
        </section>

        <Section className="description-page">
          <Titulo tituloText={Db.Descricao.primeiroTitulo} />
          <Text textItem={Db.Descricao.descricao1} />
          <Text textItem={Db.Descricao.descricao2} />

          <TituloText>{Db.Descricao.segundoTitulo}</TituloText>
          <TextItem>{Db.Descricao.descricaoAspirador}</TextItem>
          <ImageComponent imagesrc={Db.Descricao.image1} />

          <Titulo tituloText={Db.Descricao.terceiroTitulo} />
          <Text textItem={Db.Descricao.descricao3} />
          <ImageComponent imagesrc={Db.Descricao.image2} />
          <ImageComponent imagesrc={Db.Descricao.image3} />

          <Titulo tituloText={Db.Descricao.quartoTitulo} />
          <Text textItem={Db.Descricao.descricao4} />
          <ImageComponent imagesrc={Db.Descricao.image4} />

          <Titulo tituloText={Db.Descricao.quintoTitulo} />
          <Text textItem={Db.Descricao.descricao5} />
          <ImageComponent imagesrc={Db.Descricao.image5} />

          <Titulo tituloText={Db.Descricao.sextoTitulo} />
          <Text textItem={Db.Descricao.descricao6} />
          <ImageComponent imagesrc={Db.Descricao.image6} />

          <Titulo tituloText={Db.Descricao.setimoTitulo} />
          <Text textItem={Db.Descricao.descricao7} />
          <ImageComponent imagesrc={Db.Descricao.image7} />

          <div style={{ marginBottom: "20px" }}>
            <span style={{ fontWeight: "bold" }}>
              {Db.Descricao.ItemFinal01}:
            </span>{" "}
            <h5 style={{ fontWeight: "normal" }}>
              {Db.Descricao.descricaoFinal01}
            </h5>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <span style={{ fontWeight: "bold" }}>
              {Db.Descricao.ItemFinal02}:
            </span>{" "}
            <h5 style={{ fontWeight: "normal" }}>
              {Db.Descricao.descricaoFinal02}
            </h5>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <span style={{ fontWeight: "bold" }}>
              {Db.Descricao.ItemFinal03}:
            </span>{" "}
            <h5 style={{ fontWeight: "normal" }}>
              {Db.Descricao.descricaoFinal01}
            </h5>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <span style={{ fontWeight: "bold" }}>
              {Db.Descricao.ItemFinal04}:
            </span>{" "}
            <h5 style={{ fontWeight: "normal" }}>
              {Db.Descricao.descricaoFinal01}
            </h5>
          </div>

          <ImageComponent imagesrc={Db.Descricao.imageProducao} />

          <span
            style={{
              marginBottom: "10px",
              borderBottom: "1px solid #000",
              paddingBottom: 15,
              borderBottomStyle: "dashed",
            }}
          >
            {Db.Descricao.centerMensage}
          </span>

          <span style={{ fontSize: 12, marginBottom: 10 }}>
            Se você comprou e sentiu que não é para você, não se preocupe. Basta
            enviar uma mensagem para{" "}
            <strong>(contato@adquireofertas.com)</strong> com as informações de
            contato e oferecemos um processo de substituição ou reembolso.
          </span>

          {/* <EuQueroAgora onClick={() => minhaSecaoRef.current.scrollIntoView({ behavior: "smooth" })} /> */}
        </Section>

        <ElementDivisionTwo
          style={{ marginTop: "20px" }}
          src={DivisorSectionFourth}
        />
        <Garantia
          seloGarantia="https://cdn.shopify.com/s/files/1/0685/7965/5974/files/10002427-removebg-preview.png?v=1676577219"
          titleGarantia="SATISFAÇÃO GARANTIDA!"
          textGarantiaOne="Nos orgulhamos em oferecer "
          textGarantiaStrongOne="produtos de alta qualidade e inspecioná-los antes do envio. "
          textGarantiaTwo="Entretanto, oferecemos Garantia incondicional de 30 dias para Trocas e Devoluções. Se o produto não atender sua expectativa nós devolvemos o seu dinheiro ou fazemos o envio de um novo pedido. Contate- nos em até 30 dias após o recebimento do pedido e solicite sua troca ou reembolso. Além dos 30 dias de troca, nossa empresa oferece mais 2 Anos corridos de "
          textGarantiaStrongTwo="Garantia Estendida "
          textGarantiaThree="para que você possa usufruir dessa experiência com mais tempo."
        />
        <ElementDivisionTwo
          src={DivisorSectionFourth}
          style={{ transform: "rotate(180deg)", transform: "scaleY(-1)" }}
        />

        <CardProduct
          infoPromo={Db.CardProduto.infoPromo}
          titleProduct={Db.CardProduto.tituloProduto}
          subtitleProduct={Db.CardProduto.subtituloProduto}
          imageProduct={Db.CardProduto.imageProduto}
          cutPriceValue={"R$ " + showCortPrice}
          parcelas="12"
          valorParcelas={(price * 0.1004).toFixed(2)}
          valorTotal={price.toFixed(2)}
          linkButton={() =>
            minhaSecaoRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />

        <Faq
          acessDb={Db.Faq}
          titlePage={Db.FaqTitulo}
          subtitlePage={Db.FaqSubtitulo}
        />

        {/* <EuQueroAgora onClick={() => minhaSecaoRef.current.scrollIntoView({ behavior: "smooth" })} /> */}

        {/* <CarrosselSecundary
          acessDb={Db.CarouselSecundario}
          subtitleCarrosselOne={Db.CarouselSecundarioTitle}


          imageFooter="https://cdn.shopify.com/s/files/1/0685/7965/5974/files/SE-Diver300M-007Edition-backPP-small.jpg?v=1675108791"
        /> */}

        <Footer
          paginaInicial="https://www.lojadquirindo.com.br"
          prazoEntrega="7 e 21 dias úteis"
        />
      </Container>
    </>
  )
}

export default PortaSapatos
