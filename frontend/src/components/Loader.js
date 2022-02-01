import { Spinner,Flex } from "@chakra-ui/react";


const Loader = () => {
    return (
        <Flex alignItems="center" justifyContent="center">
            <Spinner 
            thickness="4px"
            speed="0.65s"
            emptyColor="blue.500"
            size="xl"
            lable="Loading...." />
        </Flex>
    )
}

export default Loader;