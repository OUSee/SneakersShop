import { Route, Routes } from "react-router-dom"
import './index.css'
import { LayoutComponent } from "./components/Layout/Layout"
import { HomePage } from "./Pages/HomePage"
import { CartPage } from "./Pages/CartPage"
import { NotFoundPage } from "./Pages/NotFoundPage"



function App() {
  

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
