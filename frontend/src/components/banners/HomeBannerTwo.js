import {
  Box,
  Heading,
  Divider,
  Flex,
  Text,
  Grid,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { Banner2 } from "../ProductBanner";

export const HomeBannerTwo = () => {
  return (
    <Flex p="4">
      <Box>
        <Heading as="h4" fontStyle='italic' fontSize="2xl" color="gray.700" my="5">
          Still Interested ?
        </Heading>
        <Box display="block">
          <Link
            my="2"
            mx="2"
            as={RouterLink}
            to={`/product/61ef190ce8da6f9fb6edf8d7`}
            color="gray.700"
          >
            UltraBoost
          </Link>
          <Link
            my="2"
            mx="2"
            as={RouterLink}
            to={`/product/61ef190ce8da6f9fb6edf8d6`}
            color="gray.700"

          >
            Terrex Free Hiker
          </Link>
          <Link
            my="2"
            mx="2"
            as={RouterLink}
            to={`/product/61ef190ce8da6f9fb6edf8d3`}
            color="gray.700"

          >
            Ozelia Boba
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default HomeBannerTwo;
