import { Link as RouterLink, useParams } from "react-router-dom";
import {
  Flex,
  Grid,
  Button,
  Image,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";

import Rating from "../components/Ratings";
import products from "../products";

const ProductScreen = () => {
  const { id } = useParams();
  const product = products.find((product) => product._id === +id);
  return (
    <>
      <Flex mb="5">
        <Button my="2" mx="3" as={RouterLink} to="/" colorScheme="gray">
          Go back
        </Button>
      </Flex>
      {/* <Grid templateColumns="5fr 4fr 3fr" gap="10"> */}
      <Grid templateColumns={{sm:'2fr',lg:'5fr 4fr 3fr'}}  gap="10">
        {/* Column one */}
        <Image src={product.image} alt={product.name} />
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