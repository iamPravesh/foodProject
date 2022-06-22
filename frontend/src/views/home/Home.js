
import ProductContainer from '../../components/productContainer/ProductContainer';
import Banner from '../../components/banner/Banner';
import Design from '../../components/design/Design';
import ProductSlider from '../../components/productSlider/ProductSlider';
import './home.css'

const Home = () => {
    return (
        <div className="home-page">
            <ProductSlider />
            <Banner />
            <ProductContainer />
            <Design />
        </div>
    )
}

export default Home