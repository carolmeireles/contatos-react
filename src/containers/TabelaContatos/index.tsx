import { useSelector } from "react-redux"
import Contato from "../../components/Contato"
import { Tabela } from "./styles"
import type { RootReducer } from "../../store"

const TabelaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

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
