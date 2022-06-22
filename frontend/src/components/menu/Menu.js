import { Image, Text, Flex, } from "@chakra-ui/react";

const Menu = ({ items }) => {
    return (
        <div
            className="section-center"
            style={{
                alignContent: "center",
                width: "100%",
                alignItems: "center",
            }}
        >
            <Flex
                justifyContent={"flex-start"}
                wrap={"wrap"}
            >
                {items.map((item, index) => {
                    const { id, title, img, desc, price } = item;
                    return (
                        <Flex
                            key={index}
                            direction={"column"}
                            boxSize="25%"
                            padding={'1rem'}
                            _hover={{
                                backgroundColor: '#f5f5f5',
                                cursor: 'pointer',
                                borderRadius: '0.5rem',
                                boxShadow: '0 0.5rem 1rem rgba(0,0,0,0.1)',
                                transition: 'all 0.2s ease-in-out',
                                transform: 'translateY(-0.5rem)',
                            }}
                        >
                            <Flex justify="center">
                                <Image
                                    src={img}
                                    alt={title}
                                    height={{
                                        base: "100px",
                                        md: "100px",
                                        lg: "150px",
                                        xl: "150px",
                                    }}
                                    width={{
                                        base: "100px",
                                        md: "100px",
                                        lg: "150px",
                                        xl: "150px",
                                    }}
                                    borderRadius={"50%"}
                                />
                            </Flex>
                            <Flex
                                justify="space-between"
                                w="100%"
                                maxH="50px"
                                mt="1rem"

                            >
                                <Text
                                    fontsize={{ base: "19px", md: "30px" }}
                                    fontWeight="bold"
                                    overflowX={"hidden"}
                                    whiteSpace="nowrap"
                                    textOverflow="ellipsis"
                                    w="70%"
                                >
                                    {title}
                                </Text>
                                <Text fontsize={{ base: "19px", md: "30px" }} overflowX={"hidden"}
                                    whiteSpace="nowrap"
                                    textOverflow="ellipsis">${price}</Text>
                            </Flex>
                        </Flex>
                    );
                })}
            </Flex>
        </div>
    );
};

export default Menu;