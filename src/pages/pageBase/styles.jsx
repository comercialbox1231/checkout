import styled from "styled-components"

export const Container = styled.div`
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 15px;

  @media screen and (min-width: 1280px) {
    gap: 50px;
  }
`

export const PriceCtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  margin-bottom: 10px;
`

export const ButtonCtn = styled.div`
  width: 100%;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ElementDivision = styled.img`
  width: 100%;
  height: 100px;

  @media screen and (max-width: 479px) {
    object-fit: content;
    height: 30px;
  }
`

export const ElementDivisionTwo = styled.img`
  width: 100%;
  height: 120px;

  @media screen and (max-width: 479px) {
    object-fit: content;
    height: 60px;
  }
`

export const Section = styled.section`
  width: 100%;
  height: 100%;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
`

