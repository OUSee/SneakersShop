import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.css'
import { AppDispatch, RootState } from '../../../redux/store'
import { useEffect, useState } from 'react'
import { getCart } from '../../../redux/slices/cartsSlice'
import { PostCart, Sneaker } from '../../../types'


interface IListItem{
    item: Sneaker
}
    
export const CartSection = () => {
    const [cartTotalPrice, setCartTotalPrice] = useState(0);
    const cartState = useSelector((state: RootState) => state.cart.data)
    
    const getPrice = () => {
        let sum = 0;
        cartState.items.forEach((item: Sneaker) => { 
            sum++
        })
        setCartTotalPrice(sum);
    }

    useEffect(()=>{getPrice()}, [])

    return ( 
        <div className={styles.container}>
            <div className={styles.cartHeader}>
                <h2 className={styles.cartTitle}>Оформление заказа</h2>
                <p className={styles.orderNumber}>Заказ {cartState.uid?.toUpperCase()}</p>
            </div>
            {cartTotalPrice == 0 && <h3 className={styles.emptyCart}>Корзина пуста</h3>}
            {cartTotalPrice != 0 && 
                <div className={styles.orderInfoContainer}>
                    <h3 className={styles.itemsAmmount}>Товаров в заказе: <span className={styles.boldtxt}>{cartState.items.length} шт</span></h3>
                    <h3 className={styles.itemsAmmount}>Общая сумма заказа: <span className={styles.boldtxt}>{cartTotalPrice} ₽</span></h3>
                    <input
                        type='checkbox'
                        id='orderListToggle'
                        className={styles.orderAccordionToggle}
                    ></input>
                    <label
                        className={styles.orderAccordionLable}
                        htmlFor="orderListToggle">
                        Состав заказа
                    </label>
                    <ul className={styles.accordionBody}>
                        {cartState.items.map((item) => {
                            return (<ListItem key={item.id} item={item} />)
                        })}
                    </ul>
                    <form className={styles.cartInputForm} action="" id='cartUserInfoForm'>
                        <input
                            type="text"
                            name='username'
                            id='CartUserName'
                            placeholder='Ваше имя'
                            className={styles.inputField}
                        />
                        <input
                            type="phone"
                            name='userphone'
                            id='CartUserPhone'
                            placeholder='Номер телефона'
                            className={styles.inputField}
                        />
                        <input
                            type="email"
                            name='usermail'
                            id='CartUserMail'
                            placeholder='E-mail'
                            className={styles.inputField}
                        />
                        <button type='submit' className={styles.sendInfoBTN}>
                            Оформить заказ
                        </button>
                    </form>
                </div>}
        </div>
    )
}


const ListItem = ({item}: IListItem) => {
    return (
       <li className={styles.buysListItem}>
            <img className={styles.listItemImg} src={item.imgUrl} alt="item" />
            <div className={styles.listItemInfo}>
                <h3 className={styles.listItemTitle}>{item.title}</h3>
                <p className={styles.listItemPrice}>{ item.price }₽</p>
            </div>
            <button className={styles.listItemDeleteBTN}>
                <img className={styles.deleteIcon} src="../src/assets/trashCanIcon.svg" alt="del" />
            </button>   
    </li>
    )
}