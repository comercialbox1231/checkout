import React from "react"
import { Button } from "../../components/Button"
import { HeaderPromotion } from "../../components/HeaderPromotion"
import { Logo } from "../../components/Logo"
import { GlobalStyle } from "../../styles/global"
import CarrosselMain from "../../components/CarrosselMain"
import { Price } from "../../components/Price"
import { Estoque } from "../../components/Estoque"
import { Cronometro } from "../../components/Cronometro"
import DivisorSectionOne from "../../assets/first-divisor.svg"
import DivisorSectionThree from "../../assets/third-divisor.svg"
import DivisorSectionFourth from "../../assets/fourth-divisor.svg"
import { Description } from "../../components/Description"
import { Especificacoes } from "../../components/Especificacoes"
import { Garantia } from "../../components/Garantia"
import { CardProduct } from "../../components/CardProduct"
import { Faq } from "../../components/Faq"
import { Selos } from "../../components/Selos"
import { CarrosselSecundary } from "../../components/CarrosselSecundary"
import { Footer } from "../../components/Footer"
import {
  Container,
  Row,
  PriceCtn,
  ButtonCtn,
  ElementDivision,
  ElementDivisionTwo,
  Section,
} from "./styles"

import { FrameDefault } from './db';

function SofaCamaDobravel() {

  const Db = FrameDefault

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
          <Logo logo={Db.LogoMarca.link} AltLogo={Db.LogoMarca.alt} />
          <Row>
            <CarrosselMain />

            <PriceCtn>
              <Price
                signature="Seamaster"
                title="CO‑AXIAL MASTER EDIÇÃO 007"
                subtitle="+ ESTOJO PREMIUM DE LUXO"
                parcelas="12x"
                cutPrice="1.589,90"
                parcelaPrice="76,42"
                valorTotal="917,13"
                valor2x="458,56"
                valor3x="305,71"
                valor4x="229,28"
                valor5x="183,42"
                valor6x="152,85"
                valor7x="131,01"
                valor8x="114,64"
                valor9x="101,90"
                valor10x="91,71"
                valor11x="83,37"
                valor12x="76,42"
                valorPix="806,89"
                discountPix="12.02"
              />
              <ButtonCtn>
                <Button title="COMPRAR AGORA" link="https://google.com.br" />
              </ButtonCtn>
              <Estoque quantidade={10} />
              <Cronometro time={1400000} />
            </PriceCtn>
          </Row>
        </section>

        <ElementDivision src={DivisorSectionOne} />

        <Section className="description-page">
          <Description
            linkButton={Db.Descricao.linkChekout}
            firstCall={Db.Descricao.primeiroTitulo}
            text1={Db.Descricao.descricao1}
            text2="Histórias inesquecíveis, são feitas com pessoas inesquecíveis, seja uma delas, igual James Bond em todos os seus filmes, muitos temiam a ele, poucos eram os seus amigos, mas ninguém de fato sabia do que ele era capaz!"
            video1="https://www.youtube.com/embed/_6Nt8xwg3Vo"
            secondCall=""
            text3={Db.Descricao.descricao2}
            image1={Db.Descricao.image1}
            signature="Seamaster"
            titleProduct="DIVER 300M"
            subtitleProduct="EDIÇÃO 007"
            imageMain="https://cdn.shopify.com/s/files/1/0685/7965/5974/files/img-header-SE-Diver300M-007-immersive-small.jpg?v=1675105967"
            thirdCall="A OMEGA E 007: SEM TEMPO PARA MORRER"
            text4="No seu 9.º filme com a OMEGA, James Bond embarca numa missão para salvar um cientista raptado que acaba se revelando mais traiçoeiro que o esperado. Como sempre, 007 está equipado com o seu fiel Seamaster enquanto segue o rasto de um misterioso vilão armado com tecnologia perigosa."
            phrase1="“Este filme marca os 25 anos da parceria OMEGA e James Bond, que começou em 1995.”"
            image2="https://cdn.shopify.com/s/files/1/0685/7965/5974/files/SE-Diver300M-007Edition-21090422001001-closeupDial-small_11.jpg?v=1675108055"
            fourthCall="O RELÓGIO PERFEITO PARA O ESPIÃO MAIS ADMIRADO DO MUNDO"
            text5="Lindy Hemming, foi a responsável pelo casting do relógio. Ela Afirmou e estava convencida que o Comandante Bond, um homem da marinha, mergulhador e cavalheiro discreto, usaria o Seamaster com o mostrador tropical e combinou na perfeição."
            image3="https://cdn.shopify.com/s/files/1/0685/7965/5974/files/omega-seamaster-diver-300m-co-axial-master-chronometer-42-mm-21090422001001-gallery-4-large.jpg?v=1675108791"
            fifthCall="ESCURO E VINTAGE"
            text6="Nosso mostrador é feito em castanho “tropical” cujo ele e a luneta são feitos em alumínio de 1•linha. Estes elementos têm uma aparência clássica, graças à Super-LumiNova vintage, que preenche a escala de mergulho, os ponteiros e índices escurecidos."
            image4="https://cdn.shopify.com/s/files/1/0685/7965/5974/files/omega-seamaster-diver-300m-co-axial-master-chronometer-42-mm-21090422001001-gallery-3-large.jpg?v=1675108791"
            sixthCall="QUALIDADE MESTRE"
            text7="Na qualidade de Master Chronometer, o relógio é resistente a poderosos campos magnéticos de 15.000 gauss. Foi 4 anos até o ganhar vida e entrar em ação."
            image5="https://cdn.shopify.com/s/files/1/0685/7965/5974/files/se-diver300m-007edition-slideshow3-nato-small_1.jpg?v=1675108293"
            seventhCall="UM NOVO VISUAL PARA O SEU RELÓGIO"
            text8="Ligeiramente mais fino do que os modelos Diver 300M normais, graças ao acabamento abaulado do vidro de safira e uma inovadora fivela ajustável."
            video2="https://www.youtube.com/embed/1IH0VzpM-4Y"
            phrase2="“É um relógio incrivelmente confortável de usar, ele faz parte de mim, da minha história, carreira e vida.” -Daniel Craig"
            eighthCall="MOVIMENTO CALIBRE ÓMEGA 8806"
            image6="https://cdn.shopify.com/s/files/1/0685/7965/5974/files/watch-calibre-8806.png?v=1675108055"
            text9='Certificação Master aprovado pelo METAS. Resistente a campos magnéticos, Balanço livre com espiral de silício, corda automática em ambos os sentidos. Acabamento luxuoso especial com rotor e pontes revestidos a ródio “Côtes de Genève" em arabesco.'
            imageQualities="https://cdn.shopify.com/s/files/1/0685/7965/5974/files/Sem_Titulo-1.png?v=1671504654"
            ninthCall="MEMÓRIAS DO SEAMASTER*"
            text10="A influência e os conselhos de Craig tiveram um papel importante no design final e os seus conhecimentos de James Bond foram cruciais na criação de um relógio adequado ao espião."
            image7="https://cdn.shopify.com/s/files/1/0685/7965/5974/files/se-diver300m-007edition-slideshow1-small_1.jpg?v=1675108293"
            phrase3="“Decidimos que um relógio elegante seria fundamental para um homem militar e charmoso como 007.”"
          />
        </Section>

        <ElementDivisionTwo
          src={DivisorSectionThree}
          style={{ transform: "rotate(180deg)" }}
        />

        <Section className="especificacoes-page">
          <Especificacoes
            titlePage="ESPECIFICAÇÕES DO SEAMASTER"
            especificacaoOne="Bracelete: "
            itemOne="Material: "
            descricaoOne="Titânio"
            itemTwo="Tipo de fivela: "
            descricaoTwo="Fecho de báscula"
            itemThree="Material da fivela: "
            descricaoThree="Titânio"
            especificacaoTwo="Mostrador: "
            itemFour="Cor do mostrador: "
            descricaoFour="Castanho"
            itemFive="Vidro: "
            descricaoFive="Vidro de safira resistente a riscos, convexo com tratamento antirreflexo no interior."
            especificacaoThree="Caixa: "
            itemSix="Peso total do produto (aprox.): "
            descricaoSix="93 g"
            itemSeven="Entre as alças: "
            descricaoSeven="20 mm"
            itemEight="Espessura: "
            descricaoEight="13.0 mm"
            itemNine="Caixa: "
            descricaoNine="Titânio"
            itemTen="Diâmetro da caixa: "
            descricaoTen="42 mm"
            itemEleven="Resistência à água: "
            descricaoEleven="30 bars (300 metros/1000 pés)"
            linkButton="https://google.com.br"
          />
        </Section>

        <ElementDivisionTwo src={DivisorSectionFourth} />

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
          titleProduct="CO‑AXIAL MASTER EDIÇÃO 007"
          subtitleProduct="+ Estojo Premium de Luxo"
          imageProduct="https://cdn.shopify.com/s/files/1/0685/7965/5974/files/gift_plus.png?v=1675109953"
          cutPriceValue="R$ 1.589,90"
          parcelas="12"
          valorParcelas="76,42"
          valorTotal="917,13"
          linkButton="https://google.com.br"
        />

        <Faq
          titlePage="DÚVIDAS FREQUENTES"
          subtitlePage="Confira as principais dúvidas dos clientes."
          questionOne="Quais os cuidados devo ter com o meu Ômega?"
          responseOne="Evite usá-lo em locais como água salgada ou cloro, isso previne o
                desbotamento da cor e auxilia na durabilidade. Limpe o vidro com
                toalha de algodão, mesmo sendo vidro ante riscos a toalha de
                algodão mantém o brilho do seu relógio por muitos anos."
          questionTwo="Como acertar a hora num relógio OMEGA?"
          responseTwo="A configuração da hora é explicada no manual do usuário que você recebeu no momento da compra."
          questionThree="Posso fazer o pagamento no ato de recebimento do OMEGA?"
          responseThree="Não. Seu pedido é enviado mediante aprovação prévia do seu pagamento pela instituição bancária."
          questionFour="Quais as formas de pagamento?"
          responseFour="Aceitamos todos cartões de crédito, pix e boleto bancário . No cartão, você pode parcelar sua compra em até 12 vezes, sendo até 3x sem Juros. Valendo Lembrar que pagamentos no Pix tem um desconto incluso de 12.02% !"
          questionFive="É seguro comprar neste site?"
          responseFive="Sim! Está loja é autenticada e possui certificado SSL de segurança, garantindo que seus dados de pagamentos sejam protegidos por criptografia de acordo com os mais altos padrões de segurança."
          questionSix="Por qual empresa é feita a entrega e qual o prazo?"
          responseSix="Nosso produto é entregue pelas Agências dos Correios do Brasil. O prazo para entrega padrão é de aproximadamente 6 a 12 dias dias úteis com o Frete Grátis (Para todo o Brasil). Após aprovação do pagamento. Podendo ser entregue antes deste prazo ou após este prazo por alguma intercorrência."
          questionSeven="Como acompanhar o status do meu pedido?"
          responseSeven="Todos os pedidos são enviados o código de rastreamento. Ele será enviado automaticamente para o seu e-mail e WhatsApp. Você pode rastrear seu pedido sempre que quiser."
        />
        <ButtonCtn>
          <Button
            title="EU QUERO AGORA"
            link="https://google.com.br"
            variant="second"
          />
          <Selos />
        </ButtonCtn>

        <CarrosselSecundary
          titleCarrossel="04 "
          destaqueTitleCarrossel="VERSÕES"
          subtitleSmall="DIVER 300M"
          subtitleCarrosselOne="CO-AXIAL MASTER"
          subtitleCarrosselTwo="CHRONOMETER 42 MM"
          image1="https://cdn.shopify.com/s/files/1/0685/7965/5974/files/preview_pd.png?v=1675274664"
          materialProduct1="Aço e nylon"
          titleProduct1="“60th anniversary”"
          subtitleProduct1="James Bond"
          image2="https://cdn.shopify.com/s/files/1/0685/7965/5974/files/preview_pd_nato_pr.png?v=1675361223"
          materialProduct2="Tecido Bracelete"
          titleProduct2="SpeedMaster"
          subtitleProduct2="Moonwatch"
          image3="https://cdn.shopify.com/s/files/1/0685/7965/5974/files/preview_pd_silver_pr.png?v=1675276157"
          materialProduct3="Aço e Aço"
          titleProduct3="SpeedMaster"
          subtitleProduct3="Moonwatch"
          image4="https://cdn.shopify.com/s/files/1/0685/7965/5974/files/preview_pd_snoopy_pr.png?v=1675315673"
          materialProduct4="Tecido em Bracelete"
          titleProduct4='"Silver Snoop'
          subtitleProduct4='Award"'

          imageFooter="https://cdn.shopify.com/s/files/1/0685/7965/5974/files/SE-Diver300M-007Edition-backPP-small.jpg?v=1675108791"

        />

        <Footer
          paginaInicial="https://www.lojadquirindo.com.br"
          prazoEntrega="7 e 21
                  dias úteis"
        />
      </Container>
    </>
  )
}



export default SofaCamaDobravel
