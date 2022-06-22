import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom'


const ImageSlider = () => {

    const Datas = [
        {
            id: 1,
            image: 'https://www.wallpapers4u.org/wp-content/uploads/pizza_pastry_tasty_cheese_basil_71458_1920x1080.jpg',
            alt: 'pizza'
        },
        {
            id: 2,
            image: 'https://www.traveloutset.com/wp-content/uploads/2020/04/dumpling-momo.jpg',
            alt: 'MOMO'
        },
        {
            id: 3,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8CrvQbuTYv8tjpuUoOBFDWpu_zomql78BMY8P5eGvGUoxeQzbH2QfvUwb2tTOgm3w84&usqp=CAU',
            alt: 'pizza'
        },
        {
            id: 4,
            image: 'https://www.tiffinboxfood.com/wp-content/uploads/2020/10/chicken-paratha.jpg',
            alt: 'Dan Abramov'
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 3000,
    }
    return (
        <div>
            <Slider {...settings} >
                {
                    Datas.map((data, index) => {
                        return (
                            <Box
                                align={'center'}
                                p={0}
                                _hover={{
                                    cursor: 'pointer',
                                }}
                                onClick={() => {
                                    navigate('./food/' + data.id)
                                }}
                            >
                                <Image
                                    boxSize={'300px'}
                                    borderRadius='10px'
                                    w='100%'
                                    objectFit='cover'
                                    src={data.image}
                                    alt={data.alt} />
                            </Box>
                        )
                    }
                    )
                }
            </Slider>
        </div>
    );
}

export default ImageSlider;