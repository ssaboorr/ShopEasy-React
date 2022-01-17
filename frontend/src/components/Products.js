import { Link as RouterLink } from "react-router-dom";

import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import Rating from "./Ratings";

const Product = ({ product }) => {
  return (
    <Link
      as={RouterLink}
      href={`/product/${product._id}`}
      _hover={{ textDecor: "none" }}
    >
      <Box
        mt="50px"
        border="1px solid black"
        p="2"
        mb="2"
        mx="3"
        maxW="sm"
        borderRadius="lg"
        overflow="hidden"
        bgColor="white"
        transition="all"
        _hover={{ shadow: "xl" }}
      >
        <Image
          src={product.image}
          alt={product.name}
          minH="360px"
          objcetFit="cover"
        />
        <Flex py="5" px="4" direction="column" justifyContent="space-between">
          <Heading as="h4" mb="3" fontSize="lg">
            {product.name}
          </Heading>
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

export default Product;
