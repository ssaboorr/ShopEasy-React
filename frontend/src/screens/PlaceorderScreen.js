import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Button,
  Flex,
  Heading,
  Box,
  Grid,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import CheckoutSteps from "../components/CheckoutSteps";
import { createOrder } from "../actions/orderActions";
import { useEffect } from "react";
import { ORDER_DETAILS_RESET } from "../constants/orderConstants";

const PlaceOrderScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  cart.itemsPrice = cart.cartItems.reduce(
    (acc, curVal) => acc + curVal.price * curVal.qty,
    0
  );

  cart.shippingPrice = cart.itemsPrice < 1000 ? 1000 : 0;
  cart.taxPrice = (18 * cart.itemsPrice) / 100;
  cart.totalPrice = cart.shippingPrice + cart.taxPrice + cart.itemsPrice;

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  useEffect(() => {
    dispatch({ type: ORDER_DETAILS_RESET });

    if (success) {
      navigate(`/orders/${order._id}`);
    }
  }, [success]);
  return (
    <Flex mt="10" w="full" direction="column" py="5">
      <CheckoutSteps step1 step2 step3 step4 />

      <Grid
        templateColumns={{ lg: "3fr 2fr", md: "3fr 2fr", base: "1fr" }}
        gap="20"
        p="5"
      >
        {/* Column 1 */}
        <Flex direction="column">
          <Box borderBottom="2px" py="6" borderColor="gray.400">
            <Heading as="h2" fontSize="2xl" fontweight="semibold" mb="3">
              Shipping
            </Heading>
            <Text>
              <strong>Address:</strong> <br />
              {cart.shippingAddress.address},<br />
              {cart.shippingAddress.city},{cart.shippingAddress.postalCode},
              {cart.shippingAddress.country}
            </Text>
          </Box>

          <Box borderBottom="2px" py="6" borderColor="gray.400">
            <Heading as="h2" fontSize="2xl" fontweight="semibold" mb="3">
              Payment Method
            </Heading>
            <Text>
              <strong>Method:</strong>
              <span style={{ textTransform: "capitalize" }}>
                {cart.paymentMethod}
              </span>
            </Text>
          </Box>
          <Box borderBottom="2px" py="6" borderColor="gray.400">
            <Heading as="h2" fontSize="2xl" fontweight="semibold" mb="3">
              Ordered Items
            </Heading>
            <Box>
              {cart.cartItems.length === 0 ? (
                <Message>Your Cart is Empty</Message>
              ) : (
                <Box py="2">
                  {cart.cartItems.map((item, idx) => (
                    <Flex
                      key={idx}
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      wrap="wrap"
                    >
                      <Flex py="2" alignItems="center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          w="150px"
                          h="150px"
                          objectFit="cover"
                          mr="6"
                        />
                        <Link
                          as={RouterLink}
                          to={`/product/${item.product}`}
                          fontSize="xl"
                          fontWeight="medium"
                        >
                          {item.name}
                        </Link>
                      </Flex>
                      <Text fontSize="lg" fontWeight="semibold">
                        {item.qty || 1} X ₹{item.price} = ₹
                        {(item.qty || 1) * item.price}
                      </Text>
                    </Flex>
                  ))}
                </Box>
              )}
            </Box>
          </Box>
        </Flex>

        {/* Column 2 */}

        <Flex
          direction="column"
          bgColor="white"
          justifyContent="space-between"
          p="8"
          shadow="md"
          rounded="lg"
          borderColor="gray.400"
        >
          <Box>
            <Heading as="h2" fontSize="3xl" fontweight="bold" mb="3">
              Order Summary
            </Heading>
            {/* Number of items */}
            <Flex
              my="3"
              borderBottom="2px"
              borderColor="gray.400"
              py="2"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontSize="xl">Number of Items: </Text>
              <Text fontweight="bold" fontSize="xl">
                {cart.cartItems.length}
              </Text>
            </Flex>
            {/* Shipping Price */}
            <Flex
              my="3"
              borderBottom="2px"
              borderColor="gray.400"
              py="2"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontSize="xl">Shipping </Text>
              <Text fontweight="bold" fontSize="xl">
                ₹{cart.shippingPrice}
              </Text>
            </Flex>
            {/* Tax price */}

            <Flex
              my="3"
              borderBottom="2px"
              borderColor="gray.400"
              py="2"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontSize="xl">Tax </Text>
              <Text fontweight="bold" fontSize="xl">
                ₹{cart.taxPrice}
              </Text>
            </Flex>
            {/* Total Price */}

            <Flex
              my="3"
              borderBottom="2px"
              borderColor="gray.400"
              py="2"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontSize="xl">Total </Text>
              <Text fontweight="bold" fontSize="xl">
                ₹{cart.totalPrice}
              </Text>
            </Flex>
          </Box>
          <Button
            size="lg"
            textTransform="uppercase"
            colorScheme="yellow"
            type="button"
            disabled={cart.cartItems === 0}
            onClick={placeOrderHandler}
          >
            Place Order
          </Button>
        </Flex>
      </Grid>
    </Flex>
  );
};

export default PlaceOrderScreen;
