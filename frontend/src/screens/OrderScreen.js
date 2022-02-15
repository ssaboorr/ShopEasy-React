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
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getOrderDetails } from "../actions/orderActions";

const OrderScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: orderId } = useParams();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
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
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message type="error">{error}</Message>
  ) : (
    <Flex w="full" py="5" mt="10" direction="column">
      <Grid templateColumns="3fr 2fr" gap="20">
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
                      alignItems="center"
                      justifyContent="space-between"
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
        </Flex>
      </Grid>
    </Flex>
  );
};

export default OrderScreen;
