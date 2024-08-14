import styles from './styles.module.css'
    
export const HeroSection = () => {
    return (
        <div id="main" className={styles.container}>
            <div className="content">
                <h1 className={styles.backgroundText}>SneakMax</h1>
                <div className={styles.contentContainer}>
                    <h1 className={styles.mainContentText}>
                        Кроссовки известных брендов с&nbsp;доставкой по России и
                        СНГ
                    </h1>
                    <p className={styles.additionalContentText}>
                        Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok,
                        Converse и&nbsp;многие другие по&nbsp;низким&nbsp;ценам
                    </p>
                    <a
                        href="/SneakersShop/#cathalogue"
                        className={styles.gotoCathalogueBTN}
                    >
                        Перейти к покупкам
                    </a>
                </div>
            </div>
        </div>
    );
}