import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Category from "./pages/category"
import Cart from "./pages/cart"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App