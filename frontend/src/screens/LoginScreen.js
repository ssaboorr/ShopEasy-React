import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spacer,
  Text,
  Link,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link as RouterLink,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import FormContainer from "../components/FormContainer";
import Message from "../components/Message";
import { login } from "../actions/userActions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  let redirect = searchParams.get("redirect") || '/'

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;


  useEffect(() => {
    if (userInfo) {
      navigate("/men");
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <Flex w="full" justifyContent="center" alignItems="center" py="5">
      <FormContainer>
        <Heading as="h1" fontSize="3xl" mb="8">
          Login
        </Heading>
        {error && <Message type={error}> {error}</Message>}
        <form onSubmit={submitHandler}>
          <FormControl id="email">
            <FormLabel>
              Email Address:
              <Input
                type="email"
                placeholder="username@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormLabel>
          </FormControl>
          <Spacer h="3" />

          <FormControl id="password">
            <FormLabel>
              Password:
              <Input
                type="password"
                placeholder="*******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormLabel>
            <Button type="submit" isLoading={loading} mt="4" >
              Login
            </Button>
          </FormControl>
        </form>

        <Flex pt="5">
          <Text fontWeight="semibold">
            New Customer?
            <Link color="blue" as={RouterLink} to="/register">
              Register here.
            </Link>
          </Text>
        </Flex>
      </FormContainer>
    </Flex>
  );
};

export default Login;
