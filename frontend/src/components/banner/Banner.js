import {
    Stack,
    Flex,
    Text,
    VStack,
} from "@chakra-ui/react";
// import SearchBar from "../searchbar/SearchBar";

const Banner = () => {
    return (
        <Flex
            w={"full"}
            h={"300px"}
            backgroundImage={
                "url(https://images.unsplash.com/photo-1491739481003-2991327b66e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbXAlMjBmb29kfGVufDB8fDB8fA%3D%3D&w=1000&q=80)"
            }
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
            my={{
                base: 4,
                md: 8,
                lg: 12,
                xl: 16,

            }}
        >
            <VStack
                w={"full"}
                justify={"center"}
                bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
            >
                <Stack align={"flex-start"} spacing={6}>
                    <Text
                        color={"white"}
                        fontWeight={600}
                        fontSize={["2xl", "3xl", "4xl", "5xl"]}
                    >
                        Discover  best food and drinks in town.
                    </Text>
                </Stack>
            </VStack>
        </Flex>
    );
};

export default Banner;