import styled, { css } from 'styled-components'

const buttonStyled = css`
  border: 3px solid #ffffff;
  background: transparent;
  color: #ffffff;
  border-radius: 30px;
  transition: var(--transition);
  cursor: pointer;

  font-weight: 500;
 

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }

  &:hover {
    color: #ff0000;
    background: #ffffff;
    border: 3px solid #ff0000;
  }
`

export const ButtonWhite = styled.button`
  ${buttonStyled}
`

export const ButtonPrimary = styled.button`
  ${buttonStyled}
  background: var(--color-primary);
  border: 4px solid transparent;
  box-shadow: 0px 0px 7px 8px rgb(10 10 20 /20%);

  &:hover {
    box-shadow: 0px 0px 7px 12px rgb(255 0 0 /20%);
    background: #ff0000;
    color: #ffffff;
  }
`
