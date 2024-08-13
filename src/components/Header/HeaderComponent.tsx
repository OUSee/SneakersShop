import styles from './styles.module.css'
import { CartPopup } from '../cartComponent/CartPopupWindow/CartPopup'
import { useState } from 'react'
import {  useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Burger } from './burger/burger'

    
export const HeaderComponent = () => {
    const [cartPopupOpen, setCartPopupOpen] = useState(false);
    const [menuView, setMenuView] = useState(false)
    const cartState = useSelector((state: RootState) => state.cart.data)
    const handleCartPopupOpen = () => {
        setCartPopupOpen(true);
    }
    const handleCartPopupClose = () => {
        setCartPopupOpen(false);
    }
    
    const burger = document.querySelector('.burger');

    burger?.addEventListener('click', () => {
        if(burger.className != 'burger active')
        burger.className = ( burger.className + '_active');
    });

    const viewMenu = () => {
        if (menuView) setMenuView(false)
        else setMenuView(true)
    }
    
    return ( 
        <header className={styles.container}>
            <div className='content'>
                <div className={styles.rowOrderBox}>
            <h1 className={styles.headTitle}>Sneak Max</h1>
            <nav className={styles.headNav}>
                {screen.width > 640 && <ul className={styles.headNavList}>
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
                        </ul>}
                        {screen.width < 640 &&
                            <div className={styles.headNavListMobile}>
                                <Burger onClick={viewMenu}/>
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
                            </div>
                        }
            </nav>
                </div>
                {menuView && <div className={styles.headNavListhidden}>
                            <a className={styles.Link} href="/#cathalogue">Каталог</a>
                    <a className={styles.Link} href="/#about">О нас</a>
                    <a className={styles.Link} href="/#select">Подбор Товара</a>
                    <a className={styles.Link} href="/#crew">Наша Комада</a>
                    <a className={styles.Link} href="/#main">Доставка товара</a>
                    <a className={styles.Link} href="/#contacts">Контакты</a>
                    <a className={styles.Link} href="/#faq">FAQ</a>
                        </div>}
    </div>
    </header>
    )
}