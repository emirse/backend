import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import "./bootstrap.min.css";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ProfileInfo from "./pages/profile/subProfile/profileInfo/ProfileInfo";
import Orders from "./pages/profile/subProfile/orders/Orders";
import CompletedOrders from "./pages/profile/subProfile/completedOrders/CompletedOrders";
import UserAddresses from "./pages/profile/subProfile/userAddresses/UserAddresses";
import Rating from "./pages/profile/subProfile/rating/Rating";
import { Container } from "react-bootstrap";
import Message from "./components/message/Message";
import React from "react";

import CategoryPage from "./pages/productsPage/ProductsPage";
import Products from "./components/products/Products";
import ProductsPage from "./pages/productsPage/ProductsPage";
function App() {
  return (
    <>
      <Container
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
        fluid
        className="m-0 p-0"
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profileinfo" element={<ProfileInfo />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/completedorders" element={<CompletedOrders />} />
          <Route path="/useraddresses" element={<UserAddresses />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/urunler/:slug" element={<ProductsPage />} />
          <Route path="/urunler/:slug/:slug" element={<ProductsPage />} />
          <Route
            path="*"
            element={<Message variant="danger" children="Sayfa Bulunamadı" />}
          />
        </Routes>
        <Footer id="footer" />{" "}
      </Container>
    </>
  );
}

export default App;
