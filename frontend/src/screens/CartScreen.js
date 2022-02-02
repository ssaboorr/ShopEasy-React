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
  console.log(cartItems)

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

  // cartItems.map((item) => console.log(item.image));

  return (
    <Grid gridTemplateColumns={{ lg: "3", md: "2", base: "1" }}>
      <Box>
        <Heading m="3" p="3" color="gray.800" mb="8">
          Shopping Cart
        </Heading>
        <Flex>
          {cartItems.length === 0 ? (
            <Message>
              Your Cart is Empty..
              <Link color="gray.800" as={RouterLink} to="/">
                GO back
              </Link>
            </Message>
          ) : (
            <Grid
              templateColumns={{ lg: "6fr 2fr", md: "4fr 1fr", base: "1fr" }}
              gap="15"
              marginLeft="3rem"
              w="full"
            >
              <Flex direction="column">
                {cartItems.map((item) => (
                  <Grid
                    key={item.product}
                    size="100%"
                    alignItems="center"
                    justifyContent="space-between"
                    borderBottom="2px"
                    borderColor="gray.600"
                    py="4"
                    px="2"
                    rounded="lg"
                    templateColumns={{
                      lg: "4fr 2fr",
                      md: "2fr",
                      base: "1fr",
                    }}
                    _hover={{ bgColor: "gray.300" }}
                  >
                    <Grid templateColumns="2fr 2fr">
                      {/* Product Image */}
                      <Image
                        src={item.image}
                        alt={item.name}
                        borderRadius="lg"
                        height="200"
                        width="200px"
                        objectFit="cover"
                        m="3"
                      />
                      {/* Product Name */}

                      <Flex direction="column">
                        <Text
                          mx="4"
                          mt="5"
                          fontSize="2xl"
                          color="gray.800"
                          fontWeight="bold"
                        >
                          <Link as={RouterLink} to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Text>
                        {/* Product Price */}
                        <Text
                          mx="4"
                          color="blue.600"
                          fontWeight="bold"
                          fontSize="2xl"
                        >
                          ₹{item.price}
                        </Text>
                      </Flex>
                    
                    </Grid>

                    <Flex direction="column">
                      <Flex direction="row" justifyContent="space-between">
                        <Text>Size: </Text>
                        <Text mx="3">UK {item.size}</Text>
                      </Flex>
                      <Flex direction="row" justifyContent="space-between">
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

                      {/* Delete Button */}

                      <Button
                        mt="6"
                        type="button"
                        colorScheme="red"
                        bgColor="gray.800"
                        onClick={() => removeCartHandler(item.product)}
                      >
                        <Icon color="whiteAlpha.400" as={IoTrashBinSharp} />
                      </Button>
                    </Flex>
                  </Grid>
                ))}
              </Flex>

              <Flex
                direction="column"
                border="1px"
                borderWidth="2"
                borderColor="gray.600"
                rounded="md"
                p="5"
                h="48"
                justifyContent="space-between"
              >
                <Flex direction="column">
                  <Heading color="gray.800" as="h2" fontSize="2xl" mb="2">
                    Subtotal (
                    {cartItems.reduce(
                      (acc, currVal) => acc + (+currVal.qty || 1),
                      0
                    )}
                    ) itme(s)
                  </Heading>
                  <Text
                    fontWeight="bold"
                    fontSize="2xl"
                    color="blue.600"
                    mb="4"
                  >
                    ₹
                    {cartItems.reduce(
                      (acc, currVal) =>
                        acc + (currVal.qty || 1) * +currVal.price,
                      0
                    )}
                  </Text>
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
              </Flex>
            </Grid>
          )}
        </Flex>
      </Box>
    </Grid>
  );
};

export default CartScreen;
