import { Route, Routes } from "react-router-dom";
import "./index.css";
import { LayoutComponent } from "./components/Layout/Layout";
import { HomePage } from "./Pages/HomePage";
import { CartPage } from "./Pages/CartPage";
import { NotFoundPage } from "./Pages/NotFoundPage";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { useEffect } from "react";
import { getProducts } from "./redux/slices/productsSlice";
import { getCart, postCart } from "./redux/slices/cartsSlice";
import { Cart, Status } from "./types";

function App() {
    const dispatch = useDispatch<AppDispatch>();
    const cartStatus = useSelector((state: RootState) => state.cart.status);
    const cartState = useSelector((state: RootState) => state.cart.data);

    const checkifCartExists = () => {
        const generateUID = () => {
            let uid = (Math.random() * Math.pow(36, 6)) << 0;
            let struid = uid.toString();
            struid = "000000" + uid.toString(36);
            return struid.slice(-6);
        };

        const json = localStorage.getItem("cart");
        if (json !== null) {
            let cart: Cart = JSON.parse(json);
            dispatch(getCart(cart.uid));
            if (cartStatus == Status.ERROR) {
                dispatch(getCart(""));
                const errCart: Cart = {
                    uid: cart.uid,
                    items: cartState.items,
                };
                dispatch(postCart(errCart));
            }
        } else {
            const newCart: Cart = {
                uid: generateUID(),
                items: [],
            };
            localStorage.setItem("cart", JSON.stringify(newCart));
            dispatch(postCart({ uid: newCart.uid, items: newCart.items }));
        }
    };

    const getData = async () => {
        await dispatch(getProducts());
        await checkifCartExists();
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <Routes>
            <Route path="/SneakersShop/" element={<LayoutComponent />}>
                <Route path="/SneakersShop/" element={<HomePage />}></Route>
                <Route path="/SneakersShop/cart" element={<CartPage />}></Route>
                <Route
                    path="/SneakersShop/*"
                    element={<NotFoundPage />}
                ></Route>
            </Route>
        </Routes>
    );
}

export default App;
