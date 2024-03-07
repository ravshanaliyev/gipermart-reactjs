import Banner from '@/components/shared/banner'
import Category from '@/components/shared/category'
import LaptopsSection from '@/components/shared/laptops-section'
import Products from '@/components/shared/products'
import Stock from '@/components/shared/stock'
import ThreesomeProducts from '@/components/shared/threesome-products'

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <Products />
            <Stock />
            <ThreesomeProducts />
            <Products />
            <LaptopsSection />
        </div>
    )
}

export default Home