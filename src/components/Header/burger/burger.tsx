import styles from './styles.module.css'

interface IBurger  {
    onClick: () => void
}
    
export const Burger = ({ onClick }: IBurger) => {
    return ( 
        <div className={styles.menuIcon} onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}