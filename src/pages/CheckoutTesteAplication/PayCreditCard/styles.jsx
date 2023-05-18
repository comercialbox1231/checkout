import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Montserrat', sans-serif;
  }
`

export const Container = styled.div`
  width: 100%;
  padding: 20px 0;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #202223;
    margin: 5px 0;

    @media screen and (max-width: 490px) {
      font-size: 1rem;
    }
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
`

export const WrapperInformations = styled.div`
  width: 100%;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`

export const Upsell = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  img {
    width: 200px;
    height: 200px;
  }
`

export const DivPedido = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0 20px 0;
  border-bottom: 1px solid #f1f1f1;
`

export const DivIcon = styled.div`
  width: 100%;
  max-width: 25px;
  height: 25px;

  @media screen and (max-width: 490px) {
    max-width: 20px;
    height: 20px;
  }
`

export const TextPedido = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: #202223;

  @media screen and (max-width: 490px) {
    font-size: 0.875rem;
  }
`

export const ImageLoja = styled.img`
  width: 213px;
  height: 71px;

  @media screen and (max-width: 490px) {
    width: 185px;
    height: 61.663px;
  }
`

export const DivCronometro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 15px 0 25px 0;
  border-bottom: 1px solid #f1f1f1;
`

export const CronometroStyle = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: #0fa2b7;

  @media screen and (max-width: 490px) {
    font-size: 2.5rem;
  }
`

export const DivQrcode = styled.div`
  width: 100%;
  max-width: 600px;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
  padding: 10px 20px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 20px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 20px;
  -moz-box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 20px;
`

export const DivCopy = styled.div`
  width: 100%;
  max-width: 600px;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
  padding: 10px;
`

export const Title = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  color: #202223;
  margin: 15px 5px;

  @media screen and (max-width: 490px) {
    font-size: 0.875rem;
  }
`

export const Text = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
  line-height: 24px;
  color: #333333;

  @media screen and (max-width: 490px) {
    font-size: 0.875rem;
  }
`

export const DivCode = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

export const ButtonAdicionar = styled.button`
  width: 100%;
  max-width: 250px;
  padding: 12px 10px;
  margin-top: 30px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  background-color: #40b76a;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  transition: all 0.4s ease-in-out;

  box-shadow: 0 2px 5px 1px rgba(64, 60, 67, 0.16);
  -webkit-box-shadow: 0 2px 5px 1px rgba(64, 60, 67, 0.16);
  -moz-box-shadow: 0 2px 5px 1px rgba(64, 60, 67, 0.16);

  :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 490px) {
    width: 200px;
    font-size: 0.875rem;
  }
`
