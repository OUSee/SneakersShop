import styles from "./styles.module.css";

export const ErrorSection = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.errTitle}>
                Упс... Что-то пошло не так, попробуйте перезагрузить страницу.
            </h1>
            <div className={styles.preloader}>
                <div className={styles.preloader__box}>
                    <span />
                    <span />
                    <span />
                </div>
            </div>
        </div>
    );
};
