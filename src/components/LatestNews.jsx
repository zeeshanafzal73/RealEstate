import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./News.css";

export const LatestNews = () => {
  const [newsData, setNewsData] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/news/");
        setNewsData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNews();
  }, []);

  return (
    <>
      <section className="news-grid grid">
        <Container>
          <Row style={{ marginTop: "8rem" }}>
            <Col md={12}>
              <div className="title-wrap d-flex justify-content-between">
                <div className="title-box">
                  <h2 className="title-a">Latest News</h2>
                </div>
                <div className="title-link">
                  <Link to="/blogs">
                    <strong>All News </strong>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Slider {...settings}>
              {newsData.map((data, index) => (
                <Col md={4} key={index}>
                  <div className="agent-slide">
                    <div className="card-box-b card-shadow news-box">
                      <div className="img-box-b">
                        <img
                          src={data.imageSrc}
                          alt=""
                          className="img-b img-fluid"
                        />
                      </div>
                      <div className="card-overlay">
                        <div className="card-header-b">
                          <div className="card-category-b">
                            <a href="#" className="category-b">
                              {data.category}
                            </a>
                          </div>
                          <div className="card-title-b">
                            <h2 className="title-2">
                              <Link to={`/SingleNews/${data.id}`}>
                                {data.title}
                                <br /> new
                              </Link>
                            </h2>
                          </div>
                          <div className="card-date">
                            <span className="date-b">{data.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Slider>
          </Row>
        </Container>
      </section>
    </>
  );
};
