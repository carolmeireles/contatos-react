import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { Contato } from "../../App";

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: []
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Contato>) => {
      const contato = action.payload
      const contatoBusca = state.itens.find((c) => c.id === contato.id)
      if (contatoBusca) {
        alert('Contato já adicionado')
      } else {
        state.itens.push(contato)
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoBusca = state.itens.find(
        (contato) => contato.nome.toLocaleLowerCase() ===
        action.payload.nome.toLocaleLowerCase()
      )
      if (contatoBusca) {
        alert('Contato já cadastrado')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((contato) => contato.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    }
  }
})

export const { adicionar, cadastrar, remover, editar } = contatosSlice.actions
export default contatosSlice.reducer
