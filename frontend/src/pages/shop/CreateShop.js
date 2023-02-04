import React, { useEffect, useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import FormContainer from "../../components/formContainer/FormContainer";
import Message from "../../components/message/Message";
import { createShopAction } from "../../store/actions/shopAction/createShopAction";
import { getShopAction } from "../../store/actions/shopAction/getShopAction";
import { userRegister } from "../../store/actions/userAction/registerAction";

function CreateShop() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [shop_name, setShopName] = useState("");
  const [check, setCheck] = useState();
  const { error, success, loading } = useSelector((state) => state.createShop);
  const location = useLocation();
  const {
    error: shopError,
    success: successError,
    loading: loadingError,
    shop,
  } = useSelector((state) => state.getShop);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createShopAction({
        shop_name: shop_name,
      })
    );
  };

  return (
    <Container>
      {shop !== undefined && shop.status === "draft" ? (
        <Container>
          <Message children={"Başvurunuz Değerlendiriliyor"}></Message>
        </Container>
      ) : (
        <FormContainer param={submitHandler}>
          <Form.Group controlId="shop_name">
            {error && <Message variant="danger">{error}</Message>}

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
          <Form.Group controlId="term">
            <Form.Label>Hizmet Şartları – Gizlilik ve Şartlar</Form.Label>
            <Form.Check
              label="Hizmet Şartları ve Gizlilik Sözleşmesini Kabul Ediyorum"
              name="term"
              type="switch"
              id={`inline-checkbox-1`}
              onChange={(e) => {
                setCheck(e.target.checked);
              }}
            />
          </Form.Group>

          <Button
            className="login-register-btn mt-3"
            variant="primary"
            type="submit"
            disabled={!check}
          >
            Market Oluştur
          </Button>
        </FormContainer>
      )}
    </Container>
  );
}

export default CreateShop;
