import { Box, Image, Flex, Button } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

import './productCard.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cart'

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <Box
            w={{
                base: '100%',
                md: '50%',
                lg: '25%',
                xl: '24%',
            }}
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            className='product-card'
            p={2}
            bg={'#e3e3e3'}
            _hover={{
                cursor: 'pointer',
            }}
        // changed here tooo
        >
            <Image
                src={item.imageUrl}
                alt={item.imageAlt}
                height={{
                    base: '200px',
                    sm: '300px',
                    md: '300px',
                    lg: '300px',
                    xl: '300px'
                }}
                width='full'
                borderRadius='lg'
                onClick={() => {
                    navigate('./food/' + item.id)
                }}
            />
            {/* changed here */}
            <Flex
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                width={'full'}
            >
                <Box
                    width={'70%'}
                    onClick={() => {
                        navigate('./food/' + item.id)
                    }}
                >
                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        noOfLines={1}
                    >
                        {item.title}
                    </Box>
                    <Box>
                        {item.formattedPrice}
                        <Box as='span' color='gray.600' fontSize='sm'>
                            / piece
                        </Box>
                    </Box>
                    <Box display='flex' mt='2' alignItems='center'>
                        {Array(5)
                            .fill('')
                            .map((_, i) => (
                                <StarIcon
                                    key={i}
                                    color={i < item.rating ? 'teal.500' : 'gray.300'}
                                />
                            ))}
                        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                            {item.reviewCount} reviews
                        </Box>
                    </Box>
                </Box>
                <Box
                    align='end'
                    width={'100%'}
                >
                    <Button
                        bg={'orange'}
                        variant='outline'
                        size='sm'
                        fontWeight='semibold'
                        _hover={{
                            bg: 'orange.400',
                        }}
                        py={6}
                        color={'white'}
                        borderRadius='lg'
                        onClick={ ()=>dispatch(addToCart({...item, quantity:1})) }
                    >
                        Add to cart
                    </Button>
                </Box>
            </Flex>
        </Box >
    )
}

export default ProductCard