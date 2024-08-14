import { FAQAccordion } from './faqAccordion'
import styles from './styles.module.css'

    
export const FAQSection = () => {
    return (
        <div className={styles.container}>
            <div id="faq" className="content">
                <h1 className={styles.faqTitle}>Часто задаваемые вопросы</h1>
                <FAQAccordion />
                <div className={styles.secondSection}>
                    <form className={styles.askQuestionForm}>
                        <h2 className={styles.askFormTitle}>
                            Есть еще вопросы?
                        </h2>
                        <p className={styles.askFormDescription}>
                            Заполните форму и наш менеджер свяжется с вами
                        </p>
                        <input
                            type="text"
                            name="askName"
                            id="askformname"
                            placeholder="Ваше имя"
                            className={styles.askFormInput}
                        />
                        <input
                            type="email"
                            name="askEmail"
                            id="askformemail"
                            placeholder="E-mail"
                            className={styles.askFormInput}
                        />
                        <button
                            type="submit"
                            className={styles.askFormSubmitBTN}
                        >
                            Отправить
                        </button>
                    </form>
                    <div className={styles.instaGroup}>
                        <img
                            className={styles.instaGrouplogo}
                            src="../../assets/instaLogo.png"
                            alt="instagram"
                        />
                        <ul className={styles.instaGalary}>
                            <li className={styles.instaGalaryItem}>
                                <img
                                    className={styles.instaGalaryItemImg}
                                    src="../../assets/instaGroup/1.png"
                                    alt="pic"
                                    width="110px"
                                />
                                <img
                                    className={styles.instaGalaryItemImg}
                                    src="../../assets/instaGroup/2.png"
                                    alt="pic"
                                    width="110px"
                                />
                            </li>
                            <li className={styles.instaGalaryItem}>
                                <img
                                    className={styles.instaGalaryItemImg}
                                    src="../../assets/instaGroup/5.png"
                                    alt="pic"
                                    width="231px"
                                />
                            </li>
                            <li className={styles.instaGalaryItem}>
                                <img
                                    className={styles.instaGalaryItemImg}
                                    src="../../assets/instaGroup/3.png"
                                    alt="pic"
                                    width="110px"
                                />
                                <img
                                    className={styles.instaGalaryItemImg}
                                    src="../../assets/instaGroup/4.png"
                                    alt="pic"
                                    width="110px"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

