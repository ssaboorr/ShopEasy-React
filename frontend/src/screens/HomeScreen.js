import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import Product from "../components/Products";
import products from "../products";

const HomeScreen = () => {
  return (
    <>
      <Flex
        display="flex"
        justifyContent="center"
        gap="5"
        flexDirection="coloum"
        flexWrap="wrap"
      >
        <Box>
          <Heading as="h2" mb="8" mt="3" fontSize="3xl">
            Latest Products
          </Heading>
        </Box>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
        >
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default HomeScreen;
