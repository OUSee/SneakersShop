import { FAQAccordion } from './faqAccordion'
import styles from './styles.module.css'
import instaLogo from "../../assets/instaLogo.png";
import galaryItem1 from '../../assets/instaGroup/1.png'
import galaryItem2 from "../../assets/instaGroup/2.png";
import galaryItem3 from "../../assets/instaGroup/3.png";
import galaryItem4 from "../../assets/instaGroup/4.png";
import galaryItem5 from "../../assets/instaGroup/5.png";


    
export const FAQSection = () => {

    const handleSubmit = (e: any) => {
        e.preventDefault()
        

        const form = new FormData(e.target);
        const data = Object.fromEntries(form);
        console.log('Form submitted:', data)
    }

    return (
        <div className={styles.container} onSubmit={handleSubmit}>
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
                            src={instaLogo}
                            alt="instagram"
                        />
                        <ul className={styles.instaGalary}>
                            <li className={styles.instaGalaryItem}>
                                <img
                                    className={styles.instaGalaryItemImg}
                                    src={galaryItem1}
                                    alt="pic"
                                    width="110px"
                                />
                                <img
                                    className={styles.instaGalaryItemImg}
                                    src={galaryItem2}
                                    alt="pic"
                                    width="110px"
                                />
                            </li>
                            <li className={styles.instaGalaryItem}>
                                <img
                                    className={styles.instaGalaryItemImg}
                                    src={galaryItem5}
                                    alt="pic"
                                    width="231px"
                                />
                            </li>
                            <li className={styles.instaGalaryItem}>
                                <img
                                    className={styles.instaGalaryItemImg}
                                    src={galaryItem3}
                                    alt="pic"
                                    width="110px"
                                />
                                <img
                                    className={styles.instaGalaryItemImg}
                                    src={galaryItem4}
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

