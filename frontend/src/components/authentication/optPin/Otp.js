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
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { verifyUser } from "../../../services/apiServices";
import { loginUser } from "../../../redux/userSlice";

const Otp = ({ onClose, onClosePhone }) => {
  const selector = useSelector((state) => state.user);
  // navigate route
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // react hooks form
  const { register, handleSubmit } = useForm();
  const otpHandler = (data) => {
    if (data.otp.length === 4) {
      toast.dismiss();
      verifyUser({
        phone: parseInt(selector.phoneNumber),
        otp: parseInt(data.otp),
        userType: "normalUser"
      }).then((res) => {
        console.log('its a response', res);
        if (res.data.code === 200) {
          dispatch(loginUser(res.data.data.authToken));
          toast.success("OTP verified");
          navigate("/");
          onClose();
          onClosePhone();
        }
        else {
          toast.error(res.data.error.detail);
        }
      }
      ).catch((err) => {
        toast.error(err.response.data.message);
      })
    } else {
      toast.dismiss();
      toast.error("OTP is invalid");
    }
  };
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
            <form onSubmit={handleSubmit(otpHandler)}>
              <FormControl id="otp" isRequired>
                <FormLabel> ENTER OTP sent at {selector.phoneNumber} </FormLabel>
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
                    placeholder="Enter your OTP"
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
  );
};

export default Otp;
