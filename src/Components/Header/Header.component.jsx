import { React } from 'react'
import logo from '../../assets/img/logo.svg'
import { menu } from './Header.component'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
const Header = () => {

    
    return(
    <div className={styles.header}>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <div className={styles.wrapper}>
            
            <ul className={styles.menu}>
                {menu.map((item,idx) => <li key={`menu item ${idx}`}><Link to={item.link}>{item.title}</Link></li> )}
            </ul>

            <div className={styles['auth-buttons']}>

                <button className={styles['login-button']}>Login</button>
                <button className={styles['sign-up']}>Sign up</button>

            </div>

        </div>
    </div>
    )
}

export default Header