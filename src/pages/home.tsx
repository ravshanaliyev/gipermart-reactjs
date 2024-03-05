import Banner from '@/components/shared/banner'
import Category from '@/components/shared/category'
import NavTop from '@/components/shared/nav-top'
import Navbar from '@/components/shared/navbar'

const Home = () => {
    return (
        <div>
            <NavTop />
            <Navbar />
            <Banner />
            <Category />
        </div>
    )
}

export default Home