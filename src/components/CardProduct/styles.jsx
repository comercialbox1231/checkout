import styled from "styled-components"

export const Container = styled.div`
  width: 97%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  margin: 20px auto;
`

export const ButtonBest = styled.div`
  width: 154px;
  background: #2c2825;
  background: linear-gradient(180deg, #2c2825 40%, #767676 100%);
  border-radius: 50px;
  box-shadow: 0px 10px 50px 0px rgb(0 0 0 / 18%);
  padding: 13px 20px;
  margin-bottom: -22px;

  font-size: 13px;
  font-weight: 600;
  color: #ffffff;

  position: relative;
`

export const HeaderCard = styled.div`
  width: 100%;
  min-height: 75px;
  background-color: #2c2825;
  border-radius: 10px 10px 0px 0px;
`

export const TitleProduct = styled.p`
  font-size: 18px;
  color: #fff;
  padding-top: 25px;
`

export const BodyCard = styled.div`
  width: 100%;
  background-color: #f4f1ed;
  border: 1px solid #2c2825;
  border-radius: 0 0 10px 10px;
  padding: 30px 10px;
`

export const Main = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const ImageProduct = styled.img`
  width: 100%;
  max-width: 380px;
  height: auto;
  max-height: 380px;
  border-radius: 7px;

  @media screen and (max-width: 430px) {
    max-width: 130px;
    max-height: 130px;
  }

  @media screen and (min-width: 431px) and (max-width: 835px) {
    max-width: 200px;
    max-height: 200px;
  }
`

export const Content = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Stars = styled.div`
  font-size: 12px;
`

export const CutPrice = styled.p`
  font-size: 12px;
  color: #444444;
  margin: 6px 0;
`

export const CutPriceValue = styled.span`
  text-decoration: line-through;
`

export const Text = styled.p`
  font-size: 15px;
  color: #444444;
`

export const ButtonCtn = styled.div`
  width: 100%;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ButtonCard = styled.a`
  background: #000000;
  color: #ffffff;
  border: none;
  border-radius: 1.5rem;

  height: 50px;
  width: 100%;
  max-width: 330px;
  margin: 15px 0;
  padding: 10px 20px;

  font-size: 1.1rem;
  font-weight: 700;

  animation: pulsante 0.5s ease-in-out infinite alternate;
  transition: all 0.5s ease-out;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 430px) {
    font-size: 12px;
    padding: 0 8px;
    height: 42px;
  }

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  @keyframes pulsante {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.08);
    }
  }
`

export const CartoesImg = styled.img`
  width: 50%;

  @media screen and (max-width: 490px) {
    width: 90%;
  }
`

export const SelosCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;

  @media screen and (max-width: 430px) {
    margin-top: 25px;
  }
`

export const Selo = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #444444;

  display: flex;
  align-items: center;
  gap: 5px;

  @media screen and (max-width: 430px) {
    font-size: 10.5px;
  }
`
