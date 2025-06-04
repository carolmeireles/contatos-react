
const FormCadastro = () => {
  return (
    <form id="form">
      <input type="text" id="name" placeholder="Nome completo" required />
      <input type="email" id="name" placeholder="Endereço de e-mail" required />
      <input type="tel" id="phone" placeholder="Número de telefone" required />
      <button type="submit">Cadastrar</button>
    </form>
  )
}

export default FormCadastro
