import React, { Component } from "react";
import { Image, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "./recommendationProducts.css";
import recomdendData from "./recommendationData";

const RecommendedProducts = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,

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
        <div
            className="recommended-section"
        >
            <Text
                color="black"
                alignItems={"center"}
                textAlign="center"
                justifyContent={"center"}
                fontSize={'2xl'}
                fontWeight={'600px'}
                m={4}
            >
                Recomended food for you.
            </Text>
            <Slider {...settings}>
                {recomdendData.map((item, index) => {
                    return (
                        <div className="imageslider-card">
                            <img src={item.img} alt="pizza" className="slider-image" />

                            <h4 className="imageslider-text">{item.name}</h4>
                            <h4 className="imageslider-price">${item.price}</h4>


                            <h4 className="imageslider-discount">${item.price - item.price * 10 / 100}</h4>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};
export default RecommendedProducts;