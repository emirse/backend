import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
<<<<<<< HEAD
import { batch, useDispatch, useSelector } from "react-redux";
import { json, useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { addUser, logout } from "../../store/reducer/authReducer/authSlice";
import "./header.css";
import { userProfile } from "../../store/actions/userAction/profileAction";
import { Button } from "react-bootstrap";
import { categoryAction } from "../../store/actions/categoryAction/categoryAction";
import Loader from "../loader/Loader";
import Image from "react-bootstrap/Image";
function Header() {
=======
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "./header.css";
import { categoryAction } from "../../store/actions/categoryAction/categoryAction";
import Loader from "../loader/Loader";
import { logout } from "../../store/reducer/userReducer/authSlice";
function Header() {
  let { slug } = useParams;
>>>>>>> df0ee14 (fix)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const {
    categories,
    loading: loadingCategory,
    success,
  } = useSelector((state) => state.category);

<<<<<<< HEAD
  /* category çekiyor
  [categories].map((e, index) => e.map((b) => [b].map((c) => c.children)))
  
  */
  const [cardQuantitiy, setCardQuantitiy] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userProfile());
  };
=======
  const [cardQuantitiy, setCardQuantitiy] = useState(5);
>>>>>>> df0ee14 (fix)

  useEffect(() => {
    if (!success) {
      dispatch(categoryAction());
    }
<<<<<<< HEAD
  }, [dispatch, navigate, categories]);
=======
  }, [dispatch, navigate, categories, slug]);
>>>>>>> df0ee14 (fix)

  return (
    <Navbar
      className="navbar-size"
      collapseOnSelect
      expand="lg"
      variant="light"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Logo</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            {loadingCategory && <Loader></Loader>}
            {success &&
              [categories].map((e) =>
                [e].map((b) =>
                  b.map((c, idx) => (
                    <NavDropdown
                      key={idx}
                      title={c.title}
                      id="collasible-nav-dropdown"
                    >
                      {c.children.map((a, index) => (
                        <NavDropdown.Item
                          key={a.id}
<<<<<<< HEAD
                          href={`${c.slug}/${a.slug}`}
                          className="alignment-element-img-title"
                        >
                          {a.title}
                          <img
                            className="img-setting"
                            fluid
                            src={`${a.image}`}
                          ></img>
=======
                          href={`/urunler/${c.slug}/${a.slug}`}
                          className="alignment-element-img-title"
                        >
                          {a.title}
                          <img className="img-setting" src={`${a.image}`}></img>
>>>>>>> df0ee14 (fix)
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  ))
                )
              )}
          </Nav>

          <Nav>
            {cardQuantitiy !== 0 ? (
              <i className="fa-solid fa-cart-shopping shopping-cart">
                <div className="circle-main">
                  <div className="shopping-count">{cardQuantitiy}</div>
                </div>
              </i>
            ) : (
              <i className="fa-solid fa-cart-shopping shopping-cart"></i>
            )}

            {userInfo ? (
              <Nav>
                <NavDropdown title="Profil" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/profileinfo">
                    Profil
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/orders">Siparişler</NavDropdown.Item>
                  <NavDropdown.Item href="/completedorders">
                    Geçmiş Siparişler
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/useraddresses">
                    Adreslerim
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/profileinfo">
                    Separated link
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/rating">
                    Değerlendirmelerim
                  </NavDropdown.Item>
                </NavDropdown>

                <LinkContainer to="/">
                  <Nav.Link onClick={() => dispatch(logout())}> Çıkış</Nav.Link>
                </LinkContainer>
              </Nav>
            ) : (
              <Nav>
                <LinkContainer to="login">
                  <Nav.Link>Giriş Yap</Nav.Link>
                </LinkContainer>
                <LinkContainer to="register">
                  <Nav.Link>Kayıt Ol</Nav.Link>
                </LinkContainer>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
