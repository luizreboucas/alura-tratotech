import styles from './Navbar.module.scss'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import classNames from 'classnames'
import {
    RiShoppingCart2Line,
    RiShoppingCart2Fill
} from 'react-icons/ri'
import Busca from 'components/Busca'
const Navbar = () =>{

    const iconeProps = {
        color: 'white',
        size: 24
    }
    return(
        <nav className={styles.nav}>
            <Logo className={styles.logo}/>
            <div className={styles.links}>
                <div>
                    <a href='/' className={classNames(styles.link, {
                        [styles.selected]: window.pathname === '/'
                    })}>
                        Página Inicial
                    </a>
                </div>

            </div>
            <div className={styles.busca}>
                    <Busca/>
            </div>
            <div className={styles.icones}>
                <a href='/carrinho'>
                    {window.location.pathname === '/carrinho'
                    ?  <RiShoppingCart2Fill {...iconeProps} />
                    :   <RiShoppingCart2Line {...iconeProps}/>
                    }
                </a>
            </div>
        </nav>
    )
}


export default Navbar