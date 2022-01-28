import { Flex, Heading, Box, Input, Button } from "@chakra-ui/react";
import axios from "axios";

import { useEffect, useState } from "react";
import Products from "../components/Products";
// import Search from "../components/Search";

let searchQuery;

const ProductDisplayScreen = ({ category, type }) => {
  const [btn, setBtn] = useState(true);
  const [Squery, setQuery] = useState("");

  const SearchBar = () => {
    const submitHandler = (e) => {
      e.preventDefault();
      // console.log("form submitted");
      searchQuery = e.target.elements.search.value;
      // console.log(searchQuery);
      e.target.elements.search.value = " ";
      setQuery(searchQuery);
    };

    return (
      <>
        <Flex>
          <form
            onSubmit={(e) => submitHandler(e)}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Input
              w="600px"
              placeholder="Search here..."
              bgColor="gray.100"
              name="search"
            />
            <Button colorScheme="teal" mx="3" type="submit">
              Search
            </Button>
          </form>
        </Flex>
      </>
    );
  };

  const [products, setproducts] = useState([""]);

  Squery.toLowerCase();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/product/`);

      setproducts(data);
    };

    fetchProduct();
  }, [category]);

  console.log(Squery);

  let prod = products.filter((product) => product.type === type);

  // let searchedProd = products.filter((prod) => {
  //   if (prod.name.includes(Squery)) {
  //     return prod;
  //   }
  // });
  // console.log(searchedProd);

  if (category === "Mens Originals") {
    prod = products.filter((product) => product.category === "Mens Originals");
  } else if (category === "Women Originals") {
    prod = products.filter((product) => product.category === "Women Originals");
  } else if (category === "Kids Originals") {
    prod = products.filter((product) => product.category === "Kids Originals");
  } else if (type === "sports") {
    prod = products.filter((product) => product.type === "sports");
  } else if (type === "casuals") {
    prod = products.filter((product) => product.type === "casuals");
  } else if (type === "casuals") {
    prod = products.filter((product) => product.type === "casuals");
  } 


  return (
    <>
      <Flex mt="20px">
        <Box>
          <Flex display="flex" flexDirection="row" justify="space-between">
            <Heading
              textTransform="uppercase"
              as="h2"
              mb="8"
              mt="3"
              fontSize="4xl"
            >
              Latest Products
            </Heading>
            {/* <SearchBar /> */}
          </Flex>
          <Heading
            textTransform="uppercase"
            as="h2"
            mb="8"
            mt="3"
            fontSize="3xl"
          >
            {type}
          </Heading>

          <Flex
            display="flex"
            direction="row"
            wrap="wrap"
            justifyContent="space-evenly"
            gap="5"
          >
            {prod.map((product) => (
              <Products
                category={category}
                key={product._id}
                product={product}
              />
            ))}
          </Flex>
        </Box>
      </Flex>
    </>

  );

};

export default ProductDisplayScreen;
