import { Link as RouterLink, useParams } from "react-router-dom";
import {
  Flex,
  Grid,
  Box,
  Button,
  Image,
  Heading,
  Text,
  Divider,
  Icon,
} from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

import { useState, useEffect } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";

import Rating from "../components/Ratings";
import axios from "axios";
import ProductCorousel from "../components/ProductCorousel";

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
});

const theme = extendTheme({ breakpoints });

const ProductScreen = ({ type }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/product/${id}`);
      setProduct(data);
      setImage(data.image1);
      console.log(image);
    };

    fetchProduct();
  }, []);
  return (
    <>
      <Flex display={{ base: "none", md: "block", sm: "none" }} mb="5">
        <Button my="2" mx="3" as={RouterLink} to="/">
          <Icon w="4" h="4" as={BsArrowLeftCircle} />
        </Button>
      </Flex>
      {/* <Grid templateColumns="5fr 4fr 3fr" gap="10"> */}
      <Grid templateColumns={{ sm: "2fr", lg: "6fr 3fr 2fr" }} gap="10">
        {/* Column one */}
        <Flex flexDirection="column" gap="2">
          {/* <Image src={product.image1} alt={product.name} /> */}
          <Image src={image} alt={product.name} />

          <Flex flexDirection="row" wrap="wrap">
            <Box
              display="flex"
              flexDirection="row"
              wrap="wrap"
              width={{ lg: "120px", md: "90px", sm: "70px", base: "50px" }}
            >
              <Image
                onClick={() => setImage(product.image1)}
                my="3"
                src={product.image1}
                alt={product.name}
              />
              <Image
                onClick={() => setImage(product.image2)}
                my="3"
                src={product.image2}
                alt={product.name}
              />
              <Image
                onClick={() => setImage(product.image3)}
                my="3"
                src={product.image3}
                alt={product.name}
              />
              <Image
                onClick={() => setImage(product.image4)}
                my="3"
                src={product.image4}
                alt={product.name}
              />
            </Box>
          </Flex>
        </Flex>

        {/* Column two */}
        <Flex direction="column">
          <Heading as="h5" fontSize="base" color="gray.700">
            {product.brand}
          </Heading>
          <Heading as="h2" fontSize="2xl" color="gray.500">
            {product.name}
          </Heading>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
          <Heading
            as="h4"
            my="5"
            fontSize="4xl"
            fontweight="bold"
            color="teal.600"
          >
            ₹{product.price}
          </Heading>
          <Text>{product.description}</Text>
        </Flex>

        {/* Column three */}
        <Flex direction="column">
          <Flex justifyContent="space-between">
            <Text>Price:</Text>
            <Text fontWeight="bold">₹{product.price}</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>Status:</Text>
            <Text>
              {product.countInStock > 0 ? "In stock" : "Not available"}
            </Text>
          </Flex>
          <Divider />
          <Button
            bgColor="gray.800"
            textTransform="uppercase"
            letterSpacing="wide"
            colorScheme="teal"
            my="3"
            _disabled={product.countInStock === 0}
          >
            Add to Cart
          </Button>
        </Flex>
      </Grid>
    </>
  );
};

export default ProductScreen;
