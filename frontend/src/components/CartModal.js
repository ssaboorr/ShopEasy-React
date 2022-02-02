import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Grid,
  Flex,
  Image,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink,useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


function CartModal({ qty, product, id,size }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const addtoCart = () => {
    console.log("clicked");
    onOpen();
    if (id) {
      dispatch(addToCart(qty,id,size));
    }
  };
//   console.log(size)



//   console.log(cart);
  //   console.log(id);
  return (
    <>
      <Button bgColor="gray.800" colorScheme="teal" onClick={() => addtoCart()}>
        Add To Bag
      </Button>

      <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="green.400" fontSize="3xl">
            Sucessfulyy Added to Bag !
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid
              templateColumns={{ lg: "6fr 3fr", md: "4fr 2fr", base: "1fr" }}
            >
              <Grid templateColumns="2fr 2fr" gap="2" justifyContent="center">
                <Image
                  w="250px"
                  h="250px"
                  src={product.image1}
                  alt={product.name}
                />
                <Flex direction="column" mx="5">
                  <Heading my="3" as="h3" fontSize="2xl" color="gray.800">
                    {product.name}
                  </Heading>
                  <Text color="blue.600">₹ {product.price}</Text>
                  <Text fontSize="sm">Category: {product.category}</Text>
                  <Text fontSize="sm">Quantity: {qty}</Text>
                  <Text fontSize="sm">Size: {size}</Text>
                </Flex>

                <Divider
                  color="gray.800"
                  orientation={{
                    lg: "vertical",
                    md: "vertical",
                    base: "horizontal",
                  }}
                />
              </Grid>
              <Flex direction="column">
                <Text
                  mb="7"
                  fontSize="4xl"
                  color="gray.800"
                  fontWeight="extrabold"
                >
                  Your Bag
                </Text>

                <Text>{cartItems.length} item(s)</Text>
                <Flex my="4" direction="row" justifyContent="space-between">
                  <Text>Total Product Cost:</Text>
                  <Text>
                    ₹{" "}
                    {cartItems.reduce(
                      (acc, currVal) =>
                        acc + (currVal.qty || 1) * +currVal.price,
                      0
                    )}
                  </Text>
                </Flex>
                <Flex my="4" direction="row" justifyContent="space-between">
                  <Text>Total Delivery Cost: </Text>
                  <Text>FREE</Text>
                </Flex>

                <Divider color="gray.800" />
                <Flex my="4" direction="row" justifyContent="space-between">
                  <Text>Total Cost: </Text>
                  <Text>
                    ₹
                    {cartItems.reduce(
                      (acc, currVal) =>
                        acc + (currVal.qty || 1) * +currVal.price,
                      0
                    )}
                  </Text>
                </Flex>
              </Flex>
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button
              bgColor="gray.800"
              colorScheme="teal"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button as={RouterLink} to="/cart" variant="ghost">
              View Bag
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CartModal;
