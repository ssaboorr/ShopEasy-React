import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Products from "../components/Products";
import axios from "axios";
import { Banner1 } from "../components/ProductBanner";
const HomeScreen = () => {
  return (
    <>
      <Flex display="flex" flexDirection="column" wrap="wrap">
        <Flex
          p="5"
          m="5"
          display="flex"
          direction="column"
          justify="flex-start"
        >
          <Banner1 type="fashion" />
        </Flex>
      </Flex>
    </>
  );
};

export default HomeScreen;
