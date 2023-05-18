import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding-top: 15px;
  padding-bottom: 10px;
  background-color: #000;

  padding-left: 15px;
  padding-right: 15px;

  img {
    width: 100%;
  }

  .container_banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    color: #FFF;
    border: 1px solid #FFF;
    padding: 0.3em;
  }
  
  .container_banner > span {
    font-size: 12px;
  }
  
  .name_cupom {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .name_cupom > h3 {
    font-size: 24px;
    color: #00dddc
  }
  
  .name_cupom > h5 {
    color: #FFF;
  }
  
  .name_cupom > h5 > span {
    margin-right: 5px;
    margin-left: 3px;
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
  
  @media screen and (min-width: 768px) {
    justify-content: center;

    img {
      width: 150px;
    }

    .container_banner {
      display: none;
    }
  }

`