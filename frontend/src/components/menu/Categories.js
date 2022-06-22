import { Button, Flex } from "@chakra-ui/react";


const Categories = ({ categories, filterItems, activeCategory }) => {
    return (
        <Flex>
            {categories.map((category, index) => {
                return (

                    <Button
                        mt="1rem"
                        mb="1rem"
                        mx={{ base: "5px", md: "10px" }}
                        key={index}
                        size={{ base: "xs", md: "md" }}
                        height={{ base: "48px", md: '48px' }}
                        width={{ base: "70px", md: '140px' }}
                        onClick={() => filterItems(category)}
                    >
                        {category}
                    </Button>
                );
            })}
        </Flex>
    );
};

export default Categories;