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
import { IoPencilSharp, IoTrashBinSharp, IoAdd } from "react-icons/io5";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProducts } from "../actions/productActions";

const ProductListScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, userInfo]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure? ")) {
      //   delete  product
    }
  };

  const createProductHandler = () => {
    //   create product
  };
  return (
    <Flex w="full" direction="column" mt="45">
      <Flex m="5" p="5" justifyContent="space-between" wrap="wrap">
        <Box>
          <Heading as="h1" fontSize="3xl" mb="5">
            Product
          </Heading>
        </Box>
        <Box>
          {" "}
          <Button onClick={createProductHandler} colorScheme="teal">
            <Icon as={IoAdd} mr="2" fontSize="xl" fontWeight="bold" /> Create
            Product
          </Button>
        </Box>
      </Flex>
      <Flex w="full" justifyContent="center">
        {loading ? (
          <Loader />
        ) : error ? (
          <Message type="error">{error}</Message>
        ) : (
          <Box bgColor="white" rounded="lg" shadow="lg" px="5" py="5">
            <Table variant="striped" colorScheme="gray" size="lg">
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>NAME</Th>
                  <Th>PRICE</Th>
                  <Th>CATEGORY</Th>
                  <Th>BRAND</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {products.map((product) => (
                  <Tr key={product._id}>
                    <Td>{product._id}</Td>
                    <Td>{product.name}</Td>
                    <Td>{product.price}</Td>
                    <Td>{product.category}</Td>
                    <Td>{product.brand}</Td>
                    <Td>
                      <Flex justifyContent="flex-end" alignItems="center">
                        <Button
                          mr="4"
                          as={RouterLink}
                          to={`/admin/product/${product._id}/edit`}
                          colorScheme="teal"
                        >
                          <Icon as={IoPencilSharp} color="white" size="sm" />
                        </Button>
                        <Button
                          mr="4"
                          colorScheme="red"
                          onClick={() => deleteHandler(product._id)}
                        >
                          <Icon as={IoTrashBinSharp} color="white" size="sm" />
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

export default ProductListScreen;
