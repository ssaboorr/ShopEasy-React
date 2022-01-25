import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";

const MenuContent = ({ path, category1,category2, product_image, type }) => {
  return (
    <>
      <Menu>
        <MenuButton
          _hover={{ color: "gray.600" }}
          bgColor="gray.800"
          as={Button}
        >
          Your Cats
        </MenuButton>
        <MenuList>
          <MenuItem minH="48px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src={product_image}
              alt="Fluffybuns the destroyer"
              mr="12px"
            />
            <Link as={RouterLink} to={path} color="gray.800">
              {category1}
            </Link>
          </MenuItem>
          <MenuItem minH="40px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src={product_image}
              alt="Simon the pensive"
              mr="12px"
            />
            <Link color="gray.800">{category2}</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default MenuContent;
