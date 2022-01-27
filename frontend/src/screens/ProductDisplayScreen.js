import { Flex, Heading, Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Products from "../components/Products";

const ProductDisplayScreen = ({ category, type }) => {
  const [products, setproducts] = useState([""]);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/product/`);

      setproducts(data);
    };

    fetchProduct();
  }, [category]);

  let prod = products.filter((product) => product.type === type);

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
  }

  return (
    <>
      <Flex mt="20px">
        <Box>
          <Heading
            textTransform="uppercase"
            as="h2"
            mb="8"
            mt="3"
            fontSize="4xl"
          >
            Latest Products
          </Heading>
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
