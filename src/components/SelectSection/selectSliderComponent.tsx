import { useEffect, useState } from "react";
import { SliderCard } from "./SliderCard";
import styles from "./styles.module.css";
import sneakerImg from "../../assets/sneaker.png";
import secSliderPic from "../../assets/secondSlidePic.png";

export const SelectSlider = () => {
    const [currentSlide, setCurrentSlide] = useState<Element>();
    const [personalOffer, setPersonalOffer] = useState(false);

    const switchSlide = () => {
        const prevSlide = currentSlide;
        const nextSlide = currentSlide?.nextElementSibling;
        if (prevSlide != undefined) {
            prevSlide.className = styles.inactiveSlide;
        }
        if (nextSlide) {
            setCurrentSlide(nextSlide);
        }
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const data = Object.fromEntries(form);
        console.log("Form submitted: ", data);
        setPersonalOffer(true);
    };

    const tryPersonalOffer = () => {
        if (!personalOffer)
            return (
                <>
                    <form
                        onSubmit={handleSubmit}
                        className={styles.userInfoCard}
                    >
                        <h2 className={styles.userInfoTitle}>
                            Получить предложение
                        </h2>
                        <p className={styles.userInfoDescription}>
                            Получите подборку подходящих для вас моделей на
                            почту
                        </p>
                        <input
                            className={styles.userInfoInput}
                            type="text"
                            name="name"
                            id="inputUserName"
                            placeholder="Ваше имя"
                        />
                        <input
                            className={styles.userInfoInput}
                            type="email"
                            name="email"
                            id="inputUserEmail"
                            placeholder="E-mail"
                        />
                        <button
                            type="submit"
                            className={styles.submitUserInfoButton}
                        >
                            Получить
                        </button>
                    </form>
                </>
            );
        else
            return (
                <>
                    <h3>
                        Уже отправили вам ваше предложение, проверьте почту!
                    </h3>
                </>
            );
    };

    useEffect(() => {
        if (currentSlide != undefined) {
            currentSlide.className = styles.sliderCard;
        }
    }, [currentSlide]);

    useEffect(() => {
        const firstSlide = document.querySelector("#sliderCard1");
        if (firstSlide != null) {
            setCurrentSlide(firstSlide);
        }
    }, []);
    return (
        <div className={styles.sliderContainer}>
            <div id="slider" className={styles.sliderWrapper}>
                <SliderCard
                    id="sliderCard1"
                    title="Мы подберем идеальную пару для вас"
                    description="Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями"
                    number="1"
                    switchSlide={switchSlide}
                >
                    <h2 className={styles.sliderContentTitle}>
                        Какой тип кроссовок рассматриваете?
                    </h2>
                    <div className={styles.sliderContentOptionsTable}>
                        <div className={styles.sliderContentOptionsTableItem}>
                            <img
                                className={styles.optionTableItemImg}
                                src={sneakerImg}
                                alt="sneaker"
                            />
                            <input
                                className="defaultCheckBox"
                                type="checkbox"
                                name="option"
                                id="optionSneaker1"
                            />
                            <label
                                className={styles.sliderCardOption}
                                htmlFor="optionSneaker1"
                            >
                                Кроссовки
                            </label>
                        </div>
                        <div className={styles.sliderContentOptionsTableItem}>
                            <img
                                className={styles.optionTableItemImg}
                                src={sneakerImg}
                                alt="sneaker"
                            />
                            <input
                                className="defaultCheckBox"
                                type="checkbox"
                                name="option"
                                id="optionSneaker2"
                            />
                            <label
                                className={styles.sliderCardOption}
                                htmlFor="optionSneaker2"
                            >
                                Кроссовки
                            </label>
                        </div>
                        <div className={styles.sliderContentOptionsTableItem}>
                            <img
                                className={styles.optionTableItemImg}
                                src={sneakerImg}
                                alt="sneaker"
                            />
                            <input
                                className="defaultCheckBox"
                                type="checkbox"
                                name="option"
                                id="optionSneaker3"
                            />
                            <label
                                className={styles.sliderCardOption}
                                htmlFor="optionSneaker3"
                            >
                                Кроссовки
                            </label>
                        </div>
                        <div className={styles.sliderContentOptionsTableItem}>
                            <img
                                className={styles.optionTableItemImg}
                                src={sneakerImg}
                                alt="sneaker"
                            />
                            <input
                                className="defaultCheckBox"
                                type="checkbox"
                                name="option"
                                id="optionSneaker4"
                            />
                            <label
                                className={styles.sliderCardOption}
                                htmlFor="optionSneaker4"
                            >
                                Кроссовки
                            </label>
                        </div>
                        <div className={styles.sliderContentOptionsTableItem}>
                            <img
                                className={styles.optionTableItemImg}
                                src={sneakerImg}
                                alt="sneaker"
                            />
                            <input
                                className="defaultCheckBox"
                                type="checkbox"
                                name="option"
                                id="optionSneaker5"
                            />
                            <label
                                className={styles.sliderCardOption}
                                htmlFor="optionSneaker5"
                            >
                                Кроссовки
                            </label>
                        </div>
                        <div className={styles.sliderContentOptionsTableItem}>
                            <img
                                className={styles.optionTableItemImg}
                                src={sneakerImg}
                                alt="sneaker"
                            />
                            <input
                                className="defaultCheckBox"
                                type="checkbox"
                                name="option"
                                id="optionSneaker6"
                            />
                            <label
                                className={styles.sliderCardOption}
                                htmlFor="optionSneaker6"
                            >
                                Кроссовки
                            </label>
                        </div>
                    </div>
                </SliderCard>
                <SliderCard
                    id="sliderCard2"
                    title="Мы подберем идеальную пару для вас"
                    description="Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями"
                    number="2"
                    switchSlide={switchSlide}
                >
                    <h2 className={styles.sliderContentTitle}>
                        Какой тип кроссовок рассматриваете?
                    </h2>
                    <ul className={styles.sizesOptions}>
                        <li className={styles.sizesOptionContainer}>
                            <input
                                className="defaultCheckBox"
                                type="checkbox"
                                name="sizeoption"
                                id="optionSize1"
                            />
                            <label
                                className={styles.sliderCardOption}
                                htmlFor="optionSize1"
                            >
                                менее 36
                            </label>
                        </li>
                        <li className={styles.sizesOptionContainer}>
                            <input
                                className="defaultCheckBox"
                                type="checkbox"
                                name="sizeoption"
                                id="optionSize2"
                            />
                            <label
                                className={styles.sliderCardOption}
                                htmlFor="optionSize2"
                            >
                                36-38
                            </label>
                        </li>
                        <li className={styles.sizesOptionContainer}>
                            <input
                                className="defaultCheckBox"
                                type="checkbox"
                                name="sizeoption"
                                id="optionSize3"
                            />
                            <label
                                className={styles.sliderCardOption}
                                htmlFor="optionSize3"
                            >
                                39-41
                            </label>
                        </li>
                        <li className={styles.sizesOptionContainer}>
                            <input
                                className="defaultCheckBox"
                                type="checkbox"
                                name="sizeoption"
                                id="optionSize4"
                            />
                            <label
                                className={styles.sliderCardOption}
                                htmlFor="optionSize4"
                            >
                                42-44
                            </label>
                        </li>
                        <li className={styles.sizesOptionContainer}>
                            <input
                                className="defaultCheckBox"
                                type="checkbox"
                                name="sizeoption"
                                id="optionSize5"
                            />
                            <label
                                className={styles.sliderCardOption}
                                htmlFor="optionSize5"
                            >
                                45 и больше
                            </label>
                        </li>
                    </ul>
                    <img
                        className={styles.secondSlidePic}
                        src={secSliderPic}
                        alt="decPic"
                    />
                </SliderCard>
                <SliderCard
                    id="sliderCard3"
                    title="Мы подберем идеальную пару для вас"
                    description="Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями"
                    number="3"
                    switchSlide={switchSlide}
                >
                    <h2 className={styles.sliderContentTitle}>
                        Уточните какие-либо моменты
                    </h2>
                    <textarea
                        name="additionalInfo"
                        id="additionalInfo"
                        placeholder="введите сообщение"
                        className={styles.sliderCardTextArea}
                    ></textarea>
                </SliderCard>
                <SliderCard
                    id="sliderCard4"
                    title="Ваша подборка готова"
                    description="Оставьте свои контактные данные, чтобы бы мы могли отправить  подготовленный для вас каталог"
                    number="4"
                    switchSlide={switchSlide}
                    
                >
                    {tryPersonalOffer()}
                </SliderCard>
            </div>
        </div>
    );
};
