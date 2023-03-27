import styles from './Home.module.scss'
import Header from '../../components/Header'
import relogio from '../../assets/inicial.png'
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';


export default function Home(){
    const categorias = useSelector((state)=> state.categorias)
    const navigate = useNavigate() 
    return(
        <div>
            <Header
                titulo='Classificados Tech'
                descricao='Compre Diversos Tipos de Produtos no Melhor Site do Brasil!'
                className= {styles.header}
                imagem={relogio}

            />
            <div className={styles.categorias}>
                <div className={styles['categorias-title']}>
                    <h1>Categorias</h1>

                </div>
                <div className={styles['categorias-container']}>
                {categorias.map((categoria,index)=>{
                    return(
                        <div key={index} onClick={()=> navigate(`/categorias/${categoria.id}`)}>
                            <img
                                src={categoria.thumbnail}
                                alt={categoria.nome}
                            />
                            <h1>{categoria.nome}</h1>
                        </div>
                    )
                })}
            </div>
            </div>
            
        </div>
    )
}