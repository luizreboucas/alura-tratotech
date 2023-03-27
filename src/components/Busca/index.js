import styles from './Busca.module.scss'

const Busca = () =>{
    return(
        <div className={styles.busca}>
            <input className={styles.input} placeholder='O Que Você Procura?' />
        </div>
        
    )
}

export default Busca