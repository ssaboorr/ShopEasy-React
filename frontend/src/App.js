import {  Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <div>
      <Header />
      <Flex as="main" mt="80px" minH="xl" p="6" bgColor="gray.200">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
        </Routes>
      </Flex>
      <Footer />
    </div>
  );
};

export default App;
