import styles from './styles.module.css'
import { CartPopup } from '../cartComponent/CartPopupWindow/CartPopup'
import { useState } from 'react'
import { Cart, Sneaker } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { getCart } from '../../redux/slices/cartsSlice'

    
export const HeaderComponent = () => {
    const [cartPopupOpen, setCartPopupOpen] = useState(false);
    const cartState = useSelector((state: RootState) => state.cart.data)
    const handleCartPopupOpen = () => {
        setCartPopupOpen(true);
    }
    const handleCartPopupClose = () => {
        setCartPopupOpen(false);
    }
    

    
    return ( 
        <header className={styles.container}>
            <div className='content'>
                <div className={styles.rowOrderBox}>
            <h1 className={styles.headTitle}>Sneak Max</h1>
            <nav className={styles.headNav}>
                <ul className={styles.headNavList}>
                    <a className={styles.Link} href="/#cathalogue">Каталог</a>
                    <a className={styles.Link} href="/#about">О нас</a>
                    <a className={styles.Link} href="/#select">Подбор Товара</a>
                    <a className={styles.Link} href="/#crew">Наша Комада</a>
                    <a className={styles.Link} href="/#main">Доставка товара</a>
                    <a className={styles.Link} href="/#contacts">Контакты</a>
                    <a className={styles.Link} href="/#faq">FAQ</a>
                    <div className={styles.cartContainer}>
                        <button className={styles.Link} onClick={() => { handleCartPopupOpen() }} >
                        Корзина
                        <img 
                            className={styles.cartIcon}
                            src="./src/assets/cartIcon.svg"
                        />
                        </button>
                        <div className={styles.cartAmountIcon}>
                            {cartState.items.length > 0 ? cartState.items.length : 0}
                        </div>
                            </div>
                            {
                                cartPopupOpen && <CartPopup items={cartState.items} onClose={ handleCartPopupClose } />
                            }
                </ul>
            </nav>
         </div>
    </div>
    </header>
    )
}

function checkifCartExists() {
    throw new Error('Function not implemented.')
}
