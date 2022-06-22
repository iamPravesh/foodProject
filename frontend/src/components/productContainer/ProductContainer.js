import { Flex } from "@chakra-ui/react"

import ProductCard from "../productCard/ProductCard"
import DATA from './DummyData'

const ProductContainer = () => {

    return (
        <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            wrap="wrap"
            className="product-container"
            my={{
                base: 4,
                md: 8,
                lg: 12,
                xl: 16,
            }}
            width="full"
        >
            {
                DATA.map((item, index) => {
                    return (
                        <ProductCard
                            key={index}
                            item={item}
                        />
                    )
                })
            }
        </Flex>
    )
}

export default ProductContainer