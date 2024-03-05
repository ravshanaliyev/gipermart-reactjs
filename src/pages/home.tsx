import Banner from '@/components/shared/banner'
import Category from '@/components/shared/category'
import NavTop from '@/components/shared/nav-top'
import Navbar from '@/components/shared/navbar'
import Products from '@/components/shared/products'

const Home = () => {
    return (
        <div>
            <NavTop />
            <Navbar />
            <Banner />
            <Category />
            <Products />
        </div>
    )
}

export default Home