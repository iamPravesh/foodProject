import { React } from 'react';
import {
    Box,
    Stack,
    SimpleGrid,
    Text,
    Link,
    VisuallyHidden,
    chakra,
    useColorModeValue,
    Image,
    Flex,
} from '@chakra-ui/react';
import AppStore from '../../assets/images/appstore.svg';
import { FaTwitter, FaYoutube, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

const SocialButton = ({
    children,
    label,
}) => {
    return (
        <chakra.button
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer() {
    return (
        <Box
            // bg={useColorModeValue('gray.50', 'gray.900')}
            // color={useColorModeValue('gray.700', 'gray.200')}
            width={'full'}
            // p={9}
            p={{
                base: 2,
                xs: 2,
                sm: 2,
                md: 6,
                lg: 8,
                xl: 10,
            }}
        >
            <Flex
                flexDirection={'row'}
                justifyContent={{
                    base: 'space-between',
                    sm: 'space-between',
                    md: 'space-between',
                    lg: 'center',
                    xl: 'center',
                }}
                alignItems={'center'}
                gap={{
                    base: '1%',
                    sm: '1%',
                    md: '5%',
                    lg: '10%',
                    xl: '10%',
                }}
                mt={30}
                m={'auto'}
                bg={'black'}
                color={'white'}
                py={{
                    base: 1,
                    sm: 1,
                    md: '1%',
                    lg: '1%',
                    xl: '1%',
                }}
                px={{
                    base: 1,
                    sm: 1,
                    md: '1%',
                    lg: '1%',
                    xl: '1%',
                }}
                fontSize={{
                    base: 'sm',
                    sm: 'sm',
                    md: 'md',
                    lg: 'md',
                    xl: 'lg',
                }}

            >
                <Link href={'#'}>About Us</Link>
                <Link href={'#'}>Blog</Link>
                <Link href={'#'}>Careers</Link>
                <Link href={'#'}>Contact Us</Link>
            </Flex>
            <SimpleGrid
                columns={{ base: 2, sm: 2, md: 4 }}
                spacing={8}
                width={'full'}
            >
                <Stack
                    // align={'center'}
                    align={{
                        base: 'start',
                        sm: 'start',
                        md: 'center',
                        lg: 'center',
                        xl: 'center',
                    }}
                    mt={30}
                >
                    <ListHeader>Support</ListHeader>
                    <Link href={'#'}>Help Center</Link>
                    <Link href={'#'}>Safety Center</Link>
                    <Link href={'#'}>Community Guidelines</Link>
                </Stack>
                <Stack
                    align={{
                        base: 'start',
                        sm: 'start',
                        md: 'center',
                        lg: 'center',
                        xl: 'center',
                    }}
                    mt={30}
                >
                    <ListHeader>Legal</ListHeader>
                    <Link href={'#'}>Cookies Policy</Link>
                    <Link href={'#'}>Privacy Policy</Link>
                    <Link href={'#'}>Terms of Subscribe to download service</Link>
                    <Link href={'#'}>Law Enforcement</Link>
                </Stack>
                <Stack
                    align={{
                        base: 'start',
                        sm: 'start',
                        md: 'center',
                        lg: 'center',
                        xl: 'center',
                    }}
                    mt={30}
                >
                    <ListHeader>For Vendor</ListHeader>
                    <Link href={'#'}>Vendor</Link>
                </Stack>
                <Stack
                    align={{
                        base: 'start',
                        sm: 'start',
                        md: 'center',
                        lg: 'center',
                        xl: 'center',
                    }}
                    mt={30}
                >
                    <ListHeader>SOCIAL LINKS</ListHeader>
                    <Stack direction={'row'} spacing={3} align={'flex-start'} fontSize={'1rem'} width={'50%'} >
                        <a href="https://www.linkedin.com/" target={"_blank"} rel="noopener noreferrer">
                            <SocialButton label={'linkedin'}  >
                                <FaLinkedin />
                            </SocialButton>
                        </a>
                        <a href='https://www.instagram.com' target={"_blank"} rel="noopener  noreferrer">
                            <SocialButton label={'Instagram'} >
                                <FaInstagram />
                            </SocialButton>
                        </a>
                        <a href='https://www.twitter.com' target={"_blank"} rel="noopener noreferrer">
                            <SocialButton label={'Twitter'} >
                                <FaTwitter />
                            </SocialButton>
                        </a>
                        <a href='https://www.youtube.com' target={"_blank"} rel="noopener noreferrer">
                            <SocialButton label={'YouTube'} >
                                <FaYoutube />
                            </SocialButton>
                        </a>
                        <a href='https://www.facebook.com' target={"_blank"} rel="noopener noreferre">
                            <SocialButton label={'facebook'} >
                                <FaFacebook />
                            </SocialButton>
                        </a>
                    </Stack>
                    <Stack>
                        <Flex align={'flex-start'} >
                            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={AppStore}
                                    alt="appstore"
                                    height={'40px'}
                                    width={'full'}
                                />
                            </a>
                        </Flex>
                        <Flex align={'flex-start'} >
                            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={AppStore}
                                    alt="appstore"
                                    height={'40px'}
                                    width={'full'}
                                />
                            </a>
                        </Flex>
                    </Stack>
                </Stack>
            </SimpleGrid>
            <Box
                mt={2}
                borderTopWidth={1}
                display={{ base: 1, sm: 2, md: 1 }}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                align={'center'}
            >
                <Text>2008-2022 © FoodBuster™ Ltd.</Text>
            </Box>
        </Box>
    );
}