import { Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";

import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import ProductDisplayScreen from "./screens/ProductDisplayScreen";
import SearchScreen from "./screens/SearchScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceorderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";

const App = () => {
  return (
    <div>
      <Header />
      <Flex
        as="main"
        mt={{ lg: "85px", md: "85px", base: "175px" }}
        minH="xl"
        bgColor="gray.200"
      >
        <Routes>
          <Route path="/" element={<HomeScreen />} />

          <Route path="/product/:id" element={<ProductScreen />} />

          <Route path="/men" element={<ProductDisplayScreen gender="men" />} />
          <Route
            path="/women"
            element={<ProductDisplayScreen gender="women" />}
          />
          <Route
            path="/kids"
            element={<ProductDisplayScreen gender="kids" />}
          />

          <Route path="/search-result" element={<SearchScreen />} />
          <Route path="/cart/:id" element={<CartScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/shipping" element={<ShippingScreen />} />
          <Route path="/payments" element={<PaymentScreen />} />

          <Route path="/placeorder" element={<PlaceOrderScreen />} />
          <Route path="/orders/:id" element={<OrderScreen />} />
          <Route path="/admin/userlist" element={<UserListScreen />} />
          <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
          <Route path="/admin/productlist" element={<ProductListScreen />} />
        </Routes>
      </Flex>
      <Footer />
    </div>
  );
};

export default App;
