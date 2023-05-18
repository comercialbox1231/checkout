import styled from "styled-components";

export const CarrosselContainer = styled.div`
  width: 100%;
  max-width: 450px;
  margin-top: 5px;
  position: relative;

  .swiper-backface-hidden .swiper-slide {
    margin-right: 0 !important;
  }

  .swiper-thumbs .swiper-wrapper .swiper-slide {
    width: 25% !important;
    padding: 0 3px !important;
  }

  @media screen and (min-width: 1280px) {
    margin-top: -135px;
  }
`

export const ImageMain = styled.img`
  width: 100%;
  height: auto;
  max-height: 360px;
  object-fit: contain;
  cursor: pointer;
`

export const ThumbsContainer = styled.div`
  width: 100%;
  height: auto;
  max-height: 90px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageThumbs = styled.img`
  width: 100%;
  height: auto;
  max-height: 90px;
  /* border: 1px solid #c4c4c4; */
  border-radius: 6px;
  object-fit: contain;
  cursor: pointer;
`