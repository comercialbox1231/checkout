import styled from "styled-components"

export const FirstDescription = styled.div`
  width: 100%;
  background-color: #f3f3f3;
  margin-top: -5px;
  padding-bottom: 60px;
`

export const ContainerDescription = styled.div`
  width: 100%;
  padding: 60px 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media screen and (min-width: 300px) and (max-width: 1280px) {
    padding: 30px 10px 10px;
  }
`

export const ContainerDescriptionTwo = styled.div`
  width: 100%;
  padding: 0 10px;
  margin: 20px 0;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const DescriptionLeft = styled.div`
  width: 100%;
  max-width: 574px;
  margin-left: 135px;

  @media screen and (min-width: 300px) and (max-width: 1280px) {
    margin-left: 0;
  }
`

export const DescriptionLeftTwo = styled.div`
  width: 100%;
  max-width: 574px;
  margin-left: 135px;

  @media screen and (max-width: 480px) {
    margin-left: 0;
    max-width: 350px;
  }
`

export const DescriptionLeftThree = styled.div`
  width: 100%;
  max-width: 574px;
  margin-left: 135px;

  @media screen and (min-width: 300px) and (max-width: 430px) {
    margin-left: 0;
    max-width: 370px;
  }

  @media screen and (min-width: 431px) {
    margin-left: 10px;
    max-width: 574px;
  }
`

export const FirstCall = styled.h1`
  color: #0059c7;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 22px;
  text-align: left;
  margin-bottom: 10px;

  @media screen and (min-width: 300px) and (max-width: 1280px) {
    text-align: center;
  }
`

export const Text = styled.p`
  font-size: 20px;
  line-height: 1.4;
  text-align: left;
  margin-bottom: 5px;

  @media screen and (min-width: 300px) and (max-width: 1280px) {
    font-size: 16px;
    text-align: center;
  }
`

export const SecondCall = styled.h1`
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 22px;
  text-align: left;
  margin-bottom: 10px;

  @media screen and (min-width: 300px) and (max-width: 1280px) {
    text-align: center;
  }
`

export const DescriptionRight = styled.div`
  width: 100%;
  max-width: 574px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DescriptionRightTwo = styled.div`
  width: 100%;
  max-width: 574px;

  @media screen and (max-width: 480px) {
    max-width: 320px;
  }
`

export const Video = styled.iframe`
  width: 100%;
  height: 315px;
  border: none;
  margin: 20px 0;

  @media screen and (max-width: 490px) {
    width: 100%;
    max-width: 360px;
    height: 230px;
  }
`

export const ImageOne = styled.img`
  max-width: 450px;
  width: 100%;
  height: 450px;
  object-fit: contain;

  @media screen and (max-width: 350px) {
    width: 100%;
    height: 350px;
  }
`

export const SecondDescription = styled.div`
  width: 100%;
  background-color: #f3f3f3;
  padding-bottom: 140px;
`

export const ContainerTitle = styled.div`
  width: 100%;
  position: absolute;
  margin-top: 40px;
`

export const Seamaster = styled.p`
  font-family: "Passions Conflict", cursive;
  font-size: 40px;
  font-weight: 200;
  line-height: 1.2;
  text-align: center;
  color: #ffffff;
`

export const TitleProduct = styled.p`
  font-size: 19px;
  line-height: 18px;
  letter-spacing: 4px;
  color: #ffffff;
`

export const SubtitleProduct = styled.p`
  font-size: 13px;
  line-height: 28px;
  letter-spacing: 2px;
  color: #ffffff;
`

export const ImageMain = styled.img`
  width: 100%;
  height: 720px;
  object-fit: cover;

  @media screen and (max-width: 480px) {
    height: auto;
  }
`
export const ThirdCall = styled.h1`
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 22px;
  text-align: center;
  margin-bottom: 10px;

  @media screen and (min-width: 300px) and (max-width: 1280px) {
    text-align: center;
  }
`

export const Phrase = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 700;
  font-style: italic;
  line-height: 1.5;
  color: #0059c7;
`

export const ImageTwo = styled.img`
  width: 400px;
  height: 430px;
  margin-top: 10px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 490px) {
    width: 100%;
    max-width: 350px;
    height: auto;
    max-height: 380px;
  }
`

export const ImageThree = styled.img`
  width: 100%;
  height: 340px;
  margin-top: 10px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 490px) {
    width: 100%;
    max-width: 360px;
    height: 197px;
  }
`

export const ElementDivision = styled.img`
  width: 50%;
  height: 120px;

  @media screen and (max-width: 479px) {
    height: 40px;
  }
`

export const ThirdDescription = styled.div`
  width: 100%;
  background-color: #ffffff;
  margin-top: -5px;
  padding-top: 25px;
`

export const ImageQualities = styled.img`
  width: 380px;
  height: 380px;
  margin-top: -70px;

  @media screen and (min-width: 300px) and (max-width: 1280px) {
    width: 250px;
    height: 250px;
    margin-top: 0;
  }
`
