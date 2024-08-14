import { useDispatch, useSelector } from 'react-redux';
import { Cart, mapPrice, Sneaker } from '../../../types';
import styles from './styles.module.css';
import { useEffect, useState } from 'react'
import { AppDispatch, RootState } from '../../../redux/store';
import { updateCart } from '../../../redux/slices/cartsSlice';
import { TrashIcon } from '../../icons/trashIcon';


interface IListItem{
    item: Sneaker
    handleDelete: ()=>void
}
    
export const CartSection = () => {
    const [cartTotalPrice, setCartTotalPrice] = useState(0);
    const cartState = useSelector((state: RootState) => state.cart.data) 
    const dispatch = useDispatch<AppDispatch>()
    
    const getPrice = () => {
        const price = cartState.items.reduce((acc, item: Sneaker) => {
            return(acc += +item.price.replace(' ', ''))
        }, 0)
        setCartTotalPrice(price);
    }

    const handleDelete = (item: Sneaker) => {
        var searchindex = cartState.items.indexOf(item);
        let arr = cartState.items;
        
        const final = arr.filter((item: Sneaker) => {
            if (searchindex != arr.indexOf(item) ) {
                return true
            }
            else {
                return false
            }
        })
        dispatch(updateCart({uid: cartState.uid, items: final} as Cart))
    }

    useEffect(() => {
        getPrice();
    }, [cartState])
    return ( 
        <div className={styles.container}>
            <div className={styles.cartHeader}>
                <h2 className={styles.cartTitle}>Оформление заказа</h2>
                <p className={styles.orderNumber}>Заказ {cartState.uid.toUpperCase()}</p>
            </div>
            {cartTotalPrice == 0 && <h3 className={styles.emptyCart}>Корзина пуста</h3>}
            {cartTotalPrice != 0 && 
                <div className={styles.orderInfoContainer}>
                    <h3 className={styles.itemsAmmount}>Товаров в заказе: <span className={styles.boldtxt}>{cartState.items.length} шт</span></h3>
                    <h3 className={styles.itemsAmmount}>Общая сумма заказа: <span className={styles.boldtxt}>{mapPrice(cartTotalPrice)} ₽</span></h3>
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
                        {cartState.items.map((item, i) => {
                            return (<ListItem key={item.id + i} item={item} handleDelete={()=>{handleDelete(item)}}/>)
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


const ListItem = ({item, handleDelete}: IListItem) => {
    return (
        <li className={styles.buysListItem}>
            <img className={styles.listItemImg} src={item.imgUrl} alt="item" />
            <div className={styles.listItemInfo}>
                <h3 className={styles.listItemTitle}>{item.title}</h3>
                <p className={styles.listItemPrice}>{item.price}₽</p>
            </div>
            <button onClick={handleDelete} className={styles.listItemDeleteBTN}>
                <TrashIcon />
            </button>
        </li>
    );
}