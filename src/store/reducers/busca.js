import { createSlice } from "@reduxjs/toolkit";

const initialState= ''

const buscaSlice = createSlice({
    name: 'busca',
    initialState,
    reducers: {
        mudarBusca: (state, {payload}) =>{
            return payload
        },
        resetarBusca: (state, {payload})=> initialState
    }
})

export const { mudarBusca, resetarBusca } = buscaSlice.actions
export default buscaSlice.reducer