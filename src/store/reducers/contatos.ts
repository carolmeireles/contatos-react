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
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contato = action.payload
      if (state.itens.find((c) => c.id === contato.id)) {
        alert('Contato já cadastrado')
      } else {
        state.itens.push(contato)
      }
    }
  }
})

export const { cadastrar } = contatosSlice.actions
export default contatosSlice.reducer
