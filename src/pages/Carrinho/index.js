import Header from 'components/Header'
import styles from './Carrinho.module.scss'
import { useSelector } from 'react-redux'
import Item from 'components/Item'
import { useDispatch } from 'react-redux'
import { resetar } from '../../store/reducers/carrinho'
export default function Carrinho(){
    const dispatch = useDispatch()
    const { carrinho, total} = useSelector(state => {
        let total = 0
        const regexp = new RegExp(state.busca, 'i')
        const carrinhoReduce = state.carrinho.reduce((itens,itemNoCarrinho)=>{
            
            const item = state.itens.find(item => item.id === itemNoCarrinho.id)
            total += (item.preco * itemNoCarrinho.quantidade)
            if(item.titulo.match(regexp)){
                itens.push({
                    ...item,
                    quantidade: itemNoCarrinho.quantidade
                })
            }
            
            return itens
        },[])
        return {
            carrinho: carrinhoReduce,
            total: total
        } 
        
    })
    return(
        <div>
            <Header
                titulo='Carrinho de Compras'
                descricao='Confira os items que você adicionou ao carrinho'

            />
            <div className={styles.carrinho}>
                {carrinho.map((item)=>{
                    return(
                        <Item
                            key={item.id}
                            {...item}
                            carrinho
                        />
                    )
                })}
            </div>
            <div className={styles.total}>
                <strong>Resumo da Compra</strong>
                <span>
                    Subtotal: <strong>R$ {total.toFixed(2)}</strong>
                </span>
                <button className={styles.finalizar} onClick={()=>dispatch(resetar())}>Finalizar Compra</button>
            </div>
        </div>
    )
}