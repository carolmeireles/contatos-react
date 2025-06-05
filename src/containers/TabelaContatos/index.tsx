import Contato from "../../components/Contato"
import { Tabela } from "./styles"

const TabelaContatos = () => {
  return (
    <Tabela>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Telefone</th>
          <th>E-mail</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <Contato />
      </tbody>
    </Tabela>
  )
}

export default TabelaContatos
