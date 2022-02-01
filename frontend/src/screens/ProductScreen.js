import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import Message from "../components/Message";
import Loader from "../components/Loader";
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
  Select,
} from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { listProductDetails } from "../actions/productActions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BiPlus, BiMinus } from "react-icons/bi";

import Rating from "../components/Ratings";

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
});

const theme = extendTheme({ breakpoints });

const ProductScreen = ({ type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [image, setImage] = useState("");
  const [qty, setQty] = useState(1);
  const [count, setCount] = useState(1);

  const productDetails = useSelector((state) => state.productDetails);

  const { loading, product, error } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [id, dispatch]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  const inc = () => setQty(qty + 1);
  const dec = () => setQty(qty - 1);

  return (
    <>
      <Flex
        m="4"
        p="5"
        display={{ base: "none", md: "block", sm: "none" }}
        mb="5"
      >
        <Button
          bgColor="gray.800"
          colorScheme="teal"
          my="2"
          mx="3"
          as={RouterLink}
          to="/"
        >
          <Icon color="gray.200" w="4" h="4" as={BsArrowLeftCircle} />
        </Button>
      </Flex>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error">{error}</Message>
      ) : (
        <Grid
          templateColumns={{ sm: "2fr", lg: "6fr 3fr 2fr" }}
          gap="10"
          m="3"
          p="3"
        >
          <Flex flexDirection="column" gap="2">
            <Image src={product.image1} alt={product.name} />

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
            <Text color="gray.700">{product.description}</Text>
          </Flex>

          {/* Column three */}
          <Flex direction="column">
            <Flex justifyContent="space-between">
              <Text color="gray.700">Price:</Text>
              <Text color="gray.700" fontWeight="bold">
                ₹{product.price}
              </Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text color="gray.700">Status:</Text>
              <Text color="gray.700">
                {product.countInStock > 0 ? "In stock" : "Not available"}
              </Text>
            </Flex>
            <Divider />
            {product.countInStock > 0 && (
              <Flex justifyContent="space-between" py="2">
                <Text color="gray.800">Qty:</Text>

                <Icon
                  w="5"
                  h="5"
                  marginLeft="80px"
                  color="black"
                  as={BiPlus}
                  onClick={inc}
                />

                <Text color="gray.800">{qty}</Text>
                {qty == 0 ? (
                  <Icon
                  visibility="hidden"
                    w="5"
                    h="5"
                    color="black"
                    as={BiMinus}
                    onClick={dec}
                  />
                ) : (
                  <Icon w="5" h="5" color="black" as={BiMinus} onClick={dec} />
                )}
              </Flex>
            )}
            <Button
              bgColor="gray.800"
              textTransform="uppercase"
              letterSpacing="wide"
              colorScheme="teal"
              color="gray.200"
              my="3"
              _disabled={product.countInStock === 0}
              onClick={addToCartHandler}
            >
              Add to Cart
            </Button>
          </Flex>
        </Grid>
      )}
    </>
  );
};

export default ProductScreen;
