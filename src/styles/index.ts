import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #f0f0f0;
    padding-top: 100px;
    font-family: "Roboto", sans-serif;
}
`

export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  h1 {
    font-size: 40px;
    font-weight: bold;
  }
`

export default EstiloGlobal
