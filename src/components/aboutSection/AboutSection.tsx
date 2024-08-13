import styles from './styles.module.css'
    
export const AboutSection = () => {
    return ( 
        <div className={styles.aboutContainer}>
            <div id='about' className='content'>
                <div className={styles.contentContainer}>
                    <div className={styles.infoContainer}>
                        <h2 className={styles.infoHeader}>Пара слов о нас</h2>
                        <p className={styles.infoQuote}>Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через&nbsp;спорт мы можем менять жизни. В том числе с помощью воодушевляющих историй спортсменов. Чтобы помочь тебе подняться и&nbsp;двигаться вперед.</p>
                        <h3 className={styles.infoQuoteAuthor}>&mdash; SneakMax</h3>
                    </div>
                    <div className={styles.picContainer}>
                        <img className={styles.abotPic} src='../src/assets/aboutPic.png' alt="pic"/>
                    </div>
                </div>
            </div>
        </div>
    )
}