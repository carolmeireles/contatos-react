import { useDispatch } from 'react-redux'
import { useState, type FormEvent } from 'react'
import { Form } from './styles'
import { cadastrar } from '../../store/reducers/contatos'

const FormCadastro = () => {
  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        telefone
      })
    )
    setNome('')
    setEmail('')
    setTelefone('')
  }

  return (
    <Form onSubmit={cadastrarContato}>
      <input
        value={nome} onChange={(evento) => setNome(evento.target.value)}
        type="text" id="name" placeholder="Nome completo" required
      />
      <input
        value={email} onChange={(evento) => setEmail(evento.target.value)}
        type="email" id="name" placeholder="Endereço de e-mail" required
      />
      <input
        value={telefone} onChange={(({ target }) =>
        setTelefone(target.value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')))}
        type="tel" id="phone" placeholder="(99) 99999-9999" required
      />
      <button type="submit">Cadastrar</button>
    </Form>
  )
}

export default FormCadastro
