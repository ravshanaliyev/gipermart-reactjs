import { Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react"
const Home = lazy(() => import("./pages/home"))
const Category = lazy(() => import("./pages/category"))
const Cart = lazy(() => import("./pages/cart"))
const SingleProduct = lazy(() => import("./pages/single-product"))
const NavTop = lazy(() => import("./components/shared/nav-top"))
const Liked = lazy(() => import("./pages/liked"))
const Navbar = lazy(() => import("./components/shared/navbar"))

function App() {

  return (
    <>
      <NavTop />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Home />
          </Suspense>
        } />
        <Route path="category/:category" element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Category />
          </Suspense>
        } />
        <Route path="/cart" element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Cart />
          </Suspense>
        } />
        <Route path="/liked" element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Liked />
          </Suspense>
        } />
        <Route path="product/:id" element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <SingleProduct />
          </Suspense>
        } />
      </Routes>
    </>
  )
}

export default App