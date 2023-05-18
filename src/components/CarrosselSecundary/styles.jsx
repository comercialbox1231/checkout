import styled from "styled-components"

export const CarrosselContainer = styled.div`
  width: 100%;
  margin: 60px auto;
  padding: 20px 50px;

  .swiper-backface-hidden .swiper-slide {
    margin-right: 0 !important;
  }

  .swiper-thumbs .swiper-wrapper .swiper-slide {
    width: 25% !important;
    padding: 0 3px !important;
  }

  .link_product {
    text-decoration: none;
  }

  @media screen and (max-width: 480px) {
    margin: 30px auto 15px auto;
    padding: 0;
  }
`

export const HeaderCarrossel = styled.div``

export const TitleCarrossel = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 0.24em;
  color: #c40d2e;

  @media screen and (max-width: 375px) {
    font-size: 0.9rem;
  }
`

export const SwiperContainer = styled.div`
  width: 90%;
  padding: 15px 0px 10px;
  margin: 0 auto;



  @media screen and (max-width: 480px) {
    width: 100%;
  }
`

export const ImageMain = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: contain;
  cursor: pointer;

  @media screen and (max-width: 490px) {
    max-height: 250px;
  }

  @media screen and (min-width: 491px) and (max-width: 890px) {
    max-height: 400px;
  }
`

export const EconomizeCard = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;

  span {
    background: rgb(222, 42, 42);
    color: #fff;
    display: inline-block;
    padding: 2.5px 5px;
    vertical-align: top;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: .5px;
    border-radius: min(0px ,2px);
  }
`

export const TitleProduct = styled.p`
    display: block;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.05em;
    color: rgb(40, 40, 40);
    width: 85%;
    margin: 5px auto 2px;
`
export const PriceComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  .cortPrice {
    font-size: 14px;
    text-decoration: line-through;
    opacity: .7;
    font-weight: 400;
    color: #282828;
  }

  .price {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.05em;
    color: rgb(222, 42, 42);
  }
`

export const EmAte = styled.h4`
  font-size: 10px;
  color: rgb(0, 0, 0);
  text-align: center;
  margin-bottom: 2px;
`

export const ApartirDe = styled.span`
  font-size: .75rem;
  color: #000;
`

export const SubTitleProduct = styled.p`
    margin: 10px auto 5px;
    font-size: 17px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0.17em;
    color: rgb(172 0 0);

    @media screen and (max-width: 375px) {
      letter-spacing: 0.05em;
    }
`

export const FooterCarrossel = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-height: 590px;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    max-height: 185px;
  }
`

export const ContainerText = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;

  @media screen and (max-width: 480px) {
    height: 185px;
  }
`

export const TextFooter = styled.p`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 3px;
  color: #ffffff;
  cursor: pointer;
`

export const ImageFooter = styled.img`
  width: 100%;
  height: 590px;
  object-fit: cover;

  @media screen and (max-width: 480px) {
    height: 185px;
  } ;
`

export const LinkOpacity = styled.a`
  position: absolute;
  top: 0;
  left: 0;

  z-index: 1;

  width: 100%;
  height: 100%;

  background: #000;
  opacity: 0.4;
`
