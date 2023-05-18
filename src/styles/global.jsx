import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;

    font-family: 'Montserrat', sans-serif;
  }

  .show {
    display: block;
  }
  
  .hidden {
    display: none;
  }

  .animated-heading {
    animation: move .7s infinite;
  }

  @keyframes move {
    0% {
      transform: translateX(-3px);
    }
    50% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-3px);
    }
  }
`

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto; 
` 
