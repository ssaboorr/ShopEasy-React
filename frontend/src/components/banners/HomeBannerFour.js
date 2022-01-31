import { Flex, Heading, Link, Box ,Icon} from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";

const HomeBannerFour = () => {
  return (
    <Flex
      display="flex"
      direction="row"
      justify="center"
      justifyContent="center"
      wrap="wrap"
      gap="10"
      bgColor="#FAFA33"
      p="5"
    >
      <Heading fontWeight="bold" color="black" as="h2">
        JOIN OUR CREATORS CLUB & GET 15% OFF
      </Heading>
      <Box>
        <Flex
          alignItems="center"
          justifyContent="center"
          m="2"
          p="2"
          bgColor="black"
          color="white"
          boxShadow="2px 2px white"
          _hover={{
            bgColor: "white",
            color: "gray.800",
            boxShadow: "2px 2px black",
          }}
        >
          <Link as={RouterLink} to="/signup">
            Sign Up
          </Link>
          <Icon mx="2" w="4" h="4" mr="1" as={AiOutlineArrowRight} />
        </Flex>
      </Box>
    </Flex>
  );
};

export default HomeBannerFour;
