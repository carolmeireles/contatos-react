import styled from "styled-components"
import vars from "../../styles/vars"

export const Opcoes = styled.a`
  font-weight: bold;
  font-size: 14px;
  color: ${vars.cinza};
  cursor: pointer;
  background-color: transparent;
  padding: 0 8px;
  text-decoration: underline;
`

export const Campo = styled.input`
  border: none;
  font-size: 16px;
  text-align: center;
  color: #000;

  &:enabled {
    background-color: transparent;
    color: ${vars.cinza};
    border: 1px solid ${vars.cinza};
  }
`
