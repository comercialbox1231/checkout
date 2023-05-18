import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  margin-bottom: 15px;
  padding: 5px 15px;
`

export const TextPages = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #000000;
  margin-left: 140px;

  @media screen and (max-width: 490px) {
    margin-left: 0;
  }
`

export const PaginaInicial = styled.a`
  text-decoration: underline;
  color: #000000;

  &:visited,
  :active {
    color: #000000;
  }
`

export const Content = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (max-width: 490px) {
    justify-content: flex-start;
  }

  @media screen and (min-width: 491px) and (max-width: 890px) {
    justify-content: center;
  }
`

export const Section = styled.div`
  @media screen and (max-width: 490px) {
    width: 100%;
  }

  @media screen and (min-width: 491px) and (max-width: 890px) {
    margin: 10px 40px;
  }
`

export const DivMobile = styled.div`
  @media screen and (max-width: 490px) {
    width: 100%;
  }
`

export const SectionMobile = styled.div`
  width: 100%;
  @media screen and (min-width: 490px) {
    display: none;
  }
`

export const Text = styled.div`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #000000;
  margin-bottom: 8px;

  display: flex;
  align-items: center;
  gap: 5px;
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  line-height: 1.4;
  color: #000000;
  margin-bottom: 10px;

  @media screen and (max-width: 490px) {
    font-size: 22px;
    margin: 15px 0;
  }
`

export const TitleSmall = styled.p`
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  line-height: 1.4;
  color: #000000;
  margin-bottom: 10px;

  @media screen and (max-width: 490px) {
    margin-top: 30px;
  }
`

export const SubtitleText = styled.div`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #000000;
  margin-bottom: 8px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const Copyright = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  line-height: 1.4;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid rgba(206, 126, 0, 0.1);

  @media screen and (max-width: 490px) {
    padding-bottom: 20px;
  }
`

export const Midias = styled.div`
  display: flex;
  gap: 10px;
`

export const CompraSeguraImg = styled.img`
  width: 290px;
  height: 50px;
`

export const FormasPagamento = styled.div`
  display: flex;
  justify-content: center;
`

export const FormasPagamentoDesktop = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 490px) {
    display: none;
  }
`

export const CartoesImg = styled.img`
  width: 45px;
  height: 28px;
`

export const ModalWrapper = styled.div`
  width: 100%;
  max-width: 850px;
  padding: 0 15px;
`

export const TitleModal = styled.p`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: #212121;
  padding: 20px 0;

  @media screen and (max-width: 490px) {
    font-size: 18px;
  }
`

export const SubtitleModal = styled.p`
  font-size: 15px;
  font-weight: 700;
  text-align: left;
  color: #000000;
  margin-bottom: 10px;

  @media screen and (max-width: 490px) {
    font-size: 14px;
  }
`

export const TextModal = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.4;
  text-align: left;
  color: #000000;
  margin-bottom: 20px;

  @media screen and (max-width: 490px) {
    font-size: 14px;
  }
`

export const ButtonClose = styled.button`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  background-color: #000000;
  color: #ffffff;
  border-radius: 1.5rem;
  border: none;
  cursor: pointer;
  padding: 13px 20px;
  margin-top: 30px;

  &:hover {
    opacity: 0.8;
  }
`

export const ButtonContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;

  @media screen and (max-width: 490px) {
    justify-content: center;
    gap: 15px;
  }
`

export const ButtonContato = styled.div`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  background-color: #efefef;
  color: #000000;
  border-radius: 1.5rem;
  border: none;
  cursor: default;
  padding: 12px 20px;
  margin-top: 30px;

  -webkit-box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.75);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 490px) {
    font-size: 14px;
  }
`

export const LinkRastreio = styled.a`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.4;
  text-align: left;
  color: #000000;
  margin-bottom: 20px;
  text-decoration: underline;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 490px) {
    font-size: 14px;
  }
`
