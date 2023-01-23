import React from "react";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import "./slider.css";
function Slider() {
  return (
    <Container>
      <Row>
        <Carousel className="mt-3 mb-3">
          <Carousel.Item interval={2000}>
            <Image
              className="d-block w-100 fluid "
              src="https://img.freepik.com/free-photo/groceries-packages-delivery-covid-quarantine-shopping-concept-courier-with-food-package-brin_1258-85136.jpg?w=2000&t=st=1674345474~exp=1674346074~hmac=019bfcc7aebb31c3e4204c5aa58c2db6681fc87d308b0f681683b0c8ba592861"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>ŞOK ŞOK FIRSATLAR</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <Image
              className="d-block w-100 fluid"
              src="https://img.freepik.com/free-photo/supermarket-banner-concept-with-ingredients_23-2149421125.jpg?w=740&t=st=1674345579~exp=1674346179~hmac=b25522bec992f54376c856499388d2697715b3bb749a4939a35ef69a1800a2dc"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100 fluid"
              src="https://img.freepik.com/free-vector/flat-supermarket-social-media-cover-template_23-2149376445.jpg?w=826&t=st=1674344065~exp=1674344665~hmac=a07bd55b9d20ee5496f315e839e08090dbe6f640ed4e893e5e6cbb887ec40b39"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
}

export default Slider;
