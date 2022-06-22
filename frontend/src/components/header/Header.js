import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Flex,
  Text,
  Button,
  useColorModeValue,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { logoutUser } from "../../redux/userSlice";
import Search from "../searchBar/SearchBar";
import DrawerDesign from "../drawer/DrawerDesign";
import LoginWithPhone from "../authentication/login/LoginWithPhone";
import React from "react";

export default function Header() {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const isloggedin = useSelector((state) => state.user.isLoggedIn);
  return (
    <Box>
      <Flex
        h={"70px"}
        maxH={"70px"}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        bg={"white"}
      >
        {/* <Flex
                    flex={{ base: 1, md: "auto" }}  <IconButton
          icon={<FaCartPlus size={30} />}
          variant="outline"
          position={"fixed"}
          right="0"
          bg={"white"}
          mr={{ base: "1rem", md: "2rem", lg: "6rem" }}
          border={"1px solid"}
          borderColor="gray.300"
          size={"lg"}
          _hover={{ color: "orange" }}
          onClick={handleCart}
         
        />
                    ml={{ base: -2 }}
                    display={{ base: "end", md: "none" }}
                >
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={"ghost"}
                        aria-label={"Toggle Navigation"}
                    />
                </Flex> */}
        <Flex
          w="100%"
          justify="space-between"
          align={"center"}
          fontSize={{ base: "15px", md: "20px" }}
        >
          <HStack
            justify={"start"}
            spacing={100}
            display={{ base: "none", md: "inline-flex" }}
          >
            <Link to="/">
              <Text
                fontSize={{ base: "15px", md: "24px" }}
                fontWeight={{ base: "300", md: "500" }}
              >
                FOOD BUSTER
              </Text>
            </Link>
            <Link to="/vendor">
              <Text
                display={{ base: "none", md: "inline-flex" }}
                fontSize={{ base: "15px", md: "20px" }}
                fontWeight={{ base: "300", md: "400" }}
                justify={"start"}
              >
                Vendor
              </Text>
            </Link>
          </HStack>

          <Box w={{ base: "70%", md: "25%" }}>
            <Search />
          </Box>
          <HStack spacing={50}>
            {
              isloggedin ? (
                <>
                  <Button
                    colorScheme="red"
                    variant="ghost"
                    variantColor="blue"
                    _hover={{ color: "orange" }}
                    border={"1px solid"}
                    borderColor="gray.300"
                    size={"lg"}
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    <Text>Log Out</Text>
                  </Button>
                </>) : (

                <Button
                  fontSize={{ base: "15px", md: "20px" }}
                  fontWeight={600}
                  color={"black"}
                  border="1px"
                  bg={"white"}
                  borderRadius="10"
                  href={"#"}
                  _hover={{
                    bg: "whitesmoke",
                  }}
                  onClick={onOpen}
                >
                  Sign In
                </Button>
              )
            }
            <DrawerDesign
              ref={btnRef}
              isOpen={isOpen}
              onClose={onClose}
              title="Login with Phone"
            >
              <LoginWithPhone onClosePhone={onClose} />
            </DrawerDesign>

            {/* <Button
                            display={{ base: "none", md: "inline-flex" }}
                            fontSize={{ base: "15px", md: "20px" }}
                            fontWeight={600}
                            color={"white"}
                            bg={"gray.400"}
                            href={"#"}
                            _hover={{
                                bg: "gray.300",
                            }}
                        >
                            Sign Up
                        </Button> */}
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}
