import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import "./bootstrap.min.css";
import "./components/header/header.css";
import Home from "./pages/home/Home";
<<<<<<< HEAD
import Container from "react-bootstrap/Container";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

=======
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
>>>>>>> df0ee14 (fix)
import ProfileInfo from "./pages/profile/subProfile/profileInfo/ProfileInfo";
import Orders from "./pages/profile/subProfile/orders/Orders";
import CompletedOrders from "./pages/profile/subProfile/completedOrders/CompletedOrders";
import UserAddresses from "./pages/profile/subProfile/userAddresses/UserAddresses";
import Rating from "./pages/profile/subProfile/rating/Rating";
<<<<<<< HEAD
=======
import ProductPage from "./components/productPage/ProductPage";
import { Alert, Container } from "react-bootstrap";
import Message from "./components/message/Message";
>>>>>>> df0ee14 (fix)

function App() {
  return (
    <>
      <Header />
<<<<<<< HEAD

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profileinfo" element={<ProfileInfo />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/completedorders" element={<CompletedOrders />} />
        <Route path="/useraddresses" element={<UserAddresses />} />
        <Route path="/rating" element={<Rating />} />
      </Routes>

      <Footer />
=======
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profileinfo" element={<ProfileInfo />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/completedorders" element={<CompletedOrders />} />
          <Route path="/useraddresses" element={<UserAddresses />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/urunler/:slug" element={<ProductPage />} />
          <Route path="/urunler/:slug/:slug" element={<ProductPage />} />
          <Route
            path="*"
            element={<Message variant="danger" children="Sayfa Bulunamadı" />}
          />
        </Routes>
      </Container>
      <Footer id="footer" />
>>>>>>> df0ee14 (fix)
    </>
  );
}

export default App;
