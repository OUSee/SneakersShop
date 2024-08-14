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
    const dispatch = useDispatch<AppDispatch>()
    
    const { title, imgUrl, price} = sneaker;

    const handleAddToCart = () => {
        const newCartInstance = {
            uid: cartState.uid,
            items: [...cartState.items, sneaker],
        };
        
        console.log("cartState", cartState);
        console.log("newCartInstance", newCartInstance);
        dispatch(updateCart(newCartInstance));
    };
    
    const tryOpenPopup = () => {
        if (screen.width <= 960) {
            openPopup();
        }
    }


    return (
        <li className={styles.container} onClick={tryOpenPopup}>
            <img
                id={`sneaker${sneaker.id}`}
                className={styles.productPhoto}
                src={imgUrl}
                alt="photo"
            />
            {screen.width > 960 && (
                <div className={styles.hoverOptions}>
                    <button className={styles.hoverButton} onClick={openPopup}>
                        <img
                            src="../../assets/wiewIcon.svg"
                            alt="W"
                            width="20em"
                            height="20em"
                        />
                    </button>
                    <button
                        className={styles.hoverButton}
                        onClick={handleAddToCart}
                    >
                        <img
                            src="../../assets/cartIcon.svg"
                            alt="C"
                            width="20em"
                            height="20em"
                        />
                    </button>
                </div>
            )}
            <h3 className={styles.productTitle}>{title}</h3>
            <p className={styles.productPrice}>{price} &#8381;</p>
        </li>
    );
}