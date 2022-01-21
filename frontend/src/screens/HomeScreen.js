import { Box, Divider, Flex, Heading } from "@chakra-ui/react";

import { Banner1,Banner2,Banner3,ImageBanner1 } from "../components/ProductBanner";
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
          <Divider/>
          <Banner2 type="footwear" />
          <Divider/>
          <Banner3 type="phone"/>
          {/* <ImageBanner1/> */}

        </Flex>
      </Flex>
    </>
  );
};

export default HomeScreen;
