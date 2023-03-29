import { createSlice } from "@reduxjs/toolkit";

const carrinho = []

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState: carrinho,
    reducers: {
        mudarCarrinho: (state, {payload})=>{
            const temItem = state.some(item => item.id === payload)
            if(!temItem){
                return [...state, {id: payload, quantidade: 1}]
            }
            return state.filter((item)=> item.id !== payload)
        },
        mudarQuantidade: (state, {payload})=>{
            state = state.map((itemNoCarrinho)=>{
                if(itemNoCarrinho.id === payload.id){
                    itemNoCarrinho.quantidade = itemNoCarrinho.quantidade + payload.quantidade
                }
                return itemNoCarrinho
            })
        },
        resetar: (state, action)=>{
            return carrinho
        }
    }
})

export const { mudarCarrinho, mudarQuantidade, resetar } = carrinhoSlice.actions

export default carrinhoSlice.reducer