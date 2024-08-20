import { FAQAccordion } from "./faqAccordion";
import styles from "./styles.module.css";
import instaLogo from "../../assets/instaLogo.png";
import galaryItem1 from "../../assets/instaGroup/1.png";
import galaryItem2 from "../../assets/instaGroup/2.png";
import galaryItem3 from "../../assets/instaGroup/3.png";
import galaryItem4 from "../../assets/instaGroup/4.png";
import galaryItem5 from "../../assets/instaGroup/5.png";
import { useState } from "react";

export const FAQSection = () => {
    const [isformSent, setFormSent] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const data = Object.fromEntries(form);
        console.log("Form submitted:", data);
        setFormSent(true);
    };

    const replaceIfhandler = () => {
        if (!isformSent)
            return (
                <>
                    <form
                        className={styles.askQuestionForm}
                        onSubmit={handleSubmit}
                    >
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
                </>
            );
        else {
            return (
                <div className={styles.askQuestionForm}>
                    <h2 className={styles.askFormTitle}>
                        Спасибо за ваш интерес!
                    </h2>
                    <p className={styles.askFormDescription}>
                        Наш менеджер скоро свяжется с вами
                    </p>
                    <div className={styles.gifContainer}>
                        <img
                            className={styles.iFrame}
                            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3dkcjdjanNoOTVxM3hudjJ3amU1YndueWNpeWphbmEwc2V3bHV5ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT8qBu5gOYEqHhgDQs/giphy.webp"
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
            );
        }
    };

    return (
        <div className={styles.container}>
            <div id="faq" className="content">
                <h1 className={styles.faqTitle}>Часто задаваемые вопросы</h1>
                <FAQAccordion />
                <div className={styles.secondSection}>
                    {replaceIfhandler()}
                    <div className={styles.instaGroup}>
                        <img
                            className={styles.instaGrouplogo}
                            src={instaLogo}
                            alt="instagram"
                        />
                        <ul className={styles.instaGalary}>
                            <li className={styles.instaGalaryItem}>
                                <img
                                    src={galaryItem1}
                                    alt="pic"
                                    width="110px"
                                />
                                <img
                                    src={galaryItem2}
                                    alt="pic"
                                    width="110px"
                                />
                            </li>
                            <li className={styles.instaGalaryItem}>
                                <img
                                    src={galaryItem5}
                                    alt="pic"
                                    width="231px"
                                />
                            </li>
                            <li className={styles.instaGalaryItem}>
                                <img
                                    src={galaryItem3}
                                    alt="pic"
                                    width="110px"
                                />
                                <img
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
};
