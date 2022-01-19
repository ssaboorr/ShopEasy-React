import { Flex, Heading, Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Products from "../components/Products";

const ProductDisplayScreen = ({type}) => {
  const [products, setproducts] = useState(['']);


  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${type}`);
      setproducts(data)

    };

    fetchProduct();
  }, []);

 

  return (
    <>
      <Flex mt="20px">
        <Box>
          <Heading as="h2" mb="8" mt="3" fontSize="3xl">
            Shoes
          </Heading>
          
          <Flex
            display="flex"
            direction="row"
            wrap="wrap"
            justifyContent="center"
            gap="5"
          >
            {products.map((product) => (
              <Products type={type} key={product._id} product={product} />
            ))}
         
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default ProductDisplayScreen;
