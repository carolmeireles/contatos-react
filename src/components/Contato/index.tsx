import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { Opcoes } from "./styles"
import ContatoClass from '../../models/Contato'
import { editar, remover } from "../../store/reducers/contatos"

type Props = ContatoClass

const Contato = ({
  id,
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)
  const [nome, setNome] = useState('-')
  const [email, setEmail] = useState('-')
  const [telefone, setTelefone] = useState('-')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
  }, [nomeOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    if (telOriginal.length > 0) {
      setTelefone(telOriginal)
    }
  }, [telOriginal])

  function cancelarEdicao() {
    setEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telOriginal)
  }

  return (
    <>
      <td>{nome}</td>
      <td>{email}</td>
      <td>{telefone}</td>
      <td>
        {editando ? (
          <>
            <Opcoes
              onClick={() => {
                dispatch(
                  editar({
                    id,
                    nome,
                    email,
                    telefone
                  })
                )
                setEditando(false)
              }}
            >
              Salvar
            </Opcoes>
            <Opcoes
              onClick={() => {
                cancelarEdicao()
              }}
            >
              Cancelar
            </Opcoes>
          </>
        ) : (
          <>
            <Opcoes onClick={() => setEditando(true)}>Editar</Opcoes>
            <Opcoes onClick={() => dispatch(remover(id))}>Remover</Opcoes>
          </>
        )}
      </td>
    </>
  )
}

export default Contato
