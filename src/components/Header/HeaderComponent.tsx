import styles from './styles.module.css'
import { CartPopup } from '../cartComponent/CartPopupWindow/CartPopup'
import { useEffect, useState } from 'react'
import { Cart, PostCart } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { getCart, postCart } from '../../redux/slices/cartsSlice'
    
export const HeaderComponent = () => {
    const [cartPopupOpen, setCartPopupOpen] = useState(false);
    const state = useSelector((state: RootState) => state.cart.data)
    const dispatch = useDispatch<AppDispatch>()
    const [cartItemsAmmount, setCartAmmount] = useState(0)

    const handleCartPopupOpen = () => {
        setCartPopupOpen(true);
    }
    const handleCartPopupClose = () => {
        setCartPopupOpen(false);
    }

    const checkifCartExists = async () => {
        const generateUID = () => {
            let uid = Math.random() * Math.pow(36, 6) << 0;
            let struid = uid.toString() 
            struid = '000000' + uid.toString(36);
            return struid.slice(-6);
        }

        const json = await localStorage.getItem('cart');
        if (json) {
            const { uid } = JSON.parse(json)
            await dispatch(getCart(uid))  
            setCartAmmount(state.items.length)
        }
        else {
            const newCart: PostCart = {
                uid: generateUID(),
                items: []
            }
            dispatch(postCart(newCart))
        }
    }



    useEffect(() => { checkifCartExists() }, [])
    useEffect(() => { setCartAmmount(state.items.length)},[state])
    
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
                            {cartItemsAmmount}
                        </div>
                            </div>
                            {
                                cartPopupOpen && <CartPopup items={state.items} onClose={ handleCartPopupClose } />
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
