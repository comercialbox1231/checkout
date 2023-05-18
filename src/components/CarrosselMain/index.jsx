import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Thumbs } from "swiper"
import "swiper/css"
import "swiper/css/bundle"
import "swiper/css/thumbs"
import {
  CarrosselContainer,
  ImageMain,
  ThumbsContainer,
  ImageThumbs
} from "./styles"

function CarrosselMain({ acessDb }) {

  const [activeThumb, setActiveThumb] = useState();

  return (
    <>
      <CarrosselContainer>
        <Swiper
          modules={[Navigation, Thumbs]}
          slidesPerView={1}
          navigation={true}
          thumbs={{ swiper: activeThumb }}
          loop={true}
        >

          {Object.entries(acessDb).map((i) => <SwiperSlide >
            <ImageMain src={i[1].image} alt={i[1].alt} />
          </SwiperSlide>)}

        </Swiper>
        <Swiper
          onSwiper={setActiveThumb}
          watchSlidesProgress
          modules={[Navigation, Thumbs]}
          slidesPerView={4}
          spaceBetween={30}
          navigation
          loop="true"
        >
          <ThumbsContainer>

            {Object.entries(acessDb).map((i) => <SwiperSlide>
              <ImageThumbs src={i[1].image} alt={i[1].alt} />
            </SwiperSlide>)}
          </ThumbsContainer>
        </Swiper>
      </CarrosselContainer>
    </>
  )
}

export default CarrosselMain 
