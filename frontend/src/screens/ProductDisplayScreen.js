import { Flex, Heading, Box, Input, Button, Grid } from "@chakra-ui/react";
import axios from "axios";

import { useEffect } from "react";
import Products from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ProductDisplayScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  // console.log(products);
  return (
    <>
      <Flex my="4" p="5" mt="20px">
        <Box>
          <Flex display="flex" flexDirection="row" justify="space-between">
            <Heading
              textTransform="uppercase"
              as="h2"
              mb="8"
              mt="3"
              fontSize="4xl"
              color="gray.800"
            >
              Latest Products
            </Heading>
            {/* <SearchBar /> */}
          </Flex>

          {loading ? (
            <Loader />
          ) : error ? (
            <Message type="error">{error}</Message>
          ) : (
            <Grid
              gridTemplateColumns={{
                lg: "repeat(4,1fr)",
                md: "repeat(2,1fr)",
                base: "1fr",
              }}
              justifyContent="space-evenly"
              gap="5"
            >
              {products.map((product) => (
                <Products
                  // category={category}
                  key={product._id}
                  product={product}
                />
              ))}
            </Grid>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default ProductDisplayScreen;
