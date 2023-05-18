import React, { useEffect } from "react"
import "swiper/css"
import "swiper/css/bundle"
import "swiper/css/thumbs"

import * as S from './styles'
import { Wrapper } from "../../styles/global"
import { MdVerified } from "react-icons/md"

import { BsStarFill, BsStarHalf } from "react-icons/bs"

const Avaliables = ({
  imageFooter,
  acessDb
}) => {
  return (
    <Wrapper>

      <h1 style={{ fontSize: '20px', margin: "20px 0" }}>Experiência dos Nossos Clientes</h1>

      {
        Object.entries(acessDb).map((i) => <S.ContainerAvaliable>
          <div className="campText">
            <span className="ctnName">
              <h4 className="name">{i[1].name}</h4>
              <MdVerified />
            </span>

            <div className="stars">
              <ul>
                <li><BsStarFill color="#f2c924" /></li>
                <li><BsStarFill color="#f2c924" /></li>
                <li><BsStarFill color="#f2c924" /></li>
                <li><BsStarFill color="#f2c924" /></li>
                <li>{i[1].starsIcon === '1' ? <BsStarFill color="#f2c924" /> : <BsStarHalf color="#f2c924" />}</li>
              </ul>
            </div>

            <h5 className="description">{i[1].description}</h5>

          </div>

          <div className="campImg">
            <img src={i[1].imageLink} alt="" />
          </div>
        </S.ContainerAvaliable>)
      }
    </Wrapper>
  )
}

export { Avaliables }
