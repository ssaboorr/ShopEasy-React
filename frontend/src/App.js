import { Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Content from "./components/Header/ContentHeader";

import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import ProductDisplayScreen from "./screens/ProductDisplayScreen";
import SearchScreen from "./screens/SearchScreen";
import CartScreen from "./screens/CartScreen"

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Flex as="main" mt="0px" minH="xl" bgColor="gray.200">
        <Routes>
          <Route path="/" element={<HomeScreen />} />

          <Route path="/product/:id" element={<ProductScreen />} />

          <Route
            path="/men"
            element={
              <ProductDisplayScreen type="casuals" category="Mens Originals" />
            }
          />
          <Route
            path="/women"
            element={
              <ProductDisplayScreen type="casuals" category="Women Originals" />
            }
          />
          <Route
            path="/kids"
            element={
              <ProductDisplayScreen type="casuals" category="Kids Originals" />
            }
          />
          <Route
            path="/sports"
            element={<ProductDisplayScreen  />}
          />

          <Route
            path="/casuals"
            element={<ProductDisplayScreen type="casuals" />}
          />

          <Route path="/search-result" element={<SearchScreen  />} />
          <Route path="/cart/:id" element={<CartScreen/>} />
          <Route path="/cart" element={<CartScreen/>} />

        </Routes>
      </Flex>
      <Footer />
    </div>
  );
};

export default App;
