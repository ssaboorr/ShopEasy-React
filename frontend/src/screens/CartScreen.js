import { useEffect, useState } from "react";
import {
  Link as RouterLink,
  useParams,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Flex,
  Text,
  Grid,
  Heading,
  Box,
  Image,
  Link,
  Select,
  Button,
  Icon,
} from "@chakra-ui/react";

import { IoTrashBinSharp } from "react-icons/io5";
import { BiPlus, BiMinus } from "react-icons/bi";

import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let [searchParams] = useSearchParams();

  const { id: productId } = useParams();
  let qty = searchParams.get("qty");

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;
  console.log(cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(qty, productId));
    }
  }, [qty, dispatch, productId]);

  const removeCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=shipping");
  };

  console.log(cartItems);

  return (
    <Flex w="full" py="5" direction="column">
      <Grid
        templateColumns={{ lg: "3fr 2fr", md: "3fr 2fr", base: "1fr" }}
        p="5"
        gap="20"
      >
        <Box>
          <Heading m="3" p="3" color="gray.800" mb="8">
            Shopping Cart
          </Heading>

          {cartItems.length === 0 ? (
            <Message>
              Your Cart is Empty..
              <Link color="gray.800" as={RouterLink} to="/">
                GO back
              </Link>
            </Message>
          ) : (
            <Flex p="5" m="5" direction="column">
              <Box borderBottom="1px" py="2" borderColor="gray.300">
                <Heading as="h2" fontSize="xl" fontWeight="semibold" mb="3">
                  Items In Cart
                </Heading>
              </Box>
              <Box py="5">
                {cartItems.map((item) => (
                  <Flex
                    key={item.product}
                    alignItems="center"
                    justifyContent="space-between"
                    direction="row"
                    wrap="wrap"
                  >
                    <Flex
                      direction="row"
                      wrap="wrap"
                      py="2"
                      alignItems="center"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        borderRadius="lg"
                        height="200px"
                        width="200px"
                        objectFit="cover"
                        m="3"
                      />{" "}
                      <Link
                        mx="3"
                        as={RouterLink}
                        to={`/products/${item.product}`}
                        fontWeight="medium"
                        fontSize="xl"
                      >
                        {item.name}
                      </Link>
                    </Flex>
                    <Flex>
                      <Text
                        mx="4"
                        color="blue.600"
                        fontWeight="bold"
                        fontSize="2xl"
                      >
                        ₹{item.price}
                      </Text>
                    </Flex>

                    <Flex
                      direction="row"
                      wrap="wrap"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Text>Qty:</Text>
                      {/* Quantity Selet Box */}
                      <Select
                        color="gray.800"
                        value={item.qty}
                        width="20"
                        onChange={(e) =>
                          dispatch(addToCart(+e.target.value, item.product))
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </Select>
                    </Flex>

                    <Flex justifyContent="center" alignItems="center">
                      <Button
                        type="button"
                        colorScheme="red"
                        bgColor="gray.800"
                        onClick={() => removeCartHandler(item.product)}
                      >
                        <Icon color="whiteAlpha.400" as={IoTrashBinSharp} />
                      </Button>
                    </Flex>
                  </Flex>
                ))}
              </Box>
            </Flex>
          )}
        </Box>

        {/* Column 2 */}

        <Flex
          direction="column"
          bgColor="white"
          justifyContent="space-between"
          py="8"
          px="8"
          m="10"
          shadow="md"
          rounded="lg"
          borderColor="gray.300"
        >
          <Box>
            <Heading mb="6" as="h2" fontSize="3xl" fontWeight="bold">
              Order Summary
            </Heading>
            <Flex
              borderBottom="1px"
              py="2"
              borderColor="gray.200"
              alignItems="center"
              justifyContent="space-between"
            >
              <Heading color="gray.800" as="h2" fontSize="2xl" mb="2">
                Number of Items:
              </Heading>
              <Text fontSize="2xl">
                {" "}
                {cartItems.reduce(
                  (acc, currVal) => acc + (+currVal.qty || 1),
                  0
                )}
              </Text>
            </Flex>

            <Flex
              my="3"
              borderBottom="1px"
              py="2"
              borderColor="gray.200"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontSize="2xl">Subtotal:</Text>
              <Text fontWeight="bold" fontSize="2xl" color="blue.600">
                ₹
                {cartItems.reduce(
                  (acc, currVal) => acc + (currVal.qty || 1) * +currVal.price,
                  0
                )}
              </Text>
            </Flex>
          </Box>
          <Button
            type="button"
            disabled={cartItems.length === 0}
            size="lg"
            colorScheme="teal"
            bgColor="gray.800"
            onClick={checkoutHandler}
            color="gray.200"
          >
            Proceed To Checkout
          </Button>
        </Flex>
      </Grid>
    </Flex>
  );
};

export default CartScreen;
