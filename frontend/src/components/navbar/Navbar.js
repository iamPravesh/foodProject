
import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    Stack,
    Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import navbarData from "./navbarData";
import MenuDrawer from "../menu/MenuDrawer";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box
            bg={'white'}
        >
            <Flex
                alignItems={{ base: "start", md: "center", lg: "center" }}
                justifyContent={{ base: "start", md: "space-around", lg: "space-around" }}
            >
                <IconButton
                    icon={
                        isOpen ? (
                            <CloseIcon mt={2} fontSize={"20px"} />
                        ) : (
                            <HamburgerIcon fontSize={"35px"} />
                        )
                    }
                    aria-label={"Open Menu"}
                    display={{ md: "none" }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack
                    justifyContent={"center"}
                    alignItems={"center"}
                    p={2}
                    spacing={20}
                    as={"nav"}
                    display={{ base: "none", md: "flex" }}
                    fontSize={{ base: "20px", md: "20px", lg: "20px", xl: "20px" }}
                >
                    {navbarData.map((items, index) => {
                        return (
                            <div key={index}>
                                <RouterLink to={items.path}>
                                    <Text>{items.name}</Text>
                                </RouterLink>
                            </div>
                        );
                    })}
                    <MenuDrawer />
                </HStack>
            </Flex>

            {isOpen ? (
                <Box
                    pb={4}
                    display={{ md: "none" }}
                    alignItems={"end"}
                    justifyContent={"end"}
                >
                    <Stack
                        as={"nav"}
                        spacing={4}
                        fontSize={{ base: "20px", md: "20px", lg: "20px", xl: "20px" }}
                    >
                        {navbarData.slice(0, 3).map((items, index) => {
                            return (
                                <div key={index}>
                                    <RouterLink to={items.path}>
                                        <Text>{items.name} </Text>
                                    </RouterLink>
                                </div>
                            );
                        })}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
}

export default Navbar;