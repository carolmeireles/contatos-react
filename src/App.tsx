import FormCadastro from "./containers/FormCadastro"
import TabelaContatos from "./containers/TabelaContatos"
import EstiloGlobal, { Container, Header } from "./styles"

function App() {

  return (
    <>
      <EstiloGlobal />
      <Container>
        <Header>
          <h1>📒 Agenda de Contatos</h1>
        </Header>
        <TabelaContatos />
        <FormCadastro />
      </Container>
    </>
  )
}

export default App
