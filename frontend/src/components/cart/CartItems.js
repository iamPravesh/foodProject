import {
  Badge,
  Button,
  Divider,
  Flex,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import CartDesign from "./CartDesign";
import { clearCart } from "../../redux/cart"
// import { data } from "./data";

const CartItems = () => {
  const selector = useSelector(state => state.cart)
  const dispatch = useDispatch()

  // to calculate the total here
  const getTotal =()=>{
    let total = 0;
    selector.map(item=>{
      total += item.formattedPrice * item.quantity

    })
    return total
  }

  return (
    <Stack mb="2" mt={2}>
      {selector.map((item, index) => {
        return (
          <div key={index}>
            <CartDesign
              image={item.imageUrl}
              name={item.title}
              price={item.formattedPrice}
              index={index}
              id={item.id}
              quantity={item.quantity}
            />
          </div>
        );
      })}
      <Divider />
     {selector.length > 0 ? <>
      <Flex>
        <>
          <Text fontWeight={"bold"} fontSize="20" color={"brown"}>
            {" "}
            TOTAL PRICE
          </Text>
        </>
        <Spacer />
        <>
          {" "}
          <Badge
            borderRadius={"15"}
            p="2"
            colorScheme={"twitter"}
            fontWeight="semibold"
            color={"black"}
            fontSize="16"
          >
            {" "}
           <strong> <em>Rs.</em> </strong> {getTotal()}
          </Badge>{" "}
        </>

      </Flex>
      <Text>Shipping + taxes calculated at checkout</Text>

      <Flex justify={"center"}>
        <Button
          size={{ base: "sm", sm: "sm", lg: "lg" }}
          colorScheme="orange"
          border="2px solid"
          borderColor={"brown"}
          _hover={{ color: "black" }}
          onClick={
            () => {
              dispatch(clearCart())
            }
          }
        >
          Clear Cart
        </Button>
      </Flex>
     </>:
     <>
     <Text> Your shopping cart is empty. </Text>
     <em> To add items in card: </em>
            <Button colorScheme={"facebook"}>Add to Cart</Button>
     </>
     }
    </Stack>
  );
};

export default CartItems;
