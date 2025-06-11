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
          <th>E-mail</th>
          <th>Telefone</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
          {itens.map((c) => (
            <tr key={c.nome}>
              <Contato
                id={c.id}
                nome={c.nome}
                email={c.email}
                telefone={c.telefone}
              />
            </tr>
          ))}
      </tbody>
    </Tabela>
  )
}

export default TabelaContatos
