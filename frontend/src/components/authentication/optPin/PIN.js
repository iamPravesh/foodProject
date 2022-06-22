import { UnlockIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    useColorModeValue,
  } from "@chakra-ui/react";

import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PIN = () => {
    const navigate = useNavigate()
    // react hooks form
    const { register, handleSubmit } = useForm();
    const pinHandler=(data)=>{
    if(data.pin.length===4){
        toast.dismiss();
        toast.success("PIN is valid");
        navigate('/')
    }
    else{
        toast.dismiss();
        toast.error("PIN is invalid");
    }

} 

 return (
    <Flex
    //   minH={"100vh"}
    align={"center"}
    justify={"center"}
    // bg={useColorModeValue("gray.50", "gray.800")}
  >
    <Stack
      spacing={8}
      mx={"auto"}
      maxW={{ base: "lg", sm: "lg", md: "lg", lg: "4xl" }}
      py={12}
      px={6}
    >
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        //   boxShadow={"lg"}
        width={{ base: "full", sm: "full", md: "full", lg: "lg", xl: "lg" }}
        p={8}
      >
        <Stack spacing={4}>
          <form onSubmit={handleSubmit(pinHandler)}>
            <FormControl id="otp" isRequired>
              <FormLabel> ENTER MPIN </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<UnlockIcon color="gray.300" />}
                  size={{ base: "sm", sm: "sm", md: "md", lg: "lg" }}
                  display={{
                    base: "none",
                    sm: "none",
                    md: "block",
                    lg: "block",
                    xl: "block",
                  }}
                />
                <Input
                  type="tel"
                  placeholder="Enter your MPIN"
                  textAlign={"center"}
                  size={{ base: "sm", sm: "sm", md: "sm", lg: "sm" }}
                  variant="flushed"
                  {...register("otp")}
                />
              </InputGroup>
            </FormControl>

            <Stack spacing={10} mt="4">
              <Button
                type="submit"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Conform
              </Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  )
}

export default PIN