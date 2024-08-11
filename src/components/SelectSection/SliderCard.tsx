import styles from './styles.module.css'

interface ISliderCard{
    id: string,
    title: string,
    description: string,
    number: string,
    children?: JSX.Element[] | JSX.Element | null
    switchSlide: ()=>void
}
    
export const SliderCard = ({ id, children, title, description, number, switchSlide}: ISliderCard) => {

    const handleNextSlide = () => {
        switchSlide();
    }
    
    const showSlideFooter = () => {
        if (number !== "4") {
            return (
                    <div className={styles.sliderCardInsides}>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.userInfoDescription}>
                    {description}
                </p>
                <hr />
                <div className={styles.cardContent}>
                    { children }
                </div>    
                <hr />
                <div className={styles.cardFooter}>
                    <p className={styles.cardPagination}>{number} of 3</p>
                    <button id={`next${id}`} className={styles.cardButton} onClick={handleNextSlide}>Следующий шаг</button>
                </div>
            </div>
        )
        }
        else {
            return (
                <div className={styles.sliderCardInsides}>
                <h2 className={styles.cardTitleV}>{title}</h2>
                <p className={styles.userInfoDescriptionV}>
                    {description}
                </p>
                <hr />
                <div className={styles.cardContent}>
                    { children }
                </div>    
                </div>
                )
        }
    }

    return (
        <div id={ id } className={styles.sliderCard + ' ' + styles.inactiveSlide}>
            {showSlideFooter()}
        </div>
    )
}