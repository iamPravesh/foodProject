import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'

const ModalDesign = ({children, open, onClose}) => {
  return (
   <Modal
   isOpen={open}
    onClose={onClose}
    size={{ base: "xs", sm: "20", md: "full", lg: "lg", xl: "lg" }}
   >
<ModalOverlay/>
<ModalContent>
    <ModalHeader>Food Buster Authentication </ModalHeader>
    <ModalCloseButton/>
    <ModalBody>
        {children}
    </ModalBody>
    </ModalContent>  
   </Modal>
  )
}

export default ModalDesign