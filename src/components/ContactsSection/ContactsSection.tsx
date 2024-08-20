import { InstaIcon } from "../icons/instaIcon";
import { VkIcon } from "../icons/vkIcon";
import styles from "./styles.module.css";

export const ContactsSection = () => {
    return (
        <div className={styles.container}>
            <div id="contacts" className="content">
                <div className={styles.contentContainer}>
                    <div>
                        <h2 className={styles.sectionHeading}>Контакты</h2>
                        <div className={styles.tooltipgroup}>
                            <p className={styles.infoTitle}>главный офис</p>
                            <div className={styles.tooltip}>?</div>
                            <div className={styles.tooltipContent}>
                                Адрес и телефон для корреспонденции, инвесторов.
                                Вопросы о доставке, качестве обслуживания и
                                товара просьба задавать в отдел продаж
                            </div>
                            <div className={styles.tooltipDecoration}></div>
                        </div>
                        <h2 className={styles.number}>+7 800 789 89 89</h2>
                        <p className={styles.adress}>
                            г. Санкт-Петербург, Комсомольская, 43 к1
                        </p>
                        <p className={styles.infoTitle}>отдел продаж</p>
                        <h2 className={styles.number}>+7 800 789 89 89</h2>
                        <p className={styles.adress}>
                            г. Санкт-Петербург, Комсомольская, 43 к1
                        </p>
                        <div className={styles.linksIcons}>
                            <a
                                className={styles.vkLink}
                                href="https://vk.com/luckyoneboy"
                            >
                                <VkIcon />
                            </a>
                            <a
                                className={styles.instagramLink}
                                href="https://www.instagram.com/dicedites_vir"
                            >
                                <InstaIcon />
                            </a>
                        </div>
                    </div>
                    <div className={styles.mapcontainer}>
                        <div className={styles.map}>
                            <div className={styles.mapFirstDiv}>
                                <a
                                    href="https://yandex.ru/maps/121642/innopolis/?utm_medium=mapframe&utm_source=maps"
                                    className={styles.mapASity}
                                >
                                    Иннополис
                                </a>
                                <a
                                    className={styles.mapLinkAdress}
                                    href="https://yandex.ru/maps/121642/innopolis/house/universitetskaya_ulitsa_5/YEEYcQNpSkIHQFtvfXt0c39rbQ==/?ll=48.749370%2C55.752389&utm_medium=mapframe&utm_source=maps&z=16.61"
                                >
                                    Университетская улица, 5 — Яндекс Карты
                                </a>
                                <iframe
                                    src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=30.142152%2C59.830499&mode=whatshere&whatshere[point]=30.142152%2C59.830499&whatshere[zoom]=17&z=16"
                                    width="100%"
                                    height="100%"
                                    className={styles.mapFrame}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
