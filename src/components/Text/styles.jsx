import styled, { css } from "styled-components"

export const TextItem = styled.p`
  margin: 10px 0 16px 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.3;
  color: #333333;
  text-align: center;

  ${({ variant }) =>
        variant !== "primary" &&
        css`
      font-weight: 700;
    `}
`