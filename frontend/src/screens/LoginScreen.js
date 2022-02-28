import { useState, useEffect } from "react";
import {
  Link as RouterLink,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Link,
  Spacer,
} from "@chakra-ui/react";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/userActions";
import { PRODUCT_DETAILS_RESET } from "../constants/productConstants";

const LoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  let redirect = searchParams.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect.length > 1 ? `/${redirect}` : `${redirect}`);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    dispatch({ type: PRODUCT_DETAILS_RESET });
  };

  return (
    <Flex w="full" alignItems="center" justifyContent="center" py="5">
      <FormContainer>
        <Heading as="h1" mb="8" fontSize="3xl">
          Login
        </Heading>

        {error && <Message type="error">{error}</Message>}

        <form onSubmit={submitHandler}>
          <FormControl id="email">
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              placeholder="usernam@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <Spacer h="3" />

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" isLoading={loading} mt="4" colorScheme="teal">
              Login
            </Button>
          </FormControl>
        </form>

        <Flex pt="5">
          <Text fontWeight="semibold">
            New Customer?{" "}
            <Link as={RouterLink} to="/register">
              Register
            </Link>
          </Text>
        </Flex>
      </FormContainer>
    </Flex>
  );
};

export default LoginScreen;
