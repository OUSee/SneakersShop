import styles from './styles.module.css'
    
export const Preloader = () => {
    return ( 
        <div className={styles.pswp__preloader__icn}>
            <div className={styles.pswp__preloader__cut}>
                <div className={styles.pswp__preloader__donut}>
                </div>
            </div>
        </div>
    )
}