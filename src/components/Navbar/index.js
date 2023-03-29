import styles from './Navbar.module.scss'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import classNames from 'classnames'
import {
    RiShoppingCart2Line,
    RiShoppingCart2Fill
} from 'react-icons/ri'
import Busca from 'components/Busca'
import { Link, useLocation, useNavigate } from 'react-router-dom'
const Navbar = () =>{

    const iconeProps = {
        color: 'white',
        size: 24
    }
    const location = useLocation()
    const navigate = useNavigate()
    return(
        <nav className={styles.nav}>
            <Logo className={styles.logo} onClick={()=>navigate('/')}/>
            <div className={styles.links}>
                <div>
                    <Link to='/' className={classNames(styles.link, {
                        [styles.selected]: location.pathname === '/'
                    })}>
                        Página Inicial
                    </Link>
                </div>

            </div>
            <div className={styles.busca}>
                    <Busca/>
            </div>
            <div className={styles.icones}>
                <Link to='/carrinho'>
                    {location.pathname === '/carrinho'
                    ?  <RiShoppingCart2Fill {...iconeProps} />
                    :   <RiShoppingCart2Line {...iconeProps}/>
                    }
                </Link>
            </div>
        </nav>
    )
}


export default Navbar