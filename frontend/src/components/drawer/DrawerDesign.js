import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";

const DrawerDesign = ({ children, ref, isOpen, onClose, title }) => {
  return (
    <Drawer
      placement="right"
      isOpen={isOpen}
      onClose={onClose}
      finalFocusRef={ref}
      size="sm"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton
          color="red"
          title="Close"
          size={"md"}
          border="1px solid"
        />
        {/* drawer changed */}
        <DrawerHeader bg="gray.300" fontWeight={"semibold"} fontSize="2xl" >{title}</DrawerHeader>
        <DrawerBody mt={"-5"}>{children}</DrawerBody>
        <DrawerFooter>
          <Button color={"white"} colorScheme="red" onClick={onClose}>
            Close
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerDesign;
