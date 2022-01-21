import { useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Icon,
  useDisclosure,
  Button,
  Text,
  Divider,
  Heading,
  Link,
} from "@chakra-ui/react";
import { BsFillMenuButtonWideFill } from "react-icons/bs";

function ContenDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Flex
        ef={btnRef}
        onClick={onOpen}
        alignItems="center"
        justifyContent="center"
        m="2"
        bgColor="gray.200"
      >
        <Icon
          w="4"
          h="4"
          justifyContent="flex-end"
          color="gray.800"
          as={BsFillMenuButtonWideFill}
        />
        <Text m="2" as="h3" color="gray.800">
          Products
        </Text>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="gray.200">
          <DrawerCloseButton />
          <DrawerHeader>Our Products</DrawerHeader>
          <Divider bgColor="gray.800" />
          <DrawerBody>
            <Heading mt="5" as="h2" fontSize="2xl">
              Fashion
            </Heading>
            <Divider bgColor="gray.800" />
            <Flex mt="5" display="flex" flexDirection="column">
              <Link as={RouterLink} to="/fashion" my="2">
                Top-wear
              </Link>
              <Link my="2">Bottom-wear</Link>
              <Link my="2">Formals</Link>
            </Flex>

            <Heading mt="5" as="h2" fontSize="2xl">
              Electronics
            </Heading>
            <Divider bgColor="red" />
            <Flex mt="5" display="flex" flexDirection="column">
              <Link as={RouterLink} to="/phone" my="2">
                Mobiles
              </Link>
              <Link my="2">Laptops</Link>
              <Link my="2">Gaming</Link>
            </Flex>

            <Heading mt="5" as="h2" fontSize="2xl">
              Shoes
            </Heading>
            <Divider bgColor="gray.800" />
            <Flex mt="5" display="flex" flexDirection="column">
              <Link my="2">Sports</Link>
              <Link my="2">Formal</Link>
              <Link as={RouterLink} to="/footwear" my="2">
                Casuals
              </Link>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Text mx="3" as="h3">
              Not logged in?
            </Text>
            <Button mx="2" colorScheme="blue">
              Login
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ContenDrawer;
