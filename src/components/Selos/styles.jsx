import styled from "styled-components";

export const ContainerSelos = styled.div`
  display: flex;
  gap: 17px;
`
export const Selo = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  @media screen and (min-width: 300px) and (max-width: 767px) {
    font-size: 0.7rem;
  }
`

export const TextSelo = styled.p`
  font-size: 0.85rem;
  font-weight: 300;
  line-height: 1.1;
  color: #808080;

  @media screen and (min-width: 300px) and (max-width: 767px) {
    font-size: 0.65rem;
  }
`