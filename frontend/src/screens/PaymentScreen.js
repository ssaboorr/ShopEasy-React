import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  HStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../actions/cartActions";

const PaymentScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);

  const { shippingAddress, paymentMethod } = cart;

  const [paymentMethodRadio, setpatmentMethodRadio] = useState(
    paymentMethod || "paypal"
  );

  if (!shippingAddress) {
    navigate("/shipping");
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethodRadio));
    navigate("/placeorder");
  };
  return (
    <Flex w="full" alignItems="center" justifyContent="center" py="5">
      <FormContainer>
        <CheckoutSteps step1 step2 step3 />

        <Heading as="h1" mb="8" fontSize="3xl">
          Payment Method
        </Heading>
        <form onSubmit={submitHandler}>
          <FormControl as="filedset">
            <FormLabel as="legend">Select Method</FormLabel>
            <RadioGroup defaultValue={paymentMethodRadio}>
              <HStack spacing="24px">
                <Radio
                  value="paypal"
                  onChange={(e) => setpatmentMethodRadio(e.target.value)}
                >
                  Payment or Credit/Debit Card
                </Radio>
                <Radio
                  value="cod"
                  onChange={(e) => setpatmentMethodRadio(e.target.value)}
                >
                  Cash On delivery
                </Radio>
              </HStack>
            </RadioGroup>
          </FormControl>

          <Button type="submit" mt="4" colorScheme="teal">
            Continue
          </Button>
        </form>
      </FormContainer>
    </Flex>
  );
};

export default PaymentScreen;
