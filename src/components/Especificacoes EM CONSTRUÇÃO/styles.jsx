import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  margin-top: -5px;
  background: rgb(239,239,239);
  background: linear-gradient(180deg, rgba(239,239,239,1) 30%, rgba(254,254,254,1) 90%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Table = styled.div`
  width: 100%;
  max-width: 605px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 22px;
  text-align: center;
  margin-bottom: 10px;
`

export const Content = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 15px;
  margin-bottom: 5px;
`

export const ContentTitle = styled.p`
  font-family: "Quicksand", sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #222121;
`

export const Row = styled.div`
  width: 90%;
  max-width: 575px;
  background-color: #e4e4e4;
  border-radius: 9px;
  padding: 10px 15px;
  margin-bottom: 10px;
`

export const Attribute = styled.p`
  font-size: 18px;
  color: #222222;
  text-align: left;

  @media screen and (max-width: 430px) {
    font-size: 16px;
  }
`

export const ButtonCtn = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
