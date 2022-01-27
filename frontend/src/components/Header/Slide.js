import {
    Flex,

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

 
  import {MenuItem} from "./MenuItem";

function SlideEx() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <>
        <Icon onClick={onToggle} as={HiMenuAlt3} color="black" w="6" h="6" />
  
        <Slide  direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
          <Box borderRadius="2xl" p="40px" color="white" mt="4" bgColor="gray.800" shadow="md">
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

  export default SlideEx;
  