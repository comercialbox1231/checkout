import styled from "styled-components"

export const ContainerAvaliable = styled.div`
  width: 95%;
  margin: 15px auto;
  
  display: flex;
  align-items: start;

  padding: 10px 20px;
  border: 1px solid gray;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  background: #fff;
  border-radius: 2px;
  padding: 10px;

  .campText {
    width: 70%;
    padding-right: 10px;
  }
  
  .campText .ctnName {
    display: flex;
    align-items: center;
    gap: 5px;
    padding-bottom: 5px;
  }
  
  .campText .ctnName .name {
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 16px;
  }
  
  .campText .stars ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2.5px;
    padding-bottom: 5px;
    margin-left: 0;
  }

  .campText .description {
    text-align: start;  
    font-size: 14px;
    line-height: 19px;
    font-weight: 500;
    white-space: pre-wrap;
  }

  /* ========= */
  
  .campImg {
    width: 30%;
    border-radius: 2px; 
    margin: auto 0;
  }
  
  .campImg img {
    width: 100%;
  }

  @media screen and (max-width: 375px) {
    .campText .ctnName {
        padding-bottom: 5px;
    }
        
    .campText .stars ul {
        padding-bottom: 5px;
    }
  
    .campText .description {
        font-size: 13px;
        line-height: 15px;
        font-weight: 400;
    }
  }
`

