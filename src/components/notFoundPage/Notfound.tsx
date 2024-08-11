import styles from './styles.module.css'
    
export const NotFoundSection = () => {
    return ( 
        <div className={styles.container}>
            <h1 className={styles.frontText}>Извините, но похоже что такой страницы не существует</h1>
            <a href='/' className={styles.goHomeBTN}>перейти на главную</a>
            <h1 className={styles.bacgroundText}>ERROR CODE: 404</h1>
        </div>
    )
}