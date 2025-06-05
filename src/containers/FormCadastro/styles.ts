import styled from 'styled-components'
import vars from '../../styles/vars'

export const Form = styled.form`
  display: flex;
  max-width: 640px;
  width: 100%;
  justify-content: space-between;
  margin: 56px 0;
  align-items: center;

  input {
    font-size: 18px;
    background-color: #fff;
    border: none;
    border-bottom: 2px solid #000;
    padding: 8px;
    margin: 8px;
  }

  button {
    background-color: ${vars.verde};
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    padding: 8px;
  }
`
