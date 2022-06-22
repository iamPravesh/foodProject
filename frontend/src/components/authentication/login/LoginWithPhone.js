import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { registerUser } from "../../../services/apiServices";

import { setPhoneNumber } from "../../../redux/userSlice";
import { phoneValidate } from "../../../utlis/validation";
import ModalDesign from "../../modal/Modal";
import Otp from "../optPin/Otp";

const LoginWithPhone = ({ onClosePhone }) => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  // react hooks form
  const { register, handleSubmit } = useForm();
  const phoneNumberHandler = (data) => {
    if (phoneValidate(data.phone)) {
      toast.dismiss();
      dispatch(setPhoneNumber(data.phone))
      registerUser({
        phone: parseInt(data.phone),
        userType: "normalUser"
      }).then((res) => {
        if (res.status === 200) {
          toast.success("OTP sent to your phone");
          onOpen();
        }
      }
      ).catch((err) => {
        toast.error(err.response.data.message);
      }
      );
      onOpen();
    } else {
      toast.dismiss();
      toast.error("Phone Number is invalid");
    }
  };
  return (
    <flex
      align={"center"}
      justify={"center"}
    >
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={{ base: "lg", sm: "lg", md: "lg", lg: "4xl" }}
        py={12}
        px={6}
      >
        <Stack spacing={4}>
          <form onSubmit={handleSubmit(phoneNumberHandler)}>
            <FormControl id="phone" isRequired>
              <FormLabel> Phone Number </FormLabel>
              <InputGroup>
                <InputLeftAddon children={"+977"} />
                <Input
                  type="tel"
                  placeholder="Enter your Phone"
                  textAlign={"center"}
                  maxW="full"
                  // size={{ base: "sm", sm: "sm", md: "md", lg: "lg" }}
                  variant="flushed"
                  {...register("phone")}
                />
              </InputGroup>
            </FormControl>

            <Stack spacing={10} mt={4}>
              <Button
                type="submit"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Next
              </Button>
            </Stack>
          </form>

          {/* otp section start */}
          <ModalDesign open={isOpen} onClose={onClose}>
            <Otp onClose={onClose} onClosePhone={onClosePhone} />
          </ModalDesign>
          {/* otp section end */}
        </Stack>
      </Stack>
    </flex>
  );
};

export default LoginWithPhone;
