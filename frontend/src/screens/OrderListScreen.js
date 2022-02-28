import { useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Flex,
  Heading,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
} from "@chakra-ui/react";
import {
  IoCheckmarkCircleSharp,
  IoCloseCircleSharp,
  IoPencilSharp,
  IoTrashBinSharp,
} from "react-icons/io5";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listOrders } from "../actions/orderActions";

const OrderListScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ordersList = useSelector((state) => state.ordersList);
  const { loading, error, orders } = ordersList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate]);

  return (
    <Flex w="full" direction="column" mt="45">
      <Flex m="5" p="5" justifyContent="space-between" wrap="wrap">
        <Box>
          <Heading as="h1" fontSize="3xl" mb="5">
            Orders
          </Heading>
        </Box>
       
      </Flex>
      <Flex w="full" justifyContent="center">
        {loading ? (
          <Loader />
        ) : error ? (
          <Message type="error">{error}</Message>
        ) : (
          <Box
            overflowX="scroll"
            bgColor="white"
            rounded="lg"
            shadow="lg"
            px="5"
            py="5"
          >
           <Table variant="striped" colorScheme="gray" size="lg">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>USER</Th>
                <Th>DATE</Th>
                <Th>TOTAL PRICE</Th>
                <Th>PAID</Th>
                <Th>DELIVERED</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {orders.map((order) => (
                <Tr key={order._id}>
                  <Td>{order._id}</Td>
                  <Td>{order.user && order.user.name}</Td>
                  <Td>{order.createdAt.substring(0, 10)}</Td>
                  <Td>₹{order.totalPrice}</Td>
                  <Td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <Icon
                        as={IoCloseCircleSharp}
                        color="red.600"
                        w="8"
                        h="8"
                      />
                    )}
                  </Td>
                  <Td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <Icon
                        as={IoCloseCircleSharp}
                        color="red.600"
                        w="8"
                        h="8"
                      />
                    )}
                  </Td>
                  <Td>
                    <Flex justifyContent="flex-end" alignItems="center">
                      <Button
                        mr="4"
                        as={RouterLink}
                        to={`/orders/${order._id}`}
                        colorScheme="teal">
                        Details
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          </Box>
        )}
      </Flex>
    </Flex>
  );
};

export default OrderListScreen;
