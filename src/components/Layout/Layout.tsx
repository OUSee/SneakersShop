import styles from './styles.module.css'
import { HeroSection } from '../Hero/HeroSection'
import { CathalogueSection } from '../CathalogueSection/CathalogueSection'
import { AboutSection } from '../aboutSection/AboutSection'
import { SelectSection } from '../SelectSection/SelectSection'
import { CrewSection } from '../CrewSection/CrewSection'
import { ContactsSection } from '../ContactsSection/ContactsSection'
import { FAQSection } from '../FAQSection/FAQSection'
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