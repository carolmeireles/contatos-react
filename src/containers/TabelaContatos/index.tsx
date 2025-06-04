import Contato from "../../components/Contato"

const TabelaContatos = () => {
  return (
    <table>
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
    </table>
  )
}

export default TabelaContatos
