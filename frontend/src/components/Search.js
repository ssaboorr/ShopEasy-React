import { Button, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
// import { Link as RouterLink } from "react-router-dom";
import App from "../App";
import SearchScreen from "../screens/SearchScreen";

const SearchBar = () => {
    const [btn,setBtn] = useState(true)
  let searchQuery;

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
    searchQuery = e.target.elements.search.value;
    // console.log(searchQuery);
    e.target.elements.search.value = " ";
    // setQuery({ data: searchQuery });
  
  };

  return (
    <>
      <Flex>
        <form
          onSubmit={(e) => submitHandler(e)}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Input
            w="600px"
            placeholder="Search here..."
            bgColor="gray.100"
            name="search"
          />
          <Button

           colorScheme="teal" mx="3" type="submit">
            Search
          </Button>
        </form>
      </Flex>
    </>
  );
};

export default SearchBar;
