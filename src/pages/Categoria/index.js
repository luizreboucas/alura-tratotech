import { useSelector } from "react-redux";
import Header from "../../components/Header";
import { useParams } from 'react-router-dom'
export default function Categoria(){
    const params = useParams()
    const categoria = useSelector(state => state.categorias.find((categoria)=> categoria.id === params.nomeCategoria))
    return(
        <div>
            <Header
                titulo={categoria.nome}
                descricao={categoria.descricao}
                imagem={categoria.header}
                
            />
        </div>
    )
}