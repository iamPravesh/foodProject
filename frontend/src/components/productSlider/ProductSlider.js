import { useNavigate } from 'react-router-dom'
import Slider from "react-slick";

import "./productSlider.css";
import productData from './data'

const ProductSlider = () => {
    const navigate = useNavigate();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: true,
                    autoplay: true,
                    autoplaySpeed: 4000,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    autoplay: true,
                    autoplaySpeed: 4000,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 4000,
                },
            },
        ],
    };

    return (
        <div className="product-slider">
            <Slider {...settings}>
                {
                    productData.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="imageslider-card"
                                onClick={() => {
                                    navigate('./food/' + item.id)
                                }}
                            >
                                <div className="image-container">
                                    <img

                                        src={item.img}
                                        alt="pizza"
                                        className="slider-image"
                                    />
                                </div>
                                <div className="imageslider-text">{item.name}</div>
                            </div>
                        )
                    })
                }
            </Slider >
        </div >
    );
};
export default ProductSlider;