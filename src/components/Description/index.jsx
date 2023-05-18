import React from "react"

import { ButtonCtn } from "../../pages/sofa-cama-dobravel/styles"
import { Button } from "../../components/Button"
import { Selos } from "../../components/Selos"
import DivisorSectionTwoLeft from "../../assets/second-divisor-left.svg"
import DivisorSectionTwoRight from "../../assets/second-divisor-right.svg"

import {
  FirstDescription,
  ContainerDescription,
  ContainerDescriptionTwo,
  DescriptionLeft,
  DescriptionLeftTwo,
  DescriptionLeftThree,
  FirstCall,
  Text,
  SecondCall,
  DescriptionRight,
  DescriptionRightTwo,
  Video,
  ImageOne,
  SecondDescription,
  ContainerTitle,
  Seamaster,
  TitleProduct,
  SubtitleProduct,
  ImageMain,
  ThirdCall,
  Phrase,
  ImageTwo,
  ImageThree,
  ElementDivision,
  ThirdDescription,
  ImageQualities,
} from "./styles"

const Description = ({
  firstCall,
  secondCall,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
  text10,
  video1,
  video2,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  imageQualities,
  signature,
  titleProduct,
  subtitleProduct,
  imageMain,
  thirdCall,
  phrase1,
  phrase2,
  phrase3,
  fourthCall,
  fifthCall,
  sixthCall,
  seventhCall,
  eighthCall,
  ninthCall,
  linkButton,
}) => {
  return (
    <div>
      <FirstDescription>
        <ContainerDescription>
          <DescriptionLeft>
            <FirstCall>{firstCall}</FirstCall>
            <Text>{text1}</Text>
            <Text>{text2}</Text>
          </DescriptionLeft>
          <DescriptionRight>
            <Video
              src={video1}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></Video>
          </DescriptionRight>
        </ContainerDescription>

        <ContainerDescriptionTwo>
          <DescriptionLeft>
            <SecondCall>{secondCall}</SecondCall>
            <Text>{text3}</Text>
          </DescriptionLeft>
          <DescriptionRight>
            <ImageOne src={image1} alt="Imagem do produto" />
          </DescriptionRight>
        </ContainerDescriptionTwo>
        <ButtonCtn>
          <Button title="EU QUERO AGORA" link={linkButton} variant="second" />
          <Selos />
        </ButtonCtn>
      </FirstDescription>

      <SecondDescription>
        <ContainerTitle>
          <Seamaster>{signature}</Seamaster>
          <TitleProduct>{titleProduct}</TitleProduct>
          <SubtitleProduct>{subtitleProduct}</SubtitleProduct>
        </ContainerTitle>
        <ImageMain src={imageMain} alt="Foto do Produto" />

        <ContainerDescription style={{ justifyContent: "center" }}>
          <DescriptionLeftThree>
            <ThirdCall style={{ marginTop: "-10px" }}>{thirdCall}</ThirdCall>
            <Text style={{ textAlign: "center" }}>{text4}</Text>
            <Phrase style={{ marginBottom: "15px" }}>{phrase1}</Phrase>
          </DescriptionLeftThree>
          <DescriptionRight>
            <ImageTwo src={image2} alt="Imagem do produto" />
          </DescriptionRight>
        </ContainerDescription>

        <ContainerDescriptionTwo style={{ justifyContent: "center" }}>
          <DescriptionLeftThree>
            <ThirdCall style={{ marginTop: "20px" }}>{fourthCall}</ThirdCall>
            <Text style={{ textAlign: "center", marginBottom: "25px" }}>
              {text5}
            </Text>
          </DescriptionLeftThree>
          <DescriptionRight>
            <ImageThree src={image3} alt="Imagem do produto" />
          </DescriptionRight>
        </ContainerDescriptionTwo>

        <ContainerDescription>
          <DescriptionLeftThree>
            <ThirdCall>{fifthCall}</ThirdCall>
            <Text style={{ textAlign: "center", marginBottom: "20px" }}>
              {text6}
            </Text>
          </DescriptionLeftThree>
          <DescriptionRight>
            <ImageThree src={image4} alt="Imagem do produto" />
          </DescriptionRight>
        </ContainerDescription>

        <ContainerDescriptionTwo>
          <DescriptionLeftThree>
            <ThirdCall style={{ marginTop: "20px" }}>{sixthCall}</ThirdCall>
            <Text style={{ textAlign: "center", marginBottom: "20px" }}>
              {text7}
            </Text>
          </DescriptionLeftThree>
          <DescriptionRight>
            <ImageTwo src={image5} alt="Imagem do produto" />
          </DescriptionRight>
        </ContainerDescriptionTwo>

        <ContainerDescription>
          <DescriptionLeftThree>
            <ThirdCall>{seventhCall}</ThirdCall>
            <Text style={{ textAlign: "center", marginBottom: "20px" }}>
              {text8}
            </Text>
          </DescriptionLeftThree>
          <DescriptionRight>
            <Video
              src={video2}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></Video>
            <Phrase style={{ maxWidth: "500px" }}>{phrase2}</Phrase>
          </DescriptionRight>
        </ContainerDescription>
        <ButtonCtn>
          <Button title="EU QUERO AGORA" link={linkButton} variant="second" />
          <Selos />
        </ButtonCtn>
      </SecondDescription>

      <div style={{ marginTop: "-120px" }}>
        <ElementDivision src={DivisorSectionTwoLeft} />
        <ElementDivision src={DivisorSectionTwoRight} />
      </div>

      <ThirdDescription>
        <ThirdCall style={{ paddingTop: "30px" }}>{eighthCall}</ThirdCall>

        <ContainerDescription>
          <DescriptionLeft>
            <ImageOne src={image6} alt="Imagem do produto" />
          </DescriptionLeft>
          <DescriptionRightTwo>
            <Text>{text9}</Text>
          </DescriptionRightTwo>
        </ContainerDescription>

        <ImageQualities src={imageQualities} alt="Características do produto" />

        <ContainerDescription>
          <DescriptionLeft>
            <ThirdCall>{ninthCall}</ThirdCall>
            <Text>{text10}</Text>
          </DescriptionLeft>
          <DescriptionRight>
            <ImageTwo src={image7} alt="" />
            <Phrase style={{ maxWidth: "400px", marginTop: "15px" }}>
              {phrase3}
            </Phrase>
          </DescriptionRight>
        </ContainerDescription>
        <ButtonCtn>
          <Button title="EU QUERO AGORA" link={linkButton} variant="second" />
          <Selos />
        </ButtonCtn>
      </ThirdDescription>
    </div>
  )
}

export { Description }
