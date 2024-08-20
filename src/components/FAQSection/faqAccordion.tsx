import styles from "./styles.module.css";

export const FAQAccordion = () => {
    return (
        <div className={styles.accordionContainer}>
            <hr />
            <div className={styles.accordion}>
                <input
                    className={styles.accordionToggle}
                    type="checkbox"
                    id="accordion1"
                />
                <label className={styles.accordionlabel} htmlFor="accordion1">
                    Вопрос 1
                </label>
                <p className={styles.accordionContent}>
                    А это ответ 1: в комплексе функционируют 6 детских садов с
                    площадками, воспитателями и всякими другими людьми
                </p>
            </div>
            <hr />
            <div className={styles.accordion}>
                <input
                    className={styles.accordionToggle}
                    type="checkbox"
                    id="accordion2"
                />
                <label className={styles.accordionlabel} htmlFor="accordion2">
                    Вопрос 2
                </label>
                <p className={styles.accordionContent}>
                    А это ответ 2: в комплексе функционируют 6 детских садов с
                    площадками, воспитателями и всякими другими людьми
                </p>
            </div>
            <hr />
        </div>
    );
};
