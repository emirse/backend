import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Comment from "../../components/comment/Comment";
import Navs from "../../components/navs/Navs";
import Products from "../../components/products/Products";
import RatingComp from "../../components/ratingComp/RatingComp";

function ProductDetailPage() {
  return (
    <Container className="my-5">
      <Row>
        <Col xs={12} md={6}>
          <Container>
            <Row>
              <Image
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEQDhIQDxATEA8PEA8QDQ8REA8NEBAPFREWGBUSFhUYHCggGBomGx8TIzEhJikrLi4vGCIzOD8xNygtLjcBCgoKDg0OFxAQGDcgHR4rLS0tLTctLSstLy0tKy0tLTUtLS0tLSsrLSsvLS8tLS0rLSstLS0tLSsrLS0rKy0tLf/AABEIAKgBLAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcCBAUDAf/EAE4QAAIBAgIDCQgLDgcAAAAAAAABAgMRBAUSITEGExQiQVFhkbIHMjVicXOBwUJTcnSEkqGxs9HSFRYXIyUzUlRVgpOUotMkQ0VjtPDx/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBAIFBv/EAC4RAQACAQIFAgUCBwAAAAAAAAABAhEDMQQhMoGxElETQVKRoWFxBRQiM0LB8P/aAAwDAQACEQMRAD8AugkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACPZtnElKajNU6dNyUp8VNuPfNt6oxWvqNWno1xmw5eWboIYm/B8XGrouz0K7lZ9NkWRXTnaB0d+qctSflVSTJ+HT2EUzrdBjamMeCwNbe3ShGpi8TVcqqpqV9CEIX40nZvXqsjmdOJn01hMQ5GeYjOKGGqVaOb1a9WmlKNFYTDx01pLSttepXdteywvw0xWZjn2MIP+EHdB+sV/5al/bMuL/T+EMvwg5/+tV/5Wn/AGycW9vwOhue3XZ/isTClPGVqNN3dSq8LQtCKTfLBXu7Lbynenp2vbGMdjCarG5xQvUp5lHGOOvg9fC0qUaiW2KnB3i+Yvtws45c/wAJwsHcrnkMwwVLFU04qqnpwe2FSLtOD8jTMUxhDrEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAV1usymeMweJoU5aM5XcW3ZNqrfRfQ7WZvtX1UwIt3PdyuJw2JnWrqFNOCgqcJaV7O+k/V5Wc6dJicyiIwsSrTcVK9+NGUld31W5OY6pets4+TqYwr7DSqPNMxjTi5N1cNd7ElvC2vkW0s0Z/qt2IdZYRLXWq6/wBGGr+p/UaOcusDq4ePsL9MpSl67E+mU4Y8Noe1x+VD0SYZLg89jlTfiycl1SuRi0GHyeHqx105KrHo1TX7vL6B6vdDu9xx/kufv3G6ub8bsPI1d/v5lwnJWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABWu7KpiFgcVwS+/tTUNDv7KpeWj42jexvtn0ct8CHdy14x4ipvm/uhorXX3y++X9jp69l7+gr0s5n2IytStHiy59FxXp2Iu5JVi8c6eYZir20quHb/l4lvDVza/bwmrNyr1NcadSS51CTXWbM1hZFbTtDVxFDErW6NW3OqcmvkQi1fdM0tG8Ofw5327Np1hy9qWYPnIwl1cDmzTWs5mkSYTjuOT0ssqPnx2NfXUPC1er7+ZVSnJWgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBDYvSvfllN/1M9Ou0DKnTS2OS/el9ZI9bdLflbfzkCs+Exp5nmDaWlvmGs2k2v8ADx2cx1oRMzft4beEiMTMtz7su+0umjbEtrD5v0lc0dxhsYinQxKtWgpPkn3tReSS1+oiLWpsi+hW+8Ihn+Rzwv4yDdSg3bTtxoN7FNevZ5DXp6sX/dg1dCdP9nNoYktwqW33EpXymXvvFPrmfPa3V9/MqJ3T8qQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAhVJ7fdS7TPTjYeqZIyctQFN5/X0czxvTOh9BAs4Xe/bw06FsRLUWM6TTML41EhyrLK1RKTapRexzbUmudRWvrsZ9TUiF9LTKQYfKJpcWtCT5mpR+XWZ51o+cNNbT82wlKN6daGqSalF2lGcXtXM0TW0TzrLuYi8K93QZbwXEOCu6clp0W9fEb2N86erqfKenpX9dcvJ1dP4dsLU7h3gl++sR2zwNbq+/ljndYRSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAITfjT85U7bPSr0wM0zoZRTepJt8yV2RM43FJ7rG1mmMT1PTo35P8iBbwm9+3hZScQ+ZHTV3VmrqDtBPY57b+jV19Bqtsv0ozzlIqGYtvWzLqVbqWdnBY7pMN64Xu9RqRqw0Jcux8sXzorrM1nMG3OET3b4XSwum+/w1VJvxZvRkuvQfoPV4W3PHup4uuaRZMO4b4G+F4rtI8nW6p7+ZeNO6wSpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQdvjT85U7bPSr0wMkzodLJKqjOV9rjq9a/7zGfiIn0wKI3dO+c45/wC7S+hgaeB2t28OoeWCqWoRXjSv5b/+G+Y5L6W5NqhVKLQ1Us6+DrmTUq1VlIssxGtGeKLIeG6yaeHxXuYfGvD1m7hoxMK9f+1P/fNI+4b4G+F4n50eZrdU9/MvDndYJUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINLv5+cqdtnpV6YBM6GSlzESKX3Vq+aYz3dH6CBZwu9+3h1GzRw07Xi+V3XlNtZ+SYnDao1LMrtC/Tu6uEqGe0N1LJJl1RQjvk9UV1t8iXScRRoizmbqsbbCWl3+JqrV4sXpN+S+gvSa9KuJUcZfFIr7p53DfA3wvFdpHia3V9/MvGndYJUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBZ9/PzlTts9KvTAXOguBUO6GnpZljPd0PoIFnC737eF+lT1RLnSoGmYJ03tSTW1X+cnKYo6WFraOyCv0ttdRz6MtVJmHUwsZVHpVJWhBNu/FhCK2vo8pMUiGmnvKM57mfCK94/mqa0KKeri31y8revq5juIebr63xL5jb5Li7hvgZe+sT2keBrdU9/MsywSoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACB1Hx5+cqdtnpV2gfLnQNgV1Uwiq5jjldaenh7RutJrg8di5S7g4iZv28PT4CtbRaszzY1cokuQ1zVqvwzCOVy5h6ZV/Al7VMNToLSxE401yJ65y9zFa2MRBaKacZvOEezrPXWW9Uk6dDlXs6luWVti8Ujd5+vxM6n9NeVfLlwR1EM69e4b4GXvrFdpHz2t1T38yhYJUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAqvfz85U7bPSr0wMToGBVub4dzzDGtLZPD/8eB1w3Vft4cy1vujiaeqNaolzOTkl6JXsbIldXiNWu1pa2IznFSVniKlvFlvfyxsdc024jVtvaXLlFtuTu5Pa222/K3tJwp/VlGmdRUbFKi2W1oLt7h6/I/wvFdpHzOv1z38ylYBSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAq3fz85U7bPSr0wMTofGBUO6bGVKOa4l05NX3jSi9cZfiY7VykaXVbs5s8VnVOf52m4v9KHGj1PWvlNVb43cm+UJbKsV7rSh86NNb093T5vdL26n8dMui2n7pYurRj7JzfNGL+d2J+LpxtzGEsXJ6oR0Fz7ZdfIPXa23J1FV1dw7wMvfWK9PGR8vr9c9/MoWAVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARbOMnqRqSqUoucJtzajrlCT1y1cqvd6uc16WtGMWHN4JW9oq/wqn1F3xKe4cDre01f4U/qHxKe4gm7PcNjK9bhGGoTlNxUalKUJwU0r6LjK2p8mvUcxqxS3qiYn9ETCM/eJm37NrfGpfaLf5uv0/mEYPvDzX9m1vjUvtD+bp9P5hOGS3C5r+za3xqX2jqONp9P5hOIesdxWaL/AEyv8al9otj+Iacf4/mExMNvB7hs2qzVOOBdC+2tXqU4wh02TbZN/wCKR6cUriffP+odepeW5DIIZdgaWEhLS3pNzns06knecuu54lpzLh2CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z"
                alt=""
              />
            </Row>
          </Container>
        </Col>

        <Col xs={12} md={6} className="bg-dark text-light">
          <Container>
            <Col className="d-flex flex-column mt-3">
              <Container>
                <Row>
                  <span className="mb-2">
                    <Link>iPhone 14 Pro Max 256 GB</Link>
                  </span>
                  <span className="mb-2">
                    <Link>Apple</Link>
                  </span>
                  <span className="d-flex mb-2">
                    <div
                      className="me-2"
                      style={{
                        height: "20px",
                        width: "20px",
                        borderRadius: "50%",
                        background: "#F57538",
                      }}
                    ></div>
                    <Link>Satıcı</Link>
                  </span>
                  <hr></hr>
                </Row>
              </Container>

              <Container className="d-flex mb-3">
                <div className="me-auto ">
                  <span>48.599 TL</span>
                </div>
                <div className="d-flex flex-column p-2">
                  <span>
                    <RatingComp value={3.5} color={"#F57538"} />
                  </span>
                  <span>2500 Değerlendirme</span>
                </div>
              </Container>
              <hr></hr>
            </Col>
            <Col>
              <Container className="d-flex justify-content-center ">
                <Button
                  style={{
                    background: "#F57538",
                    borderRadius: "5px",
                    border: "none",
                  }}
                >
                  -
                </Button>
                <span
                  style={{ borderRadius: "5px", border: "none" }}
                  className="d-flex  flex-columnn justify-content-center align-items-center bg-secondary text-dark"
                >
                  0 Adet
                </span>
                <Button
                  className="me-5"
                  style={{
                    background: "#F57538",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  +
                </Button>

                <Button
                  style={{
                    border: "none",
                    background: "#F57538",
                    borderRadius: "5px",
                  }}
                >
                  Sepete Ekle
                </Button>
              </Container>
              <hr />
            </Col>
            <Col>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Assumenda, quo cum. Quo, excepturi!</li>
                <li>Veniam inventore voluptate nemo possimus.</li>
                <li>Neque tempora iure doloremque pariatur.</li>
                <li>Autem dolore quasi nisi consequuntur.</li>
              </ul>
            </Col>
          </Container>
        </Col>

        <Col>
          <Container className="my-3">
            <Row>
              <Col>
                <Products obj={"İlgini çekebilecek benzer ürünler"} />
              </Col>
            </Row>
          </Container>
          <hr></hr>
          <Container>
            <Row>
              <Col>
                <Products obj={"Sıklıkla birlikte alınanlar"} />
              </Col>
            </Row>
          </Container>
          <hr></hr>

          <Col>
            <Navs />
          </Col>

          <Container>
            <Row>
              <Col>
                <Comment />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetailPage;
