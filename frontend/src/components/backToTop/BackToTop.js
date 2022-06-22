import { useState } from 'react';
import { Button } from '@chakra-ui/react'
import { FaArrowCircleUp } from 'react-icons/fa';

const BackToTop = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Button
            onClick={scrollToTop}
            style={{
                display: visible ? 'flex' : 'none',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                height: '50px',
                width: '50px',
            }}
            colorScheme={'twitter'}
        >
            <FaArrowCircleUp />
        </Button>
    );
}

export default BackToTop;