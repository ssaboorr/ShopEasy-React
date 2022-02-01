import { Flex } from "@chakra-ui/react";
import { useParams, useSearchParams } from "react-router-dom";
const CartScreen = () => {
  const { id } = useParams();
  let [searchParams] = useSearchParams();
  let qty = searchParams.get("gty");
  return (
    <Flex mt="100px">
      <h1>Card</h1>
    </Flex>
  );
};


export default CartScreen;