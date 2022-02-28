import { useEffect } from "react";
import { Link as RouterLink, useParams, useNavigate } from "react-router-dom";
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
import { PayPalButton } from "react-paypal-button-v2";

import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
  getOrderDetails,
  payOrder,
  deliverOrder,
} from "../actions/orderActions";
import axios from "axios";
import { useState } from "react";
import {
  ORDER_DELIVER_RESET,
  ORDER_PAY_RESET,
} from "../constants/orderConstants";

const OrderScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: orderId } = useParams();

  const [sdkReady, setSdkReady] = useState(false);

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  console.log(order);
  if (!loading) {
    order.itemsPrice =
      order &&
      order.orderItems.reduce(
        (acc, currVal) => acc + currVal.price * (currVal.qty || 1),
        0
      );
  }

  useEffect(() => {
    const addPaypalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!order || successPay) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPaypalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId, successPay, order, successDeliver, navigate]);

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);

    dispatch(payOrder(orderId, paymentResult));
  };

  const deliverHandler = () => dispatch(deliverOrder(order));

  return loading ? (
    <Loader />
  ) : error ? (
    <Message type="error">{error}</Message>
  ) : (
    <Flex w="full" py="5" mt="10" direction="column">
      <Grid
        templateColumns={{ lg: "3fr 2fr", md: "3fr 2fr", base: "1fr" }}
        gap="20"
      >
        {/* Column 1 */}

        <Flex direction="column" p="5">
          {/* Shipping INfo */}

          <Box borderBottom="2px" py="6" borderColor="gray.400">
            <Heading as="h2" fontSize="2xl" fontWeight="semibold" mb="3">
              Shipping
            </Heading>
            <Text>
              Name: <strong>{order.user.name}</strong>
            </Text>
            <Text>
              Email:{" "}
              <strong>
                <a
                  style={{ textDecoration: "underline" }}
                  href={`mailto:${order.user.email}`}
                >
                  {order.user.email}
                </a>
              </strong>
            </Text>
            <Text>
              <strong>Address: </strong>
              {order.shippingAddress.address}, <br />
              {order.shippingAddress.city}, {order.shippingAddress.postalCode},{" "}
              {order.shippingAddress.country}
            </Text>

            <Text mt="4">
              {order.isDelivered ? (
                <Message type="success">
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message type="error">Not Delivered</Message>
              )}
            </Text>
          </Box>

          {/* Payment Method */}

          <Box borderBottom="2px" py="6" borderColor="gray.400">
            <Heading as="h2" fontSize="2xl" fontWeight="semibold">
              Payment Method
            </Heading>
            <Text>
              <strong>Method:</strong>
              <span style={{ textTransform: "capitalize" }}>
                {order.paymentMethod}
              </span>
            </Text>
            <Text mt="4">
              {order.isPaid ? (
                <Message type="success">Paid on {order.paidAt}</Message>
              ) : (
                <Message type="error">Not Paid</Message>
              )}
            </Text>
          </Box>
          {/* order items */}

          <Box borderBottom="2px" py="6" borderColor="gray.400">
            <Heading as="h2" fontSize="2xl" fontWeight="semibold">
              Ordered Items{" "}
            </Heading>

            <Box>
              {order.orderItems.length === 0 ? (
                <Message>Order is Empty</Message>
              ) : (
                <Box py="2">
                  {order.orderItems.map((item, idx) => (
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
                          fontWeight="medium"
                          fontSize="2xl"
                        >
                          {item.name}
                        </Link>
                      </Flex>

                      <Text fontSize="lg" fontWeight="semibold">
                        {item.qty || 1} x ₹{item.price} = ₹
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
          m="5"
        >
          <Box>
            <Heading mb="6" as="h2" fontSize="3xl" fontWeight="bold">
              Order Summary
            </Heading>
            {/* Numv=ber of Items */}
            <Flex
              borderBottom="2px"
              py="3"
              borderColor="gray.400"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontSize="xl">Number Of Items</Text>
              <Text fontSize="xl">{order.orderItems.length}</Text>
            </Flex>

            {/* Items Price */}
            <Flex
              borderBottom="2px"
              py="3"
              borderColor="gray.400"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontSize="xl">Items</Text>
              <Text fontSize="xl"> ₹{order.itemsPrice}</Text>
            </Flex>

            {/* Shipping Price */}
            <Flex
              borderBottom="2px"
              py="3"
              borderColor="gray.400"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontSize="xl">Shipping</Text>
              <Text fontSize="xl"> ₹{order.shippingPrice}</Text>
            </Flex>

            {/* Tax Price */}
            <Flex
              borderBottom="2px"
              py="3"
              borderColor="gray.400"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontSize="xl">Tax</Text>
              <Text fontSize="xl"> ₹{order.taxPrice}</Text>
            </Flex>

            {/* Total Price */}
            <Flex
              borderBottom="2px"
              py="3"
              borderColor="gray.400"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontSize="xl">Total</Text>
              <Text fontWeight="bold" fontSize="xl" color="green.400">
                ₹{order.totalPrice}
              </Text>{" "}
            </Flex>
          </Box>

          {!order.isPaid && (
            <Box>
              {loadingPay && <Loader />}
              {!sdkReady ? (
                <Loader />
              ) : order.paymentMethod === "paypal" ? (
                <PayPalButton
                  amount={order.totalPrice}
                  onSuccess={successPaymentHandler}
                />
              ) : (
                <Box>
                  <Text>Pay Cash On Delivery</Text>
                </Box>
              )}
            </Box>
          )}

          {loadingDeliver && <Loader />}
          {userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered && (
            <Button type="button" colorScheme="teal" onClick={deliverHandler}>
              Mark as Delivered
            </Button>
          )}
        </Flex>
      </Grid>
    </Flex>
  );
};

export default OrderScreen;
