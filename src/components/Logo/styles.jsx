import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 15px;
  padding-top: 10px;
  padding-bottom: 10px;

  padding-left: 10px;
  padding-right: 15px;

  img {
    width: 85px;

    @media screen and (min-width: 375px) {
      width: 95px;
    }
    
    @media screen and (min-width: 400px) {
      width: 110px;
    }
  }

  .container_banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .container_blocoBlackFriday {
    background-color: rgb(118 76 23);
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 0px;
    color: rgb(255, 255, 255);
    border: 1px solid #FFF;
  }
  
  .container_blocoBlackFriday > .cronometro {
    display: flex;
    align-items: center;
  }

`