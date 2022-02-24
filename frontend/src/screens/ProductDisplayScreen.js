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
  Spacer,
  MenuItem,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductCard, Products } from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ProductDisplayScreen = ({ gender }) => {
  const [searchQuery, setSearchquery] = useState();
  const [brand, setBrand] = useState(true);
  const [type, setType] = useState(true);
  // const [brandName, setBrandName] = useState("Adidas");
  // const [categoryName, setCategoryName] = useState("Casuals");

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  let { loading, error, products } = productList;

  products = products.filter((product) => product.gender === gender);

  const filterProduct = (searchQuery) => {
    searchQuery.toLowerCase();

    products = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery)
    );
  };

  if (searchQuery) {
    filterProduct(searchQuery);
  }

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

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(searchQuery);
  };

  return (
    <>
      <Grid
        templateColumns={{ lg: "1fr 6fr", md: "1fr 4fr", base: "1fr" }}
        gap="5"
      >
        <Flex mt={{ lg: "50px", md: "50px", base: "10px" }}>
          <Box mt={{ lg: "100px", md: "50px", base: "10px" }} p="5">
            <Heading as="h3" fontSize="2xl">
              Filter
            </Heading>
            <Spacer h="2" />

            <Flex
              direction="column"
              justifyContent="center"
              alignContent="center"
            >
              <Flex my="3" mx="3" direction="column">
                <Text>Filter By Brands</Text>
                <Menu mt="2">
                  <MenuButton mt="2" as={Button}>
                    Brands
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => setBrand(true)}>Nike</MenuItem>
                    <MenuItem onClick={() => setBrand(false)}>Adidas</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>

              <Flex my="3" mx="3" direction="column">
                <Text>Filter By Categories</Text>

                <Menu mt="2">
                  <MenuButton mt="2" as={Button}>
                    Category
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => setType(false)}>Sports</MenuItem>
                    <MenuItem onClick={() => setType(true)}>Casuals</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <Flex>
          <Flex my="4" p="5" mt="20px">
            <Box>
              <Flex
                display="flex"
                flexDirection={{ lg: "row", md: "row", base: "column" }}
                justifyContent="space-between"
              >
                {brand ? (
                  <Heading
                    textTransform="uppercase"
                    as="h2"
                    mb="8"
                    mt="3"
                    fontSize="3xl"
                    color="gray.800"
                  >
                    {gender} - Nike
                  </Heading>
                ) : (
                  <Heading
                    textTransform="uppercase"
                    as="h2"
                    mb="8"
                    mt="3"
                    fontSize="3xl"
                    color="gray.800"
                  >
                    {gender} - Adidas
                  </Heading>
                )}

                <form onSubmit={submitHandler}>
                  <Input
                    mt="3"
                    size="lg"
                    width="400px"
                    rounded="3xl"
                    placeholder={`Search in ${gender} ${
                      type ? "Casuals" : "Sports"
                    }`}
                    bgColor="white"
                    onChange={(e) => setSearchquery(e.target.value)}
                  />
                </form>

                <Box>
                  {type ? (
                    <Heading
                      textTransform="uppercase"
                      as="h2"
                      mb="8"
                      mt="3"
                      fontSize="3xl"
                      marginRight="10"
                      color="gray.800"
                    >
                      Casuals
                    </Heading>
                  ) : (
                    <Heading
                      textTransform="uppercase"
                      as="h2"
                      mb="8"
                      mt="3"
                      marginRight="10"
                      fontSize="3xl"
                      color="gray.800"
                    >
                      Sports
                    </Heading>
                  )}
                </Box>
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
                  justifyContent="space-between"
                  gap="2"
                >
                  {products.length === 0 ? (
                    <Message>Not found</Message>
                  ) : brand ? (
                    nike_products.map((product) => (
                      <Products
                        // category={category}
                        key={product._id}
                        product={product}
                      />
                      // <ProductCard key={product._id} product={product} />
                    ))
                  ) : (
                    adidas_products.map((product) => (
                      <Products
                        // category={category}
                        key={product._id}
                        product={product}
                      />
                    ))
                  )}
                </Grid>
              )}
            </Box>
          </Flex>
        </Flex>
      </Grid>
    </>
  );
};

export default ProductDisplayScreen;
