import { Link as RouterLink } from "react-router-dom";
import SlideEx from "./Slide";
import { useState } from "react";
import {
  Flex,
  Heading,
  Link,
  Box,
  Icon,
  Input,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { HiOutlineUser, HiShoppingCart, HiLogin } from "react-icons/hi";

import { GoSignIn } from "react-icons/go";

import { Display, MenuItem, ProductMenu } from "./MenuItem";
import SearchBar from '../Search'

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      py="6"
      px="6"
      bgColor="gray.800"
      w="100%"
      top="0"
      zIndex="2"
      pos="fixed"
    >
      <Flex align="center" mr="5">
        <Heading
          as="h1"
          color="whiteAlpha.800"
          fontWeight="bold"
          size="md"
          letterSpacing="md"
        >
          <Link
            as={RouterLink}
            to="/"
            color="gray.200"
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
        {/* <SearchBar /> */}
      </Box>
      <Box
        display={{ base: show ? "none" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
      >
        <MenuItem url="/">
          <Flex alignItems="center" justifyContent="center" m="2">
            <Icon w="4" h="4" mr="1" as={HiOutlineUser} />
            User
          </Flex>
        </MenuItem>
        <MenuItem url="/cart">
          <Flex alignItems="center" justifyContent="center" m="2">
            <Icon w="4" h="4" mr="1" as={HiShoppingCart} />
            Cart
          </Flex>
        </MenuItem>
        <MenuItem url="/">
          <Flex alignItems="center" justifyContent="center" m="2">
            <Icon w="4" h="4" mr="1" as={HiLogin} />
            Login
          </Flex>
        </MenuItem>
        <MenuItem url="/">
          <Flex alignItems="center" justifyContent="center" m="2">
            <Icon w="4" h="4" mr="1" as={GoSignIn} />
            SignIn
          </Flex>
        </MenuItem>
      </Box>
    </Flex>
  );
};

export default Header;
