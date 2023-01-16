import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import FormContainer from "../../../../components/formContainer/FormContainer";
import Loader from "../../../../components/loader/Loader";
import Message from "../../../../components/message/Message";
import { categoryAction } from "../../../../store/actions/categoryAction/categoryAction";
import { userProfile } from "../../../../store/actions/userAction/profileAction";
<<<<<<< HEAD

import "./profileinfo.css";
function ProfileInfo() {
  const [name, setName] = useState("");
  const [lastname, setlastname] = useState("");
=======
import { userUpdateProfile } from "../../../../store/actions/userAction/userProfileUpdateAction";

import "./profileinfo.css";
function ProfileInfo() {
  const [first_name, setName] = useState("");
  const [last_name, setlastname] = useState("");
>>>>>>> df0ee14 (fix)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
<<<<<<< HEAD
  const { userInfo } = useSelector((state) => state.auth);
  const [cardQuantitiy, setCardQuantitiy] = useState(0);

  const { userDetails, loading, error } = useSelector((state) => state.profile);

=======
  const { userInfo, success } = useSelector((state) => state.auth);
  const { userDetails, loading, error } = useSelector((state) => state.profile);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = useSelector((state) => state.updateProfile);
>>>>>>> df0ee14 (fix)
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
<<<<<<< HEAD
      if (!userDetails || userDetails.id !== userInfo.id) {
        dispatch(userProfile());
      }
    }
  }, [userDetails, loading]);

  const submitHandler = (e) => {};

  return (
    <FormContainer param={submitHandler}>
=======
      if (!userDetails || !userDetails.first_name) {
        dispatch(userProfile(userInfo.token));
      }
    }
  }, [userInfo, dispatch, userDetails, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Parolalar Aynı Değil");
    } else {
      dispatch(
        userUpdateProfile([
          {
            id: userDetails.id,
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
          },
          userInfo.token,
        ])
      );
    }
  };

  return (
    <FormContainer param={submitHandler}>
      {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
      {successUpdate && <Message variant="primary">{successUpdate}</Message>}

>>>>>>> df0ee14 (fix)
      {[userDetails].map((userDetail, idx) => (
        <div key={idx} className="profile-style">
          <h1>Profilim</h1>

          <Form.Group controlId="first_name">
            <Form.Label>İsim</Form.Label>
            <Form.Control
              name="first_name"
              type="text"
<<<<<<< HEAD
              required
              value={name}
              placeholder={userDetail.name}
=======
              value={first_name}
              placeholder={userDetail.first_name}
>>>>>>> df0ee14 (fix)
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="last_name">
            <Form.Label>Soyisim</Form.Label>
            <Form.Control
              name="last_name"
              type="text"
<<<<<<< HEAD
              required
              value={lastname}
=======
              value={last_name}
>>>>>>> df0ee14 (fix)
              placeholder={userDetail.last_name}
              onChange={(e) => setlastname(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email Adresi</Form.Label>
            <Form.Control
              name="email"
              type="email"
<<<<<<< HEAD
              required
=======
>>>>>>> df0ee14 (fix)
              value={email}
              placeholder={userDetail.email}
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
<<<<<<< HEAD
            onClick={() => userProfile}
=======
>>>>>>> df0ee14 (fix)
            className="login-register-btn mt-3"
            variant="primary"
            type="submit"
          >
            Güncelle
          </Button>
        </div>
      ))}
    </FormContainer>
  );
}

export default ProfileInfo;
