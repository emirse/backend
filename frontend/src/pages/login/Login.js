import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./login.css";
import { userLogin } from "../../store/actions/userAction/authActions";
import Message from "../../components/message/Message";
import Loader from "../../components/loader/Loader";
import FormContainer from "../../components/formContainer/FormContainer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo, error, success, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo, success, loading]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin({ email, password }));
  };

  return (
    <FormContainer param={submitHandler}>
      {error && <Message variant="danger">{error}</Message>}

      {loading && <Loader></Loader>}
      <Form.Group className="mt-3" controlId="email">
        <Form.Label>Email Adresi</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email adresinizi giriniz"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="password" className="mt-3">
        <Form.Label>Parola</Form.Label>
        <Form.Control
          type="password"
          placeholder="Şifrenizi giriniz"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Button
        type="submit"
        variant="warning"
        className="login-register-btn mt-3"
      >
        {" "}
        Giriş Yap
      </Button>
      <div className="services-btn">
        <Button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            fontWeight: "bold",
          }}
          className="login-register-btn "
          variant="primary"
          type="submit"
        >
          <i style={{ color: "blue" }} className="fa-brands fa-google"></i>
          <small>ile Giriş Yap</small>
        </Button>
        <Button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            fontWeight: "bold",
          }}
          className="login-register-btn"
          variant="primary"
          type="submit"
        >
          <i style={{ color: "blue" }} className="fa-brands fa-facebook"></i>
          <small>ile Giriş Yap</small>
        </Button>
      </div>
    </FormContainer>
  );
}

export default Login;
