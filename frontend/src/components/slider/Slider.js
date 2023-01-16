import React from "react";
import { Carousel, Image } from "react-bootstrap";

function Slider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image width={1500} src="/assets/images/goz.jpg" fluid rounded></Image>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image width={1500} src="/assets/images/goz.jpg" fluid rounded></Image>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image width={1500} src="/assets/images/goz.jpg" fluid rounded></Image>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
