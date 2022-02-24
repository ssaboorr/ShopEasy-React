import {
  Flex,
  Box,
  Icon,
  useDisclosure,
  Slide,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";

import {
  HiOutlineUser,
  HiShoppingCart,
  HiMenuAlt3,
  HiLogin,
  HiUser,
  HiLogout,
} from "react-icons/hi";
import { GoSignIn } from "react-icons/go";

import MenuItems from "./MenuItem";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import {
  USER_DETAILS_RESET,
  USER_LOGIN_RESET,
  USER_REGISTER_RESET,
} from "../../constants/userConstants";
import { PRODUCT_DETAILS_RESET } from "../../constants/productConstants";

function SlideEx() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { isOpen, onToggle } = useDisclosure();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);

  const { user } = userDetails;

  if (user.name) {
    userInfo.name = user.name;
  }

  const logoutHandler = () => {
    dispatch(logout());
    dispatch({ type: USER_DETAILS_RESET });
    dispatch({ type: USER_REGISTER_RESET });

    navigate("/login");
  };

  const handleClick = () => {
    dispatch({ type: PRODUCT_DETAILS_RESET });
  };

  return (
    <>
      <Icon
        marginLeft="10rem"
        onClick={onToggle}
        as={HiMenuAlt3}
        color="black"
        w="6"
        h="6"
      />

      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          borderRadius="2xl"
          p="40px"
          color="white"
          mt="4"
          bgColor="white"
          shadow="md"
        >
          <Box width={{ base: "full", md: "auto" }} alignItems="center">
            {userInfo ? (
              <Flex justifyContent="center" direction="column">
                <MenuItems url="/profile">
                  <Flex alignItems="center" justifyContent="center" m="2">
                    <Icon w="4" h="4" mr="1" as={HiUser} />
                    {userInfo.name}
                  </Flex>
                </MenuItems>

                <MenuItems url="/cart">
                  <Flex alignItems="center" justifyContent="center" m="2">
                    <Icon w="4" h="4" mr="1" as={HiShoppingCart} />
                    Cart
                  </Flex>
                </MenuItems>
                <MenuItems url="/login">
                  <Flex alignItems="center" justifyContent="center" m="2">
                    <Icon w="4" h="4" mr="1" as={HiLogout} />
                    <Button bgColor="white" onClick={logoutHandler}>
                      Logout
                    </Button>
                  </Flex>
                </MenuItems>
                {/* Admin Menu */}

                {userInfo && userInfo.isAdmin && (
                  <Menu>
                    <MenuButton
                      ml="5"
                      color="gray.800"
                      fontWeight="semibold"
                      as={Button}
                      textTransform="uppercase"
                      _hover={{ textDecor: "none", opacity: "0.7" }}
                    >
                      Manage <Icon as={IoChevronDown} />
                    </MenuButton>
                    <MenuList>
                      <MenuItem
                        color="gray.800"
                        as={RouterLink}
                        to="/admin/userlist"
                      >
                        All Users
                      </MenuItem>
                      <MenuItem
                        color="gray.800"
                        as={RouterLink}
                        to="/admin/productlist"
                      >
                        All Products
                      </MenuItem>
                      <MenuItem
                        color="gray.800"
                        as={RouterLink}
                        to="/admin/orderlist"
                      >
                        All Orders
                      </MenuItem>
                    </MenuList>
                  </Menu>
                )}
              </Flex>
            ) : (
              <Flex direction="column">
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
        </Box>
      </Slide>
    </>
  );
}

export default SlideEx;
