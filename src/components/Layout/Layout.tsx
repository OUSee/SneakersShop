import styles from './styles.module.css'
import { HeaderComponent } from '../Header/HeaderComponent'
import { FooterComponent } from '../FooterComponent/FooterComponent'
import { Outlet } from 'react-router-dom'

    
export const LayoutComponent = () => {
    return ( 
        
        <div className={styles.layoutContainer}>
            <HeaderComponent />

            <Outlet />

            <FooterComponent />
        </div>
    )
}