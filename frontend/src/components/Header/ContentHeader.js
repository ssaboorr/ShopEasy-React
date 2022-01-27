import { Flex, Box, Icon, Text, Button } from "@chakra-ui/react";
import { MenuItem } from "./MenuItem";
import { useState } from "react";
import ContentDrawer from "./ContentDrawer";
import { Link as RouterLink, useParams } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";

const Content = () => {
  const [show, setShow] = useState(false);

  return (
    <Flex
      marginTop="75px"
      py="5"
      as="header"
      //   bgColor="red.700"
      bgColor={{ md: "gray.800", base: "gray.200", sm: "gray.200" }}
      display="flex"
      flexDirection="row"
      justifyContent="center"
      align="center"
    >
      <Box
        display={{ base: "block", md: "none", sm: "block" }}
        onClick={() => setShow(!show)}
        bgColor={{ sm: "gray.200" }}
      >
        <Flex display="flex" flexDirecion="row" align="center" gap="155px" justify="space-between">

          <Box>
            <Button my="2" marginRight="10" as={RouterLink} to="/">
              <Icon w="4" h="4" as={BsArrowLeftCircle} />
            </Button>
          </Box>

          <Box>
            <ContentDrawer />
          </Box>
        </Flex>
      </Box>
      <Box
        display={{ base: show ? "none" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
      >
        <MenuItem url="/men">
          <Flex alignItems="center" justifyContent="center" m="2">
            <Text fontWeight="bold">Men</Text>
          </Flex>
        </MenuItem>
        <MenuItem url="/women">
          <Flex alignItems="center" justifyContent="center" m="2">
            <Text fontWeight="bold">Women</Text>
          </Flex>
        </MenuItem>
        <MenuItem url="/kids">
          <Flex alignItems="center" justifyContent="center" m="2">
            <Text fontWeight="bold">Kids</Text>
          </Flex>
        </MenuItem>
        <MenuItem url="/sports">
          <Flex alignItems="center" justifyContent="center" m="2">
            Sports
          </Flex>
        </MenuItem>{" "}
        <MenuItem url="/casuals">
          <Flex alignItems="center" justifyContent="center" m="2">
            Casuals
          </Flex>
        </MenuItem>{" "}
        <MenuItem url="/kids">
          <Flex alignItems="center" justifyContent="center" m="2">
            Deals
          </Flex>
        </MenuItem>
      </Box>
    </Flex>
  );
};

export default Content;
