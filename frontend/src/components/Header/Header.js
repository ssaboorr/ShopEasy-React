import { Link as RouterLink, useNavigate } from "react-router-dom";
import SlideEx from "./Slide";
import { useState } from "react";
import {
  Flex,
  Heading,
  Link,
  Box,
  Icon,
  Text,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { IoChevronDown } from "react-icons/io5";

import { HiOutlineUser, HiShoppingCart, HiLogin } from "react-icons/hi";

import { GoSignIn } from "react-icons/go";

import MenuItems from "./MenuItem";
import SearchBar from "../Search";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [show, setShow] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  console.log(userDetails);

  const { user } = userDetails;

  const logoutHandler = () => {
    dispatch(logout());

    navigate("/login");
  };
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      py="6"
      px="6"
      bgColor="white"
      w="100%"
      top="0"
      zIndex="2"
      pos="fixed"
    >
      <Flex align="center" mr="5">
        <Heading
          as="h1"
          color="gray.800"
          fontWeight="bold"
          size="md"
          letterSpacing="md"
        >
          <Link
            as={RouterLink}
            to="/"
            color="gray.800"
            _hover={{ color: "gray.500", textDecor: "none" }}
          >
            ShopEasy
          </Link>
        </Heading>
      </Flex>

      <Box
        display={{ base: "block", md: "none", sm: "block" }}
        onClick={() => setShow(!show)}
      >
        <SlideEx />
      </Box>
      <Box>
        <Flex direction="row">
          <MenuItems url="/men">
            <Flex alignItems="center" justifyContent="center" m="2">
              <Text>Men</Text>
            </Flex>
          </MenuItems>
          <MenuItems url="/women">
            <Flex alignItems="center" justifyContent="center" m="2">
              <Text>Women</Text>
            </Flex>
          </MenuItems>
          <MenuItems url="/kids">
            <Flex alignItems="center" justifyContent="center" m="2">
              <Text>Kids</Text>
            </Flex>
          </MenuItems>
        </Flex>
      </Box>
      <Input size="sm" width="300px" rounded="2xl" placeholder="Search" />

      <Box
        display={{ base: show ? "none" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
      >
        {userInfo ? (
          <Flex>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<IoChevronDown />}
                _hover={{ textDecoration: "none", opacity: "0.7" }}
              >
                {user.name}
              </MenuButton>
              <MenuList url="/login">
                <MenuItem as={RouterLink} to="/profile">
                  Profile
                </MenuItem>
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
              </MenuList>
            </Menu>

            <MenuItems url="/cart">
              <Flex alignItems="center" justifyContent="center" m="2">
                <Icon w="4" h="4" mr="1" as={HiShoppingCart} />
                Cart
              </Flex>
            </MenuItems>
          </Flex>
        ) : (
          <Flex>
            <MenuItems url="/register">
              <Flex alignItems="center" justifyContent="center" m="2">
                <Icon w="4" h="4" mr="1" as={GoSignIn} />
                SignIn
              </Flex>
            </MenuItems>
            <MenuItems url="/login">
              <Flex alignItems="center" justifyContent="center" m="2">
                <Icon w="4" h="4" mr="1" as={HiLogin} />
                Login
              </Flex>
            </MenuItems>
          </Flex>
        )}
      </Box>
    </Flex>
  );
};

export default Header;
