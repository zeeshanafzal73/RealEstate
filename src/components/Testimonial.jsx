import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import testim1 from "./Static/img/mini-testimonial-2.jpg";
import testim2 from "./Static/img/mini-testimonial-1.jpg";

const testiMonial = [
  {
    imgSrc: testim1,
    textTitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cupiditate ea nam praesentium debitis hic ber quibusdam voluptatibus officia expedita corpori.",
    author: "Albert & Erika",
  },
  {
    imgSrc: testim2,
    textTitle:
      "I was getting the same error while trying to run  when imported component for testing wasn't imported right.So in my case it was.",
    author: "Erika",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === testiMonial.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change testimonial every 5 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="section-testimonials section-t8 nav-arrow-a">
      <Container>
        <Row>
          <Col md={12}>
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Testimonials</h2>
              </div>
            </div>
          </Col>
        </Row>

        <div id="testimonial-carousel" className="swiper">
          <div className="swiper-wrapper">
            <div className="carousel-item-a swiper-slide">
              <div className="testimonials-box">
                <Row>
                  <Col sm={12} md={6}>
                    <div className="testimonial-img">
                      <Image
                        src={testiMonial[index].imgSrc}
                        alt=""
                        width="350px"
                        height="400px"
                      />
                    </div>
                  </Col>
                  <Col sm={12} md={6}>
                    <div className="testimonial-ico">
                      <FontAwesomeIcon icon={faQuoteLeft} />
                    </div>
                    <div className="testimonials-content">
                      <p className="testimonial-text">
                        {testiMonial[index].textTitle}
                      </p>
                    </div>
                    <div className="testimonial-author-box">
                      <Image
                        src="assets/img/mini-testimonial-1.jpg"
                        alt=""
                        className="testimonial-avatar"
                      />
                      <h5 className="testimonial-author">
                        {testiMonial[index].author}
                      </h5>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
