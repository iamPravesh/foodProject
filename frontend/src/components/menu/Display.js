import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./MenuData";
import { Center, Heading, Image } from "@chakra-ui/react";

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

const Display = () => {
    const [menuItems, setMenuItems] = useState(items);
    const [activeCategory, setActiveCategory] = useState("");
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        setActiveCategory(category);
        if (category === "All") {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };
    return (
        <Center py={2} flexDirection="column">

            <Image
                boxSize='200px'
                w="73%"
                objectFit='cover'
                borderRadius={"10px"}
                src='https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/5fe328b1014ef_json_image_1608722609.webp'
                alt='food restro'
            />
            <Heading align="center" color="gray" fontSize={{ base: "25px", md: "40px" }} >Menu Items</Heading>

            <Categories
                categories={categories}
                activeCategory={activeCategory}
                filterItems={filterItems}
            />
            <Menu items={menuItems} />
        </Center>
    );
};

export default Display;