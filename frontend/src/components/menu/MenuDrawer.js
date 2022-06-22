import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'

import React from 'react'
import Display from '../menu/Display'

const MenuDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button
                ref={btnRef}
                colorScheme='teal'
                onClick={onOpen}
                size={{ base: "sm", md: "sm" }}
                leftIcon={<GiHamburgerMenu />}
            >
                Menu
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={"xl"}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <Display />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MenuDrawer