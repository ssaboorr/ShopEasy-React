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
  useToast,
  Link,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import {
  listProductDetails,
  createProductReview,
} from "../actions/productActions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BiPlus, BiMinus } from "react-icons/bi";

import Rating from "../components/Ratings";
import CartModal from "../components/CartModal";
import {
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_DETAILS_RESET,
} from "../constants/productConstants";

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
});

const theme = extendTheme({ breakpoints });

const ProductScreen = ({ type }) => {
  const toast = useToast();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [image, setImage] = useState("");
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(6);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const productDetails = useSelector((state) => state.productDetails);

  const { loading, product, error } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productCreateReview = useSelector((state) => state.productCreateReview);
  const { success: reviewSuccess, error: reviewError } = productCreateReview;

  useEffect(() => {
    if (reviewSuccess) {
      toast({
        title: "Review Add.",
        description: "We've add your review for this product.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(id));
    setImage(product.image1);
  }, [id, dispatch, reviewSuccess]);

  const inc = () => setQty(qty + 1);
  const dec = () => setQty(qty - 1);

  const handleBack = () => {
    dispatch({ type: PRODUCT_DETAILS_RESET });
    navigate("/");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createProductReview(id, { rating, comment }));
  };

  return (
    <>
      <Flex
        mt="70px"
        direction={{ lg: "row", md: "row", base: "column" }}
        wrap="wrap"
      >
        <Flex m="4" p="5" mb="5" mt="20px">
          <Button
            bgColor="gray.800"
            colorScheme="teal"
            my="2"
            mx="3"
            onClick={handleBack}
          >
            <Icon color="gray.200" w="4" h="4" mr="3" as={BsArrowLeftCircle} />
            Back
          </Button>
        </Flex>

        {loading ? (
          <Loader />
        ) : error ? (
          <Message type="error">{error}</Message>
        ) : (
          <>
            <Grid
              templateColumns={{ sm: "2fr", lg: "6fr 3fr 2fr" }}
              gap="10"
              m="3"
              p="3"
            >
              <Flex flexDirection="column" gap="2">
                {image ? (
                  <Image src={image} alt={product.name} />
                ) : (
                  <Image src={product.image1} alt={product.name} />
                )}

                <Flex flexDirection="row" wrap="wrap">
                  <Box
                    display="flex"
                    flexDirection="row"
                    wrap="wrap"
                    width={{
                      lg: "120px",
                      md: "90px",
                      sm: "70px",
                      base: "50px",
                    }}
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

                <Flex justifyContent="space-between">
                  <Text color="gray.700">Size:</Text>

                  <Select
                    color="gray.800"
                    width="20"
                    onChange={(e) => setSize(e.target.value)}
                  >
                    {[4, 5, 6, 7, 8, 9].map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </Select>
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
                    {qty == 1 ? (
                      <Icon
                        visibility="hidden"
                        w="5"
                        h="5"
                        color="black"
                        as={BiMinus}
                        onClick={dec}
                      />
                    ) : (
                      <Icon
                        w="5"
                        h="5"
                        color="black"
                        as={BiMinus}
                        onClick={dec}
                      />
                    )}
                  </Flex>
                )}

                <CartModal qty={qty} product={product} id={id} size={size} />
              </Flex>
            </Grid>

            <Box
              w={{ lg: "full", md: "full", base: "auto" }}
              m="4"
              p="2"
              mt="10"
            >
              <Box>
                <Heading as="h2" size="xl" mb="4">
                  Review
                </Heading>
                <Box mb="3">
                  {product.reviews.length === 0 && (
                    <Message>No Reviews Yet</Message>
                  )}
                </Box>

                <Box p="4" bgColor="white" rounded="md" mb="1">
                  {product.reviews.map((review) => (
                    <Flex direction="column" key={review._id} mb="5">
                      <Flex justifyContent="space-between">
                        <Box
                          display="flex"
                          direction="row"
                          justifyContent="center"
                          alignItems="center" gap="2"
                        >
                          <Text fontSize="xg">
                            <strong>{review.name}</strong> on
                          </Text>
                          <Text>
                            <strong>{review.createdAt.substring(0, 10)}</strong>
                          </Text>
                        </Box>
                        <Rating value={review.rating} />
                      </Flex>
                      <Text mt="2">{review.comment}</Text>
                    </Flex>
                  ))}
                </Box>

                {/* FORM */}
                <Box
                  p="10"
                  bgColor="white"
                  rounded="md"
                  border="2px"
                  borderColor="gray.200"
                >
                  <Heading as="h3" size="lg" mb="6">
                    Write a review
                  </Heading>

                  {reviewError && <Message type="error">{reviewError}</Message>}

                  {userInfo ? (
                    <form onSubmit={submitHandler}>
                      <FormControl id="rating" mb="3">
                        <FormLabel>Rating</FormLabel>
                        <Select
                          placeholder="Select option"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option>Select...</option>
                          <option value="1">1 - Poor</option>
                          <option value="2">2 - Okay</option>
                          <option value="3">3 - Good</option>
                          <option value="4">4 - Very Good</option>
                          <option value="5">5 - Excellent</option>
                        </Select>
                      </FormControl>

                      <FormControl id="comment" mb="3">
                        <FormLabel>Comment</FormLabel>
                        <Textarea
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Textarea>
                      </FormControl>

                      <Button colorScheme="teal" type="submit">
                        Post Review
                      </Button>
                    </form>
                  ) : (
                    <Message>
                      Please{" "}
                      <Link as={RouterLink} to="/login">
                        login
                      </Link>{" "}
                      to write a review.
                    </Message>
                  )}
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Flex>
    </>
  );
};

export default ProductScreen;
