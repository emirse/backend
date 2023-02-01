import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { categoryAction } from "../../store/actions/categoryAction/categoryAction";
import Loader from "../loader/Loader";
import { logout } from "../../store/reducer/userReducer/authSlice";
import { userProfile } from "../../store/actions/userAction/profileAction";
import { Button } from "react-bootstrap";
import BadgeComp from "../badge/BadgeComp";
import { Link } from "react-router-dom";
function Header() {
  let { slug } = useParams;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  const {
    categories,
    loading: loadingCategory,
    success: successCategory,
  } = useSelector((state) => state.category);

  const [cardQuantitiy, setCardQuantitiy] = useState(5);
  useEffect(() => {
    if (!successCategory) {
      dispatch(categoryAction());
      dispatch(userProfile());
    }
    if (userInfo) {
    }
  }, [dispatch, navigate, categories, slug]);

  return (
    <Navbar
      className="d-none d-sm-block d-sm-none d-md-block "
      bg="dark"
      variant="dark"
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand href="/">E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {loadingCategory && <Loader></Loader>}
            {successCategory &&
              [categories].map((e) =>
                [e].map((b) =>
                  b.map((c, idx) => (
                    <NavDropdown
                      key={idx}
                      title={c.title}
                      id="collasible-nav-dropdown"
                    >
                      {c.children.map((a, index) => (
                        <NavDropdown.Item key={a.id} text="primary">
                          <Link
                            className="text-decoration-none text-light"
                            state={a.title}
                            key={a.id}
                            text="primary"
                            to={`/urunler/${c.slug}/${a.slug}`}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignContent: "center",
                                justifyContent: "space-between",

                                marginLeft: "10px",
                              }}
                            >
                              {" "}
                              <div> {a.title}</div>
                              <img
                                style={{ height: "30px", width: "30px" }}
                                src={`${a.image}`}
                              />
                            </div>
                          </Link>

                          <NavDropdown.Divider />
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  ))
                )
              )}
          </Nav>
          <BadgeComp cardQuantitiy={cardQuantitiy} />

          <Nav>
            {userInfo ? (
              <Nav>
                <NavDropdown title="Profil" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/profile">Profil</NavDropdown.Item>
                  <NavDropdown.Item href="/market">Marketim</NavDropdown.Item>
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
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Ara</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
