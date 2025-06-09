import { Provider } from "react-redux"
import FormCadastro from "./containers/FormCadastro"
import TabelaContatos from "./containers/TabelaContatos"
import EstiloGlobal, { Container, Header } from "./styles"
import { store } from './store'

export type Contato = {
  id: number
  nome: string
  email: string
  telefone: number
}

function App() {

  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Header>
          <h1>📒 Agenda de Contatos</h1>
        </Header>
        <TabelaContatos />
        <FormCadastro />
      </Container>
    </Provider>
  )
}

export default App
