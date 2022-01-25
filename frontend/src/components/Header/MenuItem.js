import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

export const MenuItem = ({ children, url }) => {
  return (
    <Link
      as={RouterLink}
      to={url}
      fontSize="sm"
      letterSpacing="wide"
      color="gray.200"
      // fontWeight="bold"
      textTransform="uppercase"
      m="2"
      display="block"
      _hover={{ color: "whiteAlpha.500" }}
      mt={{ base: "4", md: "0" }}
    >
      {children}
    </Link>
  );
};




