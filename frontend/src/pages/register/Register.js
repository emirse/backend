<<<<<<< HEAD
import React, { useState } from "react";
import { useDispatch } from "react-redux";
=======
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
>>>>>>> df0ee14 (fix)
import { Button, Form } from "react-bootstrap";

import { userRegister } from "../../store/actions/userAction/registerAction";
import FormContainer from "../../components/formContainer/FormContainer";
import { useNavigate } from "react-router";
<<<<<<< HEAD
=======
import Message from "../../components/message/Message";
>>>>>>> df0ee14 (fix)

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

<<<<<<< HEAD
  const [name, setName] = useState("");
=======
  const [first_name, setName] = useState("");
>>>>>>> df0ee14 (fix)
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
<<<<<<< HEAD

=======
  const { error, success, loading } = useSelector((state) => state.register);
  console.log(error, success, loading);
>>>>>>> df0ee14 (fix)
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Parola Eşleşmedi");
    } else {
<<<<<<< HEAD
      dispatch(userRegister({ name, lastname, email, password }));
      navigate("/");
    }
  };

  return (
    <FormContainer param={submitHandler}>
=======
      dispatch(userRegister({ first_name, lastname, email, password }));
    }
  };
  useEffect(() => {
    success ? navigate("/") : navigate("/register");
  }, [error, success, loading]);

  return (
    <FormContainer param={submitHandler}>
      {error && <Message variant="danger">{error}</Message>}
>>>>>>> df0ee14 (fix)
      <Form.Group controlId="first_name">
        <Form.Label>İsim</Form.Label>
        <Form.Control
          name="first_name"
          type="text"
          required
<<<<<<< HEAD
          value={name}
=======
          value={first_name}
>>>>>>> df0ee14 (fix)
          placeholder="Ad"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="last_name">
        <Form.Label>Soyisim</Form.Label>
        <Form.Control
          name="last_name"
          type="text"
          required
          value={lastname}
          placeholder="Soyad"
          onChange={(e) => setlastname(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email Adresi</Form.Label>
        <Form.Control
          name="email"
          type="email"
          required
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Şifre</Form.Label>
        <Form.Control
          name="password"
          type="password"
          required
          value={password}
          placeholder="Şifre"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Şifre Tekrarı</Form.Label>
        <Form.Control
          name="confirmPassword"
          type="password"
          required
          value={confirmPassword}
          placeholder="Şifre Tekrarı"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Group>
      {message}

      <Button
        className="login-register-btn mt-3"
        variant="primary"
        type="submit"
      >
        Kayıt Ol
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
          <small>ile Kayıt Ol</small>
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
          <small>ile Kayıt Ol</small>
        </Button>
      </div>
    </FormContainer>
  );
}

export default Register;
