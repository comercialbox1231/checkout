import styled from "styled-components"

export const Header = styled.div`
  position: relative;
  width: 100%;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`

export const TextCnt = styled.div`
  width: 100%;
  height: 80%;
  padding-top: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 490px) {
    padding-top: 12px;
  }
`

export const Title = styled.h1`
  font-size: 45px;
  font-weight: 500;
  letter-spacing: 3px;
  color: #ffffff;
  text-shadow: black 0.1em 0.1em 0.5em;

  @media screen and (max-width: 490px) {
    font-size: 25px;
  }
`

export const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.25rem;
  color: #ffffff;
  text-shadow: black 0.1em 0.1em 0.5em;
  padding-top: 30px;

  @media screen and (max-width: 490px) {
    font-size: 12px;
  }
`

export const ImageBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ArrowCnt = styled.div` 
  position: absolute;
  bottom: 1rem;
  width: 100%;
  height: auto;
  animation: arrowDown 1.2s infinite ease-in-out alternate;

  @keyframes arrowDown {
    0% {
      top: 88%;
    }

    100% {
      top: 94%;
    }
  }
`

export const ArrowDown = styled.img``

export const Section = styled.div`
  width: 100%;
  height: auto;
  padding: 35px 12px 50px 30px;

  @media screen and (max-width: 490px) {
    padding: 35px 12px 50px 12px;
  }
`

export const TitlePresentation = styled.h2`
  font-size: 35px;
  font-weight: 700;
  text-align: left;
  letter-spacing: 0.1em;
  line-height: 1.3;
  color: transparent;
  background-image: url(https://www.omegawatches.com/pt/media/catalog/category/imgPreview-headervideo-PP-SP57-GC-mobile.jpg);
  background-size: 100% 100vh;
  background-position: center 32.1598%;
  background-repeat: no-repeat;
  background-clip: text;
  -webkit-background-clip: text;

  @media screen and (max-width: 490px) {
    font-size: 25px;
  }
`

export const SubtitlePresentation = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  line-height: 1.7;
  color: #212121;
  padding: 20px 0;
`

export const EditOpacity = styled.a`
  position: absolute;
  top: 0;
  left: 0;

  z-index: 1;

  width: 100%;
  height: 100%;

  background: #000;
  opacity: 0.6;
`

export const ButtonCnt = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`

export const ButtonOne = styled.button`
  background-color: transparent;
  color: #12784a;
  border: 1px solid #12784a;
  border-radius: 1.875rem;
  padding: 0.6875rem 1.875rem;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: #12784a;
    color: #fff;
  }
`

export const SectionVideo = styled.div`
  width: 100%;
  height: 700px;
  position: relative;
`

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
`
