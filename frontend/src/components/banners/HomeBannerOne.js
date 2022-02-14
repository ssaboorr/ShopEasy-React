import {
  Flex,
  Image,
  Heading,
  Box,
  Button,
  Text,
  Link,
  Icon,
} from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";



export const HomeBannerOne = () => {
  return (
   <Flex width="auto">
        <Box
        my="0"
        width={{ lg: "100%", md: "100%", base: "100%" }}
        height={{ lg: "3xl", md: "3xl", base: "300px" }}
        backgroundImage="url('/images/banner_images/banner_image_1.webp')"
        backgroundSize={{ lg: "cover", md: "cover", base: "cover" }}
        backgroundPosition={{ lg: "center", md: "center", base: "center" }}
        backgroundRepeat="no-repeat"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        {/* <Image
          width={{ lg: "auto", md: "" }}
          src="/images/banner_images/banner_image_1.webp"
        /> */}
        <Heading
          mx={{ lg: "8rem", md: "4rem", base: "1rem" }}
          alignContent="center"
          color="black"
          as="h2"
          fontSize={{ lg: "3rem", md: "2rem", base: "2rem" }}
          fontWeight="bold"
          textShadow="1px 1px #ff0000"
        >
          Run With <br />
          UltraBoost 22
          <Text
            textShadow="none"
            fontSize={{ lg: "1.5rem", md: "1rem", base: "1rem" }}
          >
            Say hello to incredible <br/>energy return with every step.
          </Text>
        </Heading>
        <Box
          p="5"
          display="flex"
          flexDirection="column"
          mx={{ lg: "8rem", md: "4rem", base: "1rem" }}
          //   border="1px solid black"
          //   h="150px"
          w="180px"
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            m="2"
            p="2"
            bgColor="black"
            color="white"
            boxShadow="2px 2px white"
            borderRadius="1px"
            _hover={{
              bgColor: "white",
              color: "gray.800",
              boxShadow: "2px 2px black",
            }}
          >
            <Link as={RouterLink} to="/women">Shop Women</Link>
            <Icon mx="2" w="4" h="4" mr="1" as={AiOutlineArrowRight} />
          </Flex>
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
            <Link as={RouterLink} to="/men">Shop Men</Link>
            <Icon mx="2" w="4" h="4" mr="1" as={AiOutlineArrowRight} />
          </Flex>
        </Box>
      </Box>

   </Flex>
     
  );
};

export default HomeBannerOne



