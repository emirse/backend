import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import FormContainer from "../../../../components/formContainer/FormContainer";
import Message from "../../../../components/message/Message";
import { userProfile } from "../../../../store/actions/userAction/profileAction";
import { userUpdateProfile } from "../../../../store/actions/userAction/userProfileUpdateAction";

function ProfileInfo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo, success } = useSelector((state) => state.auth);
  const { userDetails, loading, error, success: successProfile } = useSelector(
    (state) => state.profile
  );
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = useSelector((state) => state.updateProfile);
  console.log(error);
  const [first_name, setName] = useState();
  const [last_name, setlastname] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!userDetails) {
        dispatch(userProfile());
      } else if (error) {
        navigate("/login");
      }
    }
  }, [userInfo, dispatch, userDetails, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      userUpdateProfile([
        {
          id: userDetails.id,
          first_name: first_name,
          last_name: last_name,
          email: userDetails.email,
          username: "",
        },
        userInfo.token,
      ])
    );
  };

  return (
    <Container>
      <Row>
        <FormContainer param={submitHandler}>
          {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
          {successUpdate && (
            <Message variant="primary">{successUpdate}</Message>
          )}

          {[userDetails].map((userDetail, idx) => (
            <Container
              key={idx}
              className="d-flex flex-column align-items-center"
            >
              <h1>Kullanıcı Bilgilerim</h1>
              <Form.Group controlId="first_name">
                <Form.Label>İsim</Form.Label>
                <Form.Control
                  name="first_name"
                  type="text"
                  value={first_name}
                  placeholder={userDetail.first_name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="last_name">
                <Form.Label>Soyisim</Form.Label>
                <Form.Control
                  name="last_name"
                  type="text"
                  value={last_name}
                  placeholder={userDetail.last_name}
                  onChange={(e) => setlastname(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email Adresi</Form.Label>
                <Form.Control
                  disabled
                  name="email"
                  type="email"
                  value={email}
                  placeholder={userDetail.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Button
                className="login-register-btn mt-3"
                variant="primary"
                type="submit"
              >
                Güncelle
              </Button>
            </Container>
          ))}
        </FormContainer>
      </Row>
    </Container>
  );
}

export default ProfileInfo;
