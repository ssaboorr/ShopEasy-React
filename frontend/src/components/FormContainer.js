import { Flex } from "@chakra-ui/react";

const FormContainer = ({ children, width = "xl" }) => {
  return (
    <Flex
      p="5"
      direction="column"
      boxShadow="lg"
      rounded="md"
      bgColor="white"
      width={width}
    >
      {children}
    </Flex>
  );
};

export default FormContainer;
