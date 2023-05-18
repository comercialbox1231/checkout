import styled from "styled-components"

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 5px 0;
`

export const Seamaster = styled.p`
  font-family: "Passions Conflict", cursive;
  font-size: 50px;
  font-weight: 200;
  line-height: 1.2;
  text-align: center;
  color: #212121;
`

export const TitleProduct = styled.h1`
  font-family: 'Quicksand', sans-serif;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  color: #0059c7;
  margin-bottom: 20px;

  @media screen and (max-width: 479px) {
    font-size: 22px;
    margin-bottom: 10px;
  }
`

export const Text = styled.p`
  font-size: 18px;
  text-align: center;
  color: #444444;
  margin-top: 8px;
`

export const CutPrice = styled.p`
  font-size: 18px;
  text-align: center;
  color: #474444;
`

export const ParcelaPrice = styled.p`
  font-size: 34px;
  font-weight: 700;
  text-align: center;
  color: #3ca745;
`

export const TextPay = styled.p`
  font-size: 14.5px;
  text-align: center;
  text-decoration: underline;
  color: #444444;
  margin-top: 5px;
  cursor: pointer;

  &:hover {
    color: #60a741;
  }
`

export const ModalWrapper = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 10px;
  background-color: #ffffff;
`

export const ModalTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 700;
  color: #212121;

  @media screen and (max-width: 479px) {
    font-size: 18px;
  }
`

export const ModalSubtitle = styled.p`
  font-size: 16.5px;
  font-weight: 700;
  color: #212121;
`

export const ContainerPay = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 0.313rem;
  cursor: pointer;
`

export const RowModalLight = styled.div`
  width: 100%;
  padding: 10px 15px;
  background-color: #fbfbfb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
`
export const RowModalDark = styled.div`
  width: 100%;
  padding: 10px 15px;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
`

export const TextModal = styled.p`
  font-size: 0.875rem;
  color: #212121;
`

export const TextModalRight = styled.p`
  font-size: 0.875rem;
  color: #212121;
  text-align: right;
`
export const TextModalLeft = styled.p`
  font-size: 0.875rem;
  color: #212121;
  text-align: left;
`

export const TextCards = styled.p`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #212121;
`

export const Cards = styled.div`
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`
export const ImageCard = styled.img`
  height: 25px;
`

export const ButtonClose = styled.button`
  margin-top: 30px;
  padding: 13px 20px;
  background-color: #eeeeee;
  color: #212121;
  border-radius: 24px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
`
export const ButtonGreen = styled.button`
  margin-top: 15px;
  padding: 7px 14px;
  background-color: rgba(60, 167, 69, 0.1);
  color: #3ca745;
  border-radius: 16px;
  border: none;
  font-size: 0.9rem;
  font-weight: 700;
  text-align: center;
  transition: all 0.5s ease-out;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  &:hover {
    opacity: 0.7;
  }
`
export const RowBnt = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  margin: 5px 0;

  @media screen and (max-width: 490px) {
    gap: 0;
  }
`

export const InfoCreditCard = styled.div``

export const InfoPix = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
