import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  max-height: 110px;
  background-color: #eeeeee;
  border-radius: 20px;
  padding: 20px;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Text = styled.p`
  font-size: 16px;
  color: #222222;
  line-height: 22.4px;
`

export const Quantidade = styled.span`
  font-size: 16px;
  font-weight: 700;
  background-color: #808080;
  color: #ffffff;
  border-radius: 50%;
  padding: 7px;
`

export const BarraContagem = styled.div`
  height: 12px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  margin: 15px 0;
`

export const BarraContagemDark = styled.div`
  height: 12px;
  width: 30%;
  background-color: #808080;
  border-radius: 16px;
`
