import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
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
import { listUsers } from "../actions/userActions";

const UserListScreen = () => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);

  const { loading, error, users } = userList;

  console.log(users);
  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  const deleteHandler = () => {
    //   delete
  };
  return (
    <Flex
      w="full"
      mt="10"
      m="5"
      p="5"
      direction="column"
    >
      <Box>
        <Heading as="h1" fontSize="3xl" mb="5">
          Users
        </Heading>
      </Box>
      <Flex justifyContent="center" w="full" >
        <Box>
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
                    <Th>EMAIL</Th>
                    <Th>ADMIN</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {users.map((user) => (
                    <Tr key={user._id}>
                      <Td>{user._id}</Td>
                      <Td>{user.name}</Td>
                      <Td>
                        <a href={`mailto:${user.email}`}>{user.email}</a>
                      </Td>
                      <Td>
                        {user.isAdmin ? (
                          <Icon
                            as={IoCheckmarkCircleSharp}
                            color="green.600"
                            w="8"
                            h="8"
                          />
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
                            to={`/admin/user/${user._id}/edit`}
                            colorScheme="teal"
                          >
                            <Icon as={IoPencilSharp} color="white" size="sm" />
                          </Button>
                          <Button
                            mr="4"
                            colorScheme="red"
                            onClick={() => deleteHandler(user._id)}
                          >
                            <Icon
                              as={IoTrashBinSharp}
                              color="white"
                              size="sm"
                            />
                          </Button>
                        </Flex>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default UserListScreen;