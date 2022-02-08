import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Spacer,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserDetails } from "../actions/userActions";
import FormContainer from "../components/FormContainer";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState("");
  const [message, setMessage] = useState(null);

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  console.log(userInfo);

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [user, dispatch, userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password != confrimPassword) {
      setMessage("Password do Not Match");
    } else {
      //   DISPATCH UPDATE PROFILE ACTION
    }
  };

  return (
    <Grid templateColumns={{ sm: "1fr", md: "1fr 1fr" }} py="5" gap="10">
      <Flex w="full" alignItems="center" justifyContent="center" px="8">
        <FormContainer>
          <Heading a="h1" mb="8" fontSize="3xl">
            User Profile
          </Heading>
          {/* error message */}
          {/* message */}
          <form>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <Spacer h="3" />
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="enail"
                placeholder="Enter enail address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <Spacer h="3" />
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Spacer h="3" />
            <FormControl id="confirmpassword">
              <FormLabel> Confirm Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter Password again"
                value={confrimPassword}
                onChange={(e) => setConfrimPassword(e.target.value)}
              />
            </FormControl>
            <Spacer h="3" />
            <Button type="submit" isLoading={loading} mt="4" colorScheme="teal">
              Update
            </Button>
          </form>
        </FormContainer>
      </Flex>

      <Flex direction="column">
        <Heading as="h2">My Orders</Heading>
      </Flex>
    </Grid>
  );
};

export default ProfileScreen;
