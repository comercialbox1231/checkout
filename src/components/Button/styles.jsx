import styled, { css } from "styled-components"

export const ButtonContainer = styled.button`
  background: #00ac69;
  color: #ffffff;
  border: none;
  border-radius: 1.5rem;

  height: 50px;
  width: 100%;
  max-width: 330px;
  margin: 15px 0 7px;
  padding: 10px 20px;

  font-size: 1.1rem;
  font-weight: 700;

  animation: pulsante 0.5s ease-in-out infinite alternate;
  transition: all 0.5s ease-out;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  @keyframes pulsante {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.08);
    }
  }

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      background: #000000;
    `}
`
