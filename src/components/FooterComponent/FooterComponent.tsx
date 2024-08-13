import styles from './styles.module.css'
    
export const FooterComponent = () => {
    return ( 
        <footer className={styles.container}>
            <div className='content'>
                <div className={styles.rowOrderBox}>
                    <h1 className={styles.headTitle}>Sneak Max</h1>
                    {screen.width > 640 && <nav className={styles.headNav}>
                        <ul className={styles.headNavList}>
                            <a className={styles.Link} href="/#cathalogue">Каталог</a>
                            <a className={styles.Link} href="/#about">О нас</a>
                            <a className={styles.Link} href="/#select">Подбор Товара</a>
                            <a className={styles.Link} href="/#crew">Наша Комада</a>
                            <a className={styles.Link} href="/#main">Доставка товара</a>
                            <a className={styles.Link} href="/#contacts">Контакты</a>
                            <a className={styles.Link} href="/#faq">FAQ</a>
                        </ul>
                    </nav>}
                </div>
            </div>
        </footer>
    )
}