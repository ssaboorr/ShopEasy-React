import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import Rating from "./Ratings";
import React from "react";
import { chakra, useColorModeValue } from "@chakra-ui/react";

export const Products = ({ product, type }) => {
  let product_type = type;
  return (
    <Link
      as={RouterLink}
      to={`/product/${product._id}`}
      _hover={{ textDecor: "none" }}
    >
      <Box
        mt="50px"
        p="2"
        mb="2"
        mx="3"
        maxW="sm"
        borderRadius="lg"
        overflow="hidden"
        bgColor="whiteAlpha.400"
        transition="all"
        _hover={{ shadow: "xl" }}
      >
        <Image
          src={product.image1}
          onMouseOver={(e) => (e.currentTarget.src = product.image2)}
          onMouseOut={(e) => (e.currentTarget.src = product.image1)}
          alt={product.name}
          minH="250px"
          objcetFit="cover"
        />
        <Divider />
        <Flex py="5" px="4" direction="column" justifyContent="space-between">
          <Heading as="h4" mb="3" fontSize="lg" color="gray.800">
            {product.name}
          </Heading>
          <Text color="gray.700">{product.category}</Text>
          <Flex alignItems="center" justifyContent="space-between">
            <Rating value={product.rating} color="yellow.600" />
            <Text fontSize="2xl" fontWeight="bold" color="blue.600">
              ₹{product.price}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
};

export function ProductCard({ product }) {
  let url = product.image1;
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      // p={2}
      // w="full"
      // alignItems="center"
      // justifyContent="center"
      mt="50px"
      p="2"
      mb="2"
      mx="3"
      maxW="sm"
      borderRadius="lg"
      overflow="hidden"
      bgColor="whiteAlpha.400"
      transition="all"
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        w="sm"
        mx="auto"
      >
        <Box
          // bg="gray.300"
          // mt="50px"
          // p="2"
          // mx="3"
          // maxW="sm"
          // borderRadius="lg"
          // overflow="hidden"
          // bgColor="whiteAlpha.400"
          // transition="all"
          // h={64}
          // w="full"
          // rounded="lg"
          // shadow="md"
          // bgSize="cover"
          // bgPos="center"
          // style={{
          //   backgroundImage:
          //     "url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)",
          // }}
          // backgroundImage={`url(${product.image1})`}
          // _hover={{backgroundImage:`url(${product.image2}`}}
        >
          <Image
            src={product.image1}
            onMouseOver={(e) => (e.currentTarget.src = product.image2)}
            onMouseOut={(e) => (e.currentTarget.src = product.image1)}
            alt={product.name}
            minH="250px"
            objcetFit="cover"
          />
        </Box>

        <Box
          w={{ base: 56, md: 64 }}
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          mt={-20}
        >
          <chakra.h3
            py={2}
            textAlign="center"
            fontWeight="bold"
            textTransform="uppercase"
            color={useColorModeValue("gray.800", "white")}
            letterSpacing={1}
          >
            {product.name}
          </chakra.h3>

          <Flex
            alignItems="center"
            justifyContent="space-between"
            py={2}
            px={3}
            bg={useColorModeValue("gray.200", "gray.700")}
          >
            <chakra.span
              fontWeight="bold"
              color={useColorModeValue("gray.800", "gray.200")}
            >
              ₹{product.price}
            </chakra.span>
            <Rating value={product.rating} color="yellow.600" />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

// export default Product;
