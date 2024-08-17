import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Sneaker } from "../../../types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { updateCart } from "../../../redux/slices/cartsSlice";

interface ICardPopup {
    onClose: () => void;
    sneaker: Sneaker;
}

export const CardPopup = ({ onClose, sneaker }: ICardPopup) => {
    const cartState = useSelector((state: RootState) => state.cart.data);
    const dispatch = useDispatch<AppDispatch>();
    const [magnifier, setMagnifier] = useState(false);
    let counter = 0;

    const handleAddToCart = () => {
        let newItems = [...(cartState.items as Sneaker[]), sneaker];
        const newCartInstance = {
            uid: cartState.uid,
            items: newItems,
        };
        dispatch(updateCart(newCartInstance));
    };

    const rate = () => {
        const rateContainer = document.querySelector("#rating");
        while (counter < sneaker.stars) {
            const star = document.createElement("span");
            star.innerHTML = "&#9733;";
            rateContainer?.appendChild(star);
            counter++;
        }
    };

    function magnify(imgID: string, zoom: number) {
        setMagnifier(true);

        const img = document.getElementById(imgID) as HTMLImageElement;

        /* Create magnifier glass: */

        const glassInstance = document.querySelector("#magnifier");
        if (glassInstance != null) {
            glassInstance.remove();
        }
        const glass = document.createElement("div");
        glass.setAttribute("id", "magnifier");
        glass.className = styles.magnifierGlass;

        /* Insert magnifier glass: */

        img?.parentElement?.insertBefore(glass, img);

        /* Set background properties for the magnifier glass: */

        glass.style.backgroundImage = "url('" + img?.src + "')";
        glass.style.backgroundRepeat = "no-repeat";
        glass.style.backgroundSize =
            img?.width * zoom + "px " + img?.height * zoom + "px";
        const bw = 3;
        const w = glass.offsetWidth / 2;
        const h = glass.offsetHeight / 2;

        /* Execute a function when someone moves the magnifier glass over the image: */

        glass.addEventListener("mousemove", moveMagnifier);
        img?.addEventListener("mousemove", moveMagnifier);

        function moveMagnifier(e: MouseEvent) {
            var x, y;

            /* Prevent any other actions that may occur when moving over the image */

            e.preventDefault();

            /* Get the cursor's x and y positions: */

            const pos = getCursorPos(e);
            x = pos.x;
            y = pos.y;

            /* Prevent the magnifier glass from being positioned outside the image: */

            if (x > img?.width - w / zoom) {
                x = img?.width - w / zoom;
            }
            if (x < w / zoom) {
                x = w / zoom;
            }
            if (y > img?.height - h / zoom) {
                y = img?.height - h / zoom;
            }
            if (y < h / zoom) {
                y = h / zoom;
            }

            /* Set the position of the magnifier glass: */

            glass.style.left = x + 225 + "px";
            glass.style.top = y + 30 + "px";

            /* Display what the magnifier glass "sees": */

            glass.style.backgroundPosition =
                "-" + (x * zoom - w + bw) + "px -" + (y * zoom - h + bw) + "px";
        }
        function getCursorPos(e: MouseEvent) {
            var x = 0,
                y = 0;

            /* Get the x and y positions of the image: */

            const a = img?.getBoundingClientRect();

            /* Calculate the cursor's x and y coordinates, relative to the image: */

            x = e.pageX - a.left;
            y = e.pageY - a.top;

            /* Consider any page scrolling: */

            x = x - window.scrollX;
            y = y - window.scrollY;

            return { x: x, y: y };
        }
    }

    useEffect(() => {
        rate();

        if (magnifier == false && screen.width > 960) {
            magnify("popupImg", 2);
        }

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        });
    }, []);

    return (
        <div
            className={styles.container}
            id="popupContainerOutsides"
            onClick={() => {
                if (
                    event?.target !=
                    document.querySelector("#popupContainerOutsides")
                )
                    return;
                else {
                    onClose();
                }
            }}
        >
            <div className={styles.popupWindow}>
                <div className={styles.topSection}>
                    <img
                        id="popupImg"
                        className={styles.productImage}
                        src={sneaker?.imgUrl}
                        alt="image"
                    />
                    <div className={styles.mainGroup}>
                        <div className={styles.topAnnotation}>
                            <p className={styles.topAnnotationArticul}>
                                Артикул: {sneaker?.vendorСode}
                            </p>
                            <p className={styles.topAnnotationAmmount}>
                                В наличии:{" "}
                                <span className={styles.ammount}>
                                    {sneaker?.inStock} шт
                                </span>
                            </p>
                        </div>
                        <h1 className={styles.productTitle}>
                            {sneaker?.title}
                        </h1>
                        <div id="rating" className={styles.rating}></div>
                        <div className={styles.sizesGroup}>
                            <h3 className={styles.sizesTitle}>
                                Выберите размер
                            </h3>
                            <ul className={styles.sizesList}>
                                {sneaker?.sizes.map((size) => (
                                    <div
                                        key={`key_popup${size}`}
                                        className={styles.checkBoxContainer}
                                    >
                                        <input
                                            name={`size_popup${size}`}
                                            type="checkbox"
                                            className={styles.sizeCheckbox}
                                            id={`size_popup` + size}
                                        />
                                        <label
                                            htmlFor={`size_popup` + size}
                                            className={styles.sizeLabel}
                                        >
                                            {size}
                                        </label>
                                    </div>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.prices}>
                            <h3 className={styles.mainPrice}>
                                {sneaker?.price}&#8381;
                            </h3>
                            <h4 className={styles.oldPrice}>
                                {sneaker?.oldPrice}&#8381;
                            </h4>
                        </div>
                        <Link
                            to="/SneakersShop/cart"
                            className={styles.addToCartButton}
                            onClick={handleAddToCart}
                        >
                            Заказать
                        </Link>
                        <ul className={styles.adavantageslist}>
                            <li className={styles.adavantageslistitem}>
                                Бесплатная доставка до двери
                            </li>
                            <li className={styles.adavantageslistitem}>
                                Оплата заказа при получении
                            </li>
                            <li className={styles.adavantageslistitem}>
                                Обмен в течении двух недель
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.bottomSection}>
                    <div className={styles.bottomSectionLeft}>
                        <h2 className={styles.descriptionTitle}>Описание</h2>
                        <p className={styles.descriptionParagraph}>
                            {sneaker?.description}
                        </p>
                    </div>
                    <div className={styles.bottomSectionRight}>
                        <h2 className={styles.characteristicsTitle}>
                            Характеристики
                        </h2>
                        <ul className={styles.characteristicslist}>
                            <li className={styles.characteristicslistitem}>
                                Пол: {sneaker?.gender}
                            </li>
                            <li className={styles.characteristicslistitem}>
                                Цвета: {sneaker?.color}
                            </li>
                            <li className={styles.characteristicslistitem}>
                                Состав: {sneaker?.compound}
                            </li>
                            <li className={styles.characteristicslistitem}>
                                Страна: {sneaker?.country}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
