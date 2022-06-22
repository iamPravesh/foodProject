import { useRef } from "react";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import DrawerDesign from "./components/drawer/DrawerDesign";
import BackToTop from "./components/backToTop/BackToTop";
import CartItems from "./components/cart/CartItems";

const App = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const handleCart = () => {
    onOpen()
  }

  return (
    <div className="app-container">
      <div className="header">
        <Header />
        <Navbar />
        <>
          <IconButton
            icon={<FaCartPlus size={30} />}
            variant="outline"
            position={"fixed"}
            right="5%"
            top="10%"
            bg={"white"}
            border={"1px solid"}
            borderColor="gray.300"
            size={{ base: "25", md: "md", lg: "lg" }}
            _hover={{ color: "orange" }}
            onClick={handleCart}
          />
        </>
        {/* Drawer Component start */}
        <DrawerDesign ref={btnRef}
          isOpen={isOpen}
          onClose={onClose}
          title="Cart Items"
        >
          <CartItems />
        </DrawerDesign>
        {/* Drawer component end */}
      </div>
      <div className="body">{children}</div>
      <div className="footer">
        <Footer />
      </div>

      {/* display a back to top button */}
      <div
        className="to-the-top"
        style={{
          display: "sticky",
          position: "fixed",
          bottom: 10,
          right: '5%',
          zIndex: "999",
        }}
        title="back to top"
      >
        <BackToTop />
      </div>

    </div>
  );
};

export default App;
