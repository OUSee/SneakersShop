import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Cart, mapPrice, Sneaker } from "../../../types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { updateCart } from "../../../redux/slices/cartsSlice";
import { TrashIcon } from "../../icons/trashIcon";

interface ICartPopup {
    onClose: () => void;
    items: Sneaker[];
}
interface ICartListItem {
    handleDelete: () => void;
    item: Sneaker;
}

export const CartPopup = ({ onClose, items = [] }: ICartPopup) => {
    const cartState = useSelector((state: RootState) => state.cart.data);
    const [finalPrice, setFinalPrice] = useState(0);
    const dispatch = useDispatch<AppDispatch>();
    const handleClose = () => {
        onClose();
    };

    const handleDelete = (delitem: Sneaker) => {
        var searchindex = items.indexOf(delitem);
        let arr = items;

        const final = arr.filter((item: Sneaker) => {
            if (searchindex != arr.indexOf(item)) {
                return true;
            } else {
                return false;
            }
        });
        dispatch(updateCart({ uid: cartState.uid, items: final } as Cart));
    };

    const getFinalPrice = () => {
        const price = cartState.items.reduce((acc, item: Sneaker) => {
            return (acc += +item.price.replace(" ", ""));
        }, 0);
        setFinalPrice(price);
    };

    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        });
    });

    useEffect(() => {
        getFinalPrice();
    }, [items]);

    if (finalPrice == 0) {
        return (
            <div
                className={styles.container}
                id="#popupContainer"
                onClick={handleClose}
            >
                <div className={styles.popupWindow}>
                    <div className={styles.popupHeader}>
                        <img
                            className={styles.emptyCart}
                            src="https://media0.giphy.com/media/fscIxPfKjPyShbwUS5/giphy.gif?cid=6c09b9524frggor5q9pyva3oxj6aezdsqcswk2qdmlv7gep7&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
                            alt=""
                        />
                    </div>
                    <div className={styles.cartFooter}>
                        <h3 className={styles.emptyCartTitle}>Корзина пуста</h3>
                    </div>
                </div>
            </div>
        );
    } else
        return (
            <div
                className={styles.container}
                id="#popupContainer"
                onClick={handleClose}
            >
                <div className={styles.popupWindow}>
                    <ul className={styles.buysList}>
                        {items.map((item, i) => {
                            return (
                                <CartListItem
                                    key={item.id + "_" + i}
                                    item={item}
                                    handleDelete={() => handleDelete(item)}
                                ></CartListItem>
                            );
                        })}
                    </ul>
                    <div className={styles.cartFooter}>
                        <div>
                            <h3 className={styles.cartFinal}>Итого:</h3>
                            <p className={styles.cartFinalPrice}>
                                {mapPrice(finalPrice)}₽
                            </p>
                        </div>
                        <Link
                            to="/SneakersShop/cart"
                            className={styles.cartBTN}
                        >
                            Перейти в корзину
                        </Link>
                    </div>
                </div>
            </div>
        );
};

const CartListItem = ({ item, handleDelete }: ICartListItem) => {
    return (
        <li className={styles.buysListItem}>
            <img className={styles.listItemImg} src={item.imgUrl} alt="item" />
            <div className={styles.listItemInfo}>
                <h3 className={styles.listItemTitle}>{item.title}</h3>
                <p className={styles.listItemPrice}>{item.price}₽</p>
            </div>
            <button className={styles.listItemDeleteBTN} onClick={handleDelete}>
                <TrashIcon />
            </button>
        </li>
    );
};
