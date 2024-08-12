import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import { Link } from 'react-router-dom';
import { mapPrice, Sneaker } from '../../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

interface ICartPopup {
    onClose: () => void;
    items: Sneaker[]
}
interface ICartListItem{
    item: Sneaker
}
    
export const CartPopup = ({ onClose, items = [] }: ICartPopup) => {
    const cartState = useSelector((state: RootState) => state.cart.data)
    const [finalPrice, setFinalPrice] = useState(0)
    const handleClose = () => {
        onClose();
    } 

    const getFinalPrice = () => {
        const price = cartState.items.reduce((acc, item: Sneaker) => {
            return(acc += +item.price.replace(' ', ''))
        }, 0)
        setFinalPrice(price)
    }

    useEffect(() => {
        
        document.addEventListener('keydown', (e) => { 
            if (e.key === 'Escape') { 
                onClose();
            }
        })
    })

    useEffect(() => {
        getFinalPrice();
    }, [items])

    if (finalPrice == 0) {
        return (
            <div className={styles.container} id='#popupContainer' onClick={handleClose}>
            <div className={styles.popupWindow}>
                <div className={styles.popupHeader}>
                    <img className={styles.emptyCart} src="https://media0.giphy.com/media/fscIxPfKjPyShbwUS5/giphy.gif?cid=6c09b9524frggor5q9pyva3oxj6aezdsqcswk2qdmlv7gep7&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="" />
                </div>
                <div className={styles.cartFooter}>
                    <h3 className={styles.emptyCartTitle}>Корзина пуста</h3>
                </div>
            </div>
        </div>
        )
    }
    else return ( 
        <div className={styles.container} id='#popupContainer' onClick={handleClose}>
            <div className={styles.popupWindow}>
                <ul className={styles.buysList}>
                    {items.map((item, i) => {
                        return (
                            <CartListItem
                                key={item.id + "_"+ i}
                                item={item}
                            ></CartListItem>)
                    })}
                </ul>
                <div className={styles.cartFooter}>
                    <div className={styles.cartInfo}>
                        <h3 className={styles.cartFinal}>Итого:</h3>
                        <p className={styles.cartFinalPrice}>{mapPrice(finalPrice)}₽</p>
                    </div>
                    <Link to='/cart' className={styles.cartBTN}>Перейти в корзину</Link>
                </div>
            </div>
        </div>
    )
}

const CartListItem = ({item}: ICartListItem) => {
    const handleDelete = () => {
        const json = localStorage.getItem('cart')
        if (json) {
            const cart = JSON.parse(json);
            const index = cart.items.findIndex((i: Sneaker) => i.id === item.id);
            cart.items.slice()
        }
    }

    return (
        <li className={styles.buysListItem}>
            <img className={styles.listItemImg} src={item.imgUrl} alt="item"/>
            <div className={styles.listItemInfo}>
                <h3 className={styles.listItemTitle}>{item.title}</h3>
                <p className={styles.listItemPrice}>{item.price}₽</p>
            </div>
            <button className={styles.listItemDeleteBTN}>
                <img className={styles.deleteIcon} src="../src/assets/trashCanIcon.svg" alt="del" onClick={handleDelete}/>
            </button>   
        </li>
    )
}