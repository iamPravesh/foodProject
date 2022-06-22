import { useEffect, useState } from 'react';
import { Button, Image, Flex, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { toast } from 'react-toastify';

import RecommendedProducts from '../../components/recommendationProducts/RecommendationProducts';
import { getFoodById } from '../../services/apiServices';
import "./food.css";

const Food = () => {
    const [food, setFood] = useState([]);
    useEffect(() => {
        getFoodById('62aecb085d066fc325da3e69').then(res => {
            if (res.code === 200) {
                toast.dismiss();
                setFood(res.data);
            }
            else {
                toast.error(res.error.title);
            }
        })
    }, [])
    return (
        <>
            <Flex justify={"center"}>
                {food && (
                    <Flex
                        my={"10px"}
                        borderRadius={"10px"}
                        w={{ base: "100%", md: "100%" }}
                        direction={{ base: "column", md: "row" }}
                    >
                        <Flex flex={3}>
                            <Image
                                objectFit="cover"
                                w={{ base: "100%", md: "100%" }}
                                h={{
                                    base: "100px",
                                    md: "200px",
                                    lg: "300px",
                                    xl: "400px",
                                }}
                                src={food.image && food.image.includes("localhost") ? food.image.replace("localhost", "192.168.1.77") : food.image}
                                alt={`${food.name}`}
                            />
                        </Flex>

                        <Flex
                            flex={4}
                            direction={"column"}
                            ml={{
                                base: "10px",
                                md: "50px",
                                lg: "50px",
                                xl: "50px",
                            }}
                        >
                            <Text
                                fontSize={{
                                    base: "15px",
                                    md: "25px",
                                    lg: "25px",
                                    xl: "25px",
                                }}
                                fontWeight="600"
                            >
                                {food.foodName && food.foodName}
                            </Text>

                            <Text
                                fontSize={{
                                    base: "15px",
                                    md: "20px",
                                    lg: "20px",
                                    xl: "20px"
                                }}
                                mt="20px"
                            >
                                {Array(5)
                                    .fill("")
                                    .map((_, i) => (
                                        <StarIcon
                                            key={i}
                                            color={i < food.averageRating && food.averageRating ? "teal.500" : "gray.300"}
                                        />
                                    ))}
                            </Text>

                            <Text
                                fontSize={{
                                    base: "15px",
                                    md: "20px",
                                    lg: "20px",
                                    xl: "20px",
                                }}
                                mt={{
                                    base: "10px",
                                    md: "20px",
                                    lg: "20px",
                                    xl: "20px",
                                }}
                            >
                                Category: {food.category && food.category}
                            </Text>
                            <Text
                                fontSize={{
                                    base: "15px",
                                    md: "20px",
                                    lg: "20px",
                                    xl: "20px",
                                }}
                                mt={{
                                    base: "10px",
                                    md: "20px",
                                    lg: "20px",
                                    xl: "20px",
                                }}
                                color={food.vegan && food.vegan ? "green.500" : "red.500"}
                            >
                                {
                                    food.vegan && food.vegan ? "Vegeterian" : "Not Vegeterian"
                                }
                            </Text>
                            <Text
                                fontSize={{
                                    base: "15px",
                                    md: "20px",
                                    lg: "20px",
                                    xl: "20px",
                                }}
                                mt={{
                                    base: "10px",
                                    md: "20px",
                                    lg: "20px",
                                    xl: "20px",
                                }}
                            >
                                {food.description && food.description}
                            </Text>

                            <Flex
                                flex={2}
                                fontSize={{
                                    base: "15px",
                                    md: "25px",
                                    lg: "25px",
                                    xl: "25px",
                                }}
                                alignItems={'flex-end'}
                                flexDirection={"row"}
                                justify="flex-end"
                                columnGap={5}
                            >

                                <Text
                                    fontSize={{
                                        base: "15px",
                                        md: "25px",
                                        lg: "25px",
                                        xl: "25px",
                                    }}
                                    fontWeight="400"
                                ><b>Price:</b>
                                    {food.price && food.price}
                                </Text>

                                <Button colorScheme="green"
                                    size={{
                                        base: 'xs',
                                        md: "md",
                                        lg: "md",
                                        xl: "md"
                                    }}>
                                    <Text
                                        fontSize={{
                                            base: "15px",
                                            md: "20px",
                                            lg: "20px",
                                            xl: "20px",
                                        }}
                                    >
                                        Order Now
                                    </Text>
                                </Button>
                            </Flex>
                        </Flex>
                    </Flex>
                )
                }
            </Flex>
            <RecommendedProducts />
        </>
    );
};

export default Food;