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
import { getCart } from "./redux/slices/cartsSlice"
import { Cart } from "./types"



function App() {
  const dispatch = useDispatch<AppDispatch>()

  const getData = async () => {
    await dispatch(getProducts())
    const cartJson = await localStorage.getItem('cart')
    if (cartJson) { 
      const cart = await JSON.parse(cartJson) as Cart;

      await dispatch(getCart(cart.uid))
    }
    else {
      console.log('err getting cart')
    }
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
