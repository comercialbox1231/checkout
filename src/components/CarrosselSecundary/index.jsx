import React, { useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import "swiper/css"
import "swiper/css/bundle"
import "swiper/css/thumbs"
import { Link } from "react-router-dom"

import {
  CarrosselContainer,
  ContainerText,
  FooterCarrossel,
  HeaderCarrossel,
  ImageFooter,
  ImageMain,
  SwiperContainer,
  TitleCarrossel,
  TitleProduct,
  TextFooter,
  LinkOpacity,
  PriceComponent,
  SubTitleProduct,
  EmAte,
  EconomizeCard
} from "./styles"

const CarrosselSecundary = ({
  imageFooter,
  acessDb
}) => {

  return (
    <>
      <CarrosselContainer>
        <HeaderCarrossel>
          <TitleCarrossel >
            PROMOÇÃO EXCLUSIVA
          </TitleCarrossel>
          <SubTitleProduct style={{ margin: '10px auto 5px' }}>
            CONHEÇA NOSSOS PRODUTOS
          </SubTitleProduct>
        </HeaderCarrossel>

        <SwiperContainer>
          <Swiper
            modules={[Navigation]}
            slidesPerView={2}
            loopedSlides={1}
            spaceBetween={0}
            navigation={true}
            loop={true}
            onNavigationShow={true}
          >

            {Object.entries(acessDb).map((i) =>
              <SwiperSlide>
                <Link to={i[1].link} className="link_product">
                  <div style={{ position: 'relatives', width: '90%', margin: "auto" }}>
                    <EconomizeCard>
                      <span> Economize {i[1].economizeX}</span>
                    </EconomizeCard>
                    <ImageMain src={i[1].image} alt={i[1].alt} />
                  </div>
                  <TitleProduct>
                    {i[1].nome}
                  </TitleProduct>
                  <EmAte>
                    {i[1].EmAte}
                  </EmAte>
                  <PriceComponent>
                    <span className="price">{i[1].priceCs}</span>
                    <span className="cortPrice">{i[1].cortPriceCs}</span>
                  </PriceComponent>
                </Link>
              </SwiperSlide>
            )}
          </Swiper>
        </SwiperContainer>
      </CarrosselContainer>

      <FooterCarrossel>
        <ContainerText>
          <TextFooter
            style={{ fontSize: "9px", color: "#e2e2e2", marginBottom: "8px" }}
          >
            Promoções Exclusivas para você
          </TextFooter>
          <TextFooter
            style={{ borderBottom: "1px solid #FFFFFF", paddingBottom: "4px" }}
          >
            APENAS AQUI, APROVEITE
          </TextFooter>
        </ContainerText>
        <ImageFooter src={"https://cdn.shopify.com/s/files/1/0738/4249/1684/files/BannerAdquira.png?v=1680275949" || imageFooter} alt="Imagem do produto" />

        <LinkOpacity href={Link} />
      </FooterCarrossel>
    </>
  )
}

export { CarrosselSecundary }
