import { SearchIcon } from "@chakra-ui/icons";
import { Stack, InputGroup, InputLeftElement, Input, Box, } from "@chakra-ui/react";

const Search = () => {
    return (
        <Box>
            <Stack spacing={3} justify="center" w="100%">
                <InputGroup justify="space-between">
                    <InputLeftElement
                        pointerEvents="none"
                        children={<SearchIcon color="gray.300" />}
                    />
                    <Input
                        fontSize={{ base: '15px', md: '20px' }}
                        // size="md"
                        focusBorderColor="gray"
                        type="search" placeholder="Search for food or restaurant" />
                </InputGroup>
            </Stack>
        </Box>
    );
};

export default Search;