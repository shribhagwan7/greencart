import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className='mt-10'>
            <MainBanner />
            <Categories />
            <BestSeller />
            <BottomBanner />
            <NewsLetter />
        </div>
    )
}

export default Home