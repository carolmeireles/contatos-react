import styled from 'styled-components'

export const Tabela = styled.table`
  width: 100%;
  border-spacing: 0px;

  th {
    border-bottom: 2px solid #000;
    padding: 16px;
    font-size: 24px;
    font-weight: bold;
  }

  td {
    padding: 16px 0;
    text-align: center;
    font-size: 18px;

    img {
      height: 30px;
    }
  }
`
