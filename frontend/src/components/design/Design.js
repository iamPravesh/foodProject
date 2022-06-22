import { Flex, Text, Image, List, ListItem, ListIcon } from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'

import foodbackground from '../../assets/images/foodbackground.jpg'
import foodimage from '../../assets/images/foodimage.png'

const Design = () => {
    return (
        <Flex
            width={'100%'}
            height={'100%'}
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            my={'2%'}
        >
            <Flex
                height='50vh'
                width='50%'
                bg={'red'}
                align='center'
                justify='center'
                backgroundImage={foodbackground}
                backgroundSize='cover'
                color='white'
                direction='column'
                _hover={{
                    '&>*': {
                        transform: 'scale(1.5)',
                        transition: '1s',
                        color: 'pink'
                    }
                }}

            >
                <Text
                    fontSize='2xl'
                    fontWeight='semibold'
                >
                    Hungry?
                </Text>


                <Text fontSize='2xl' fontWeight='semibold'>
                    We're here to help
                </Text>
            </Flex>
            <Flex
                height='50vh'
                width='50%'
                align='center'
                justify='center'
                backgroundSize='cover'
                color='white'
                direction='column'
                p={4}
            >
                <Image
                    src={foodimage}
                    height='20vh'
                    _hover={{
                        transform: 'scale(1.2)',
                        transition: '1s',
                    }}
                />
                <List
                    spacing={3}
                    color={'black'}
                    my={'2%'}
                >
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='green.500' />
                        Select a food for you
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='green.500' />
                        Add food in your cart
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='green.500' />
                        Checkout and pay
                    </ListItem>
                </List>
                <Text
                    fontSize='1xl'
                    fontWeight='semibold'
                    color='black'
                >
                    Its that simple!
                </Text>

            </Flex>
        </Flex>
    )
}

export default Design