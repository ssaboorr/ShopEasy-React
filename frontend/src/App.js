import { Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Content from "./components/Header/ContentHeader";

import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import ProductDisplayScreen from "./screens/ProductDisplayScreen";

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Flex as="main" mt="0px" minH="xl" p="6" bgColor="gray.200">
        <Routes>
          <Route path="/" element={<HomeScreen />} />

          <Route
            path="/product/footwear/:id"
            element={<ProductScreen type="footwear" />}
          />
          <Route
            path="/product/fashion/:id"
            element={<ProductScreen type="fashion" />}
          />
          <Route
            path="/product/phone/:id"
            element={<ProductScreen type="phone" />}
          />
          <Route path="/product/:id" element={<ProductScreen />} />

          <Route
            path="/footwear"
            element={<ProductDisplayScreen type="footwear" />}
          />
          <Route
            path="/fashion"
            element={<ProductDisplayScreen type="fashion" />}
          />
          <Route
            path="/phone"
            element={<ProductDisplayScreen type="phone" />}
          />
        </Routes>
      </Flex>
      <Footer />
    </div>
  );
};

export default App;
