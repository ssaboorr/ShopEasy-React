import { Box, Button, Divider, Flex, Input, Grid } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import HomeBannerOne from "../components/banners/HomeBannerOne";
import HomeBannerTwo from "../components/banners/HomeBannerTwo";
import HomeBannerThree from "../components/banners/HomeBannerThree"
import HomeBannerFour from "../components/banners/HomeBannerFour"


import {
  Banner1,
  Banner2,
  Banner3,
  ImageBanner1,
} from "../components/ProductBanner";

const HomeScreen = () => {
  return (
    <>
      <Flex display="flex" direction="column" w="100%">
        <Box w="100%">
          <HomeBannerOne />
        </Box>
        <Box display="flex" justifyContent="flex-start" w="100%">
          <HomeBannerTwo />
        </Box>
        <Box >
          <Banner2 />
        </Box>
        <Box display="flex" justifyContent="center" w="100%">
          <HomeBannerThree />
        </Box>
        <Box>
          <Banner1 />
        </Box>
        <Box>
          <HomeBannerFour/>
        </Box>
      </Flex>
      {/* <Banner1 type="fashion" />
          <Divider />
          <Banner2 type="footwear" />
          <Divider />
          <Banner3 type="phone" /> */}
      {/* <ImageBanner1/> */}
    </>
  );
};

export default HomeScreen;
