import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`

export const DropDownCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 5px;

  .activeDropDown {
      border-bottom: 5px solid rgb(18, 120, 74);
    }

  h3 {
    font-size: 12px
    text-align: start;
  }
`

export const ItemDd = styled.div`
    border-bottom: 5px solid transparent;
    padding-bottom: 28px;
    font-size: 18px;
    line-height: 23px;
    display: block;
    color: rgb(18, 120, 74);
    text-decoration: none;
    cursor: pointer;

    h3 {
      font-size: 18px;
      font-weight: 500;
      text-align: center;

      @media screen and (max-width: 768px) {
      font-size: 16px; 
    }
    
    @media screen and (max-width: 425px) {
      font-size: 13px; 
    }
    }

`

export const ShowContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 95%;

  h1 {
    text-align: start;
  }
`

export const CtnIternItem = styled.div`

`

export const CtnDescription = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    min-height: 50px;
    padding: 0 15px;
    cursor: pointer;
    transition: all 0.2s linear;
    border-bottom: 1px solid #ccc !important;
    gap: 14px;
  ;

  .title {
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }
  
  .minus {
    font-size: 22px;
    font-weight: bold;
  }
`
export const ItemDescription = styled.div`
    
`
