import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  margin-top: 30px;
  padding: 0 5px;
`

export const TitleFaq = styled.h1`
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #222222;
  margin-bottom: 20px;
  text-align: center;

  @media screen and (max-width: 430px) {
    font-size: 20px;
  }
`

export const SubtitleFaq = styled.p`
  font-size: 20px;
  color: #444444;
  margin-bottom: 20px;
  text-align: center;

  @media screen and (max-width: 430px) {
    font-size: 16px;
  }
`

export const Table = styled.div`
  width: 100%;
  max-width: 605px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

export const Row = styled.div`
  width: 90%;
  max-width: 555px;
  height: auto;
  background-color: #e4e4e4;
  border-radius: 9px;
  padding: 10px 20px;
  margin-bottom: 20px;
`

export const Question = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`

export const ImageCnt = styled.div`
  min-width: 25px;
  min-height: 25px;
`

export const QuestionText = styled.p`
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  color: #222222;
`

export const Response = styled.div`
  margin: 10px 0;
`

export const ResponseText = styled.div`
  font-size: 14px;
  text-align: left;
  line-height: 1.4;
  color: #222222;
`
