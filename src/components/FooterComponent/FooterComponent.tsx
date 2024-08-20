import styles from "./styles.module.css";

export const FooterComponent = () => {
    return (
        <footer className={styles.container}>
            <div className="content">
                <div className={styles.rowOrderBox}>
                    <h1 className={styles.headTitle}>Sneak Max</h1>
                    {screen.width > 640 && (
                        <nav className={styles.headNav}>
                            <ul className={styles.headNavList}>
                                <a
                                    className={styles.Link}
                                    href="/SneakersShop/#cathalogue"
                                >
                                    Каталог
                                </a>
                                <a
                                    className={styles.Link}
                                    href="/SneakersShop/#about"
                                >
                                    О нас
                                </a>
                                <a
                                    className={styles.Link}
                                    href="/SneakersShop/#select"
                                >
                                    Подбор Товара
                                </a>
                                <a
                                    className={styles.Link}
                                    href="/SneakersShop/#crew"
                                >
                                    Наша Комада
                                </a>
                                <a
                                    className={styles.Link}
                                    href="/SneakersShop/#main"
                                >
                                    Доставка товара
                                </a>
                                <a
                                    className={styles.Link}
                                    href="/SneakersShop/#contacts"
                                >
                                    Контакты
                                </a>
                                <a
                                    className={styles.Link}
                                    href="/SneakersShop/#faq"
                                >
                                    FAQ
                                </a>
                            </ul>
                        </nav>
                    )}
                </div>
            </div>
        </footer>
    );
};
