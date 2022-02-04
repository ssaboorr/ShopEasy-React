import {
  Flex,
  Heading,
  Box,
  Text,
  Button,
  Grid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Products from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ProductDisplayScreen = ({ gender }) => {
  const [brand, setBrand] = useState(true);
  const [type, setType] = useState(true);

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  let { loading, error, products } = productList;

  products = products.filter((product) => product.gender === gender);

  if (type) {
    products = products.filter((product) => product.type === "casuals");
  } else {
    products = products.filter((product) => product.type === "sports");
  }

  const nike_products = products.filter((product) => product.brand === "Nike");
  const adidas_products = products.filter(
    (product) => product.brand === "Adidas"
  );

  useEffect(() => {
    dispatch(listProducts());
  }, [brand, gender, type]);

  return (
    <>
      <Flex my="4" p="5" mt="20px">
        <Box>
          <Flex
            display="flex"
            flexDirection={{ lg: "row", md: "row", base: "column" }}
            justify="space-between"
          >
            <Heading
              textTransform="uppercase"
              as="h2"
              mb="8"
              mt="3"
              fontSize="3xl"
              color="gray.800"
            >
              {gender}
            </Heading>
            {/* <SearchBar /> */}
            <Flex>
              <Flex mx="3" direction="column">
                <Menu>
                  <MenuButton as={Button}>Brands</MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => setBrand(true)}>Nike</MenuItem>
                    <MenuItem onClick={() => setBrand(false)}>Adidas</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>

              <Flex mx="3" direction="column">
                <Menu>
                  <MenuButton as={Button}>Category</MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => setType(false)}>Sports</MenuItem>
                    <MenuItem onClick={() => setType(true)}>Casuals</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </Flex>
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
              {brand
                ? nike_products.map((product) => (
                    <Products
                      // category={category}
                      key={product._id}
                      product={product}
                    />
                  ))
                : adidas_products.map((product) => (
                    <Products
                      // category={category}
                      key={product._id}
                      product={product}
                    />
                  ))}
              {/* {products.map((product) => (
                <Products
                  // category={category}
                  key={product._id}
                  product={product}
                />
              ))} */}
            </Grid>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default ProductDisplayScreen;
