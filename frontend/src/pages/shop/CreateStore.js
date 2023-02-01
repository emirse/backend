import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import FormContainer from "../../components/formContainer/FormContainer";
import Message from "../../components/message/Message";
import { userRegister } from "../../store/actions/userAction/registerAction";

function CreateStore() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [shop_name, setShopName] = useState("");
  const [keywords, setKeywords] = useState("");
  const [description, setDescription] = useState("");
  const [shopImage, setShopImage] = useState("");
  const [term, setTerm] = useState();
  const { error, success, loading } = useSelector((state) => state.register);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userRegister({ shop_name, keywords, description, shopImage }));
  };

  return (
    <FormContainer param={submitHandler}>
      {error && <Message variant="danger">{error}</Message>}
      <Form.Group controlId="shop_name">
        <Form.Label>Market İsmi</Form.Label>
        <Form.Control
          name="shop_name"
          type="text"
          required
          value={shop_name}
          placeholder="Ad"
          onChange={(e) => setShopName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="keywords">
        <Form.Label>Anahtar Kelimeler</Form.Label>
        <Form.Control
          name="keywords"
          type="text"
          required
          value={keywords}
          placeholder="Anahtar Kelimeler"
          onChange={(e) => setKeywords(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Hakkında</Form.Label>
        <Form.Control
          name="text"
          type="text"
          required
          value={description}
          placeholder="Hakkında"
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="shopImg">
        <Form.Label>Market Resmi</Form.Label>
        <Form.Control
          name="shopImg"
          type="file"
          required
          value={shopImage}
          placeholder="Şifre"
          onChange={(e) => setShopImage(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="term">
        <Form.Label>Hizmet Şartları – Gizlilik ve Şartlar</Form.Label>
        <Form.Check
          label="Hizmet Şartları ve Gizlilik Sözleşmesini Kabul Ediyorum"
          name="term"
          type="switch"
          id={`inline-checkbox-1`}
          onChange={(e) => {
            setTerm(e.target.checked);
          }}
        />
      </Form.Group>

      <Button
        className="login-register-btn mt-3"
        variant="primary"
        type="submit"
      >
        Kayıt Ol
      </Button>
    </FormContainer>
  );
}

export default CreateStore;
