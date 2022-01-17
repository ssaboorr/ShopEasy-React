import { Link as RouterLink } from "react-router-dom";

import { useState } from "react";
import {
  Flex,
  Heading,
  Link,
  Box,
  Icon,
  useDisclosure,
  Slide,
} from "@chakra-ui/react";
import {
  HiOutlineUser,
  HiShoppingCart,
  HiMenuAlt3,
  HiLogin,
} from "react-icons/hi";

import { GoSignIn } from "react-icons/go";

const MenuItem = ({ children, url }) => {
  return (
    <Link
      as={RouterLink}
      to={url}
      fontSize="sm"
      letterSpacing="wide"
      color="gray.200"
      fontWeight="bold"
      textTransform="uppercase"
      m="2"
      display="block"
      _hover={{ color: "whiteAlpha.500" }}
      mt={{ base: "4", md: "0" }}
    >
      {children}
    </Link>
  );
};

function SlideEx() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Icon onClick={onToggle} as={HiMenuAlt3} color="black" w="6" h="6" />

      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Box p="40px" color="white" mt="4" bgColor="gray.800" shadow="md">
          <Box width={{ base: "full", md: "auto" }} alignItems="center">
            <MenuItem url="/">
              <Flex alignItems="center" justifyContent="center" m="2">
                <Icon w="4" h="4" mr="1" as={HiOutlineUser} />
                User
              </Flex>
            </MenuItem>
            <MenuItem url="/">
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
        </Box>
      </Slide>
    </>
  );
}

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
        <MenuItem url="/">
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
