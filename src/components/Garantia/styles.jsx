import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  margin-top: -5px;
  padding: 10px 20px;
  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SeloGarantia = styled.img`
  width: 100%;
  max-width: 290px;
  height: 100%;
  max-height: 290px;

  @media screen and (max-width: 430px) {
    max-width: 225px;
    max-height: 225px;
  }
`

export const TitleGarantia = styled.h1`
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #222222;
  margin: 20px 0;
  text-align: center;

  @media screen and (max-width: 430px) {
    font-size: 20px;
  }
`

export const TextGarantia = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
  text-align: center;
  color: #444444;
  margin-bottom: 20px;

  width: 100%;
  max-width: 820px;

  @media screen and (max-width: 430px) {
    font-size: 16px;
    max-width: 350px;
  }
`
