import { Route, Routes } from "react-router-dom"
import './index.css'
import { LayoutComponent } from "./components/Layout/Layout"
import { HomePage } from "./Pages/HomePage"
import { CartPage } from "./Pages/CartPage"
import { NotFoundPage } from "./Pages/NotFoundPage"
import { useDispatch } from "react-redux"
import { AppDispatch } from "./redux/store"
import { useEffect } from "react"
import { getProducts } from "./redux/slices/productsSlice"
import { getCart, postCart } from "./redux/slices/cartsSlice"
import { Cart } from "./types"



function App() {
  const dispatch = useDispatch<AppDispatch>()

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
        }
        else {
            const newCart: Cart = {
                uid: generateUID(),
                items: []
            }
          localStorage.setItem('cart', JSON.stringify(newCart));
          dispatch(postCart(newCart))
        }
    }

  const getData = async () => {
    await dispatch(getProducts())
    await checkifCartExists()
  }

  useEffect(() => {
    getData()
  }, [])
  return (

    <Routes>
      <Route path='/' element={<LayoutComponent />}>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
        <Route path='/*' element={<NotFoundPage />}></Route>
      </Route>
    </Routes>
  )
}

export default App
