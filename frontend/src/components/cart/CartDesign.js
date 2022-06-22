import { Box, Button, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { decreaseQuantity, deleteItem, increaseQuantity } from "../../redux/cart";

import "./cart.css";
const CartDesign = ({ image, name, price, index, id,quantity}) => {
  const dispatch = useDispatch();


  // to handle the increment function
  const handleIncrement =(id)=>{
    dispatch(increaseQuantity(id))
  }
// to handle the decrement function
  const handleDecrement =(id)=>{
    if(quantity>1){
      dispatch(decreaseQuantity(id))
     }
     else{
      dispatch(deleteItem(index))
     } 
  }


  return (
    <Box
      alignItems={"center"}
      width={{
        base: "full",
        sm: "full",
        md: "full",
        lg: "full",
      }}
      boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;"
      alignContent={"center"}
      margin="auto"
      p={2}
      mt="1"
      borderRadius={10}
    >
      <Flex>
        <>
          <Image
            src={image}
            alt={name}
            borderRadius="15"
            width={"50%"}
            height={"5%"}
          />
        </>

        <Box ml={"10%"}>
          <Text
            fontSize={{ base: "16", sm: "16", md: "md", lg: "md" }}
            fontWeight="bold"
            letterSpacing={5}
          >
            {name}
          </Text>
          <Text
            fontSize={{ base: "14", sm: "16", md: "sm", lg: "sm" }}
            color="#3cb9cc"
            fontWeight={"semibold"}
          >
            {" "}
            <em>Rs.</em> {price} /item
          </Text>
          <div className="incrementAndDecrement">
            <button
              className="cart-button"
              onClick={() => handleDecrement(id)}
            >
              -
            </button>
            <input
              type="text"
              className="cart-button"
              value={quantity}
              // {data.quantity}
            />
            <button
              className="cart-button"
              onClick={() => handleIncrement(id)}
            >
              {" "}
              +{" "}
            </button>
          </div>
          <Button
            size={{ base: "xs", sm: "xs", md: "sm", lg: "sm" }}
            mt="1"
            width={"full"}
            colorScheme="red"
            onClick={()=>dispatch(deleteItem(index))}
          >
            Delete
          </Button>
        </Box>
      </Flex>
      <hr />
      <Flex m={"0% 2%"}>
        <Text fontWeight={500} fontSize="18">
          {" "}
          Total{" "}
        </Text>
        <Spacer />
        <Text color={"CaptionText"} fontWeight="500" fontSize={"18"}>
          <em>Rs.</em> {price * quantity}   
        </Text>
      </Flex>
    </Box>
  );
};

export default CartDesign;
