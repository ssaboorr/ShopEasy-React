import { Flex, Box, Icon, Text } from "@chakra-ui/react";
import { MenuItem } from "./MenuItem";
import { Children, useState } from "react";
import ContentDrawer from "./ContentDrawer";

const Content = () => {
  const [show, setShow] = useState(false);

  return (
    <Flex
      marginTop="75px"
      py="5"
      as="header"
      //   bgColor="red.700"
      bgColor={{md:"gray.800",base:"gray.200",sm:"gray.200"}}
      display="flex"
      flexDirection="row"
      justifyContent="center"
      align="center"
    >
      <Box
        display={{ base: "block", md: "none", sm: "block" }}
        onClick={() => setShow(!show)}
        bgColor={{sm:"gray.200"}}
>
       <ContentDrawer/>
      </Box>
      <Box
        display={{ base: show ? "none" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
      >
     
        <MenuItem  url="/footwear">
          <Flex alignItems="center" justifyContent="center" m="2">
            Footwear
          </Flex>
        </MenuItem>
        <MenuItem  url="/phone">
          <Flex alignItems="center" justifyContent="center" m="2">
            Electronics
          </Flex>
        </MenuItem>
        <MenuItem url="/fashion">
          <Flex alignItems="center" justifyContent="center" m="2">
            Fashion
          </Flex>
        </MenuItem>
        <MenuItem color="gray.200" url="/">
          <Flex alignItems="center" justifyContent="center" m="2">
            Home and Kitchen
          </Flex>
        </MenuItem>
     
      </Box>
    </Flex>
  );
};

export default Content;
