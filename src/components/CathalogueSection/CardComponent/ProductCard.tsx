import { useDispatch, useSelector } from 'react-redux';
import { Sneaker } from '../../../types'
import styles from './styles.module.css'
import { AppDispatch, RootState } from '../../../redux/store';
import { updateCart } from '../../../redux/slices/cartsSlice';

interface IProductCard {
    openPopup: () => void,
    sneaker: Sneaker,

}
    
export const ProductCard = ({ openPopup, sneaker }: IProductCard) => {
    const cartState = useSelector((state: RootState) => state.cart.data)
    const cartStatus = useSelector((state: RootState) => state.cart.status)
    const dispatch = useDispatch<AppDispatch>()
    
    const { title, imgUrl, price} = sneaker;

    const handleAddToCart = () => {
        const newCartInstance = {...cartState, uid: cartState.uid, items: {...[], sneaker}}
        dispatch(updateCart(newCartInstance))
    }

    return ( 
        <li className={styles.container}>
            <img className={styles.productPhoto} src={imgUrl} alt="photo" />
            <div className={styles.hoverOptions}>
                <button className={styles.hoverButton} onClick={openPopup}>
                    <img src="../src/assets/wiewIcon.svg" alt="W" width='20em' height='20em'/>
                </button>
                <button className={styles.hoverButton} onClick={handleAddToCart}>
                    <img src="../src/assets/cartIcon.svg" alt="C" width='20em' height='20em'/>
                </button>
            </div>
            <h3 className={styles.productTitle}>{title}</h3>
            <p className={styles.productPrice}>{price} &#8381;</p>
        </li>
    )
}