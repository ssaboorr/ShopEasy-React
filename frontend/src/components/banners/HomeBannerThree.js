import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
const HomeBannerThree = () => {
  return (
    <Flex direction="column" mt="5" p="4">
      <Heading
        marginRight="100px"
        color="gray.800"
        fontStyle="italic"
        fontWeight="extrabold"
        fontSize="4xl"
      >
        Popular Right Now ...
      </Heading>
      <Box
        marginTop="3"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Link
          fontSize="sm"
          as={RouterLink}
          to="product/61ef190ce8da6f9fb6edf8e3"
          border="1px solid black"
          boxShadow="2px 2px white"
          mx="3"
          my="2"
          p="1"
          borderRadius="2px"
          bgColor="black"
          color="white"
          _hover={{
            bgColor: "white",
            color: "black",
            boxShadow: "2px 2px black",
          }}
        >
          X Speedflow 3
        </Link>
        <Link
          fontSize="sm"
          as={RouterLink}
          to="product/61ef190ce8da6f9fb6edf8fb"
          border="1px solid black"
          boxShadow="2px 2px white"
          mx="3"
          my="2"
          p="1"
          borderRadius="2px"
          bgColor="black"
          color="white"
          _hover={{
            bgColor: "white",
            color: "black",
            boxShadow: "2px 2px black",
          }}
        >
          Disney Superstar
        </Link>
        <Link
          fontSize="sm"
          as={RouterLink}
          to="product/61ef190ce8da6f9fb6edf8dc"
          border="1px solid black"
          boxShadow="2px 2px white"
          mx="3"
          my="2"
          p="1"
          borderRadius="2px"
          bgColor="black"
          color="white"
          _hover={{
            bgColor: "white",
            color: "black",
            boxShadow: "2px 2px black",
          }}
        >
          Speedmotion
        </Link>
      </Box>
    </Flex>
  );
};

export default HomeBannerThree;
