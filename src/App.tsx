import FormCadastro from "./containers/FormCadastro"
import TabelaContatos from "./containers/TabelaContatos"
import EstiloGlobal, { Container } from "./styles"

function App() {

  return (
    <>
      <EstiloGlobal />
      <Container>
        <header>
          <h1>📒 Agenda de Contatos</h1>
        </header>
        <TabelaContatos />
        <FormCadastro />
      </Container>
    </>
  )
}

export default App
