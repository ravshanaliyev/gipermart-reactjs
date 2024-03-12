import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Category from "./pages/category"
import Cart from "./pages/cart"
import SingleProduct from "./pages/single-product"
import Navbar from "./components/shared/navbar"
import NavTop from "./components/shared/nav-top"
import Liked from "./pages/liked"

function App() {

  return (
    <>
      <NavTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="product/:id" element={<SingleProduct />} />
      </Routes>
    </>
  )
}

export default App