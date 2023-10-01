import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Property.css";

export const LatestProperties = () => {
  const [propertyData, setPropertyData] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/property/");
        setPropertyData(res.data);
      } catch (err) {
        console.log("error", err);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="property-grid grid">
      <Container>
        <Row style={{ marginTop: "8rem" }}>
          <Col md={12}>
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Latest Properties</h2>
              </div>
              <div className="title-link">
                <Link to="/property">
                  <strong>All Properties </strong>
                  <FontAwesomeIcon icon={faChevronRight} />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Slider {...settings}>
            {propertyData.map((property, index) => (
              <Col md={4} key={index}>
                <div className="agent-slide">
                  <div className="card-box-a card-shadow">
                    <div className="img-box-a">
                      <img
                        src={property.image}
                        alt=""
                        className="img-a img-fluid"
                      />
                    </div>
                    <div className="card-overlay">
                      <div className="card-overlay-a-content">
                        <div className="card-header-a">
                          <h2 className="card-title-a">
                            <Link to={`/SingleProperty/${property.id}`}>
                              {property.title}
                            </Link>
                          </h2>
                        </div>
                        <div className="card-body-a">
                          <div className="price-box d-flex">
                            <span className="price-a">{property.price}</span>
                          </div>
                          <div className="price-box d-flex">
                            <span className="price-a">{property.category}</span>
                          </div>
                          <a href="#" className="link-a">
                            Click here to view
                            <span className="bi bi-chevron-right"></span>
                          </a>
                        </div>
                        <div className="card-footer-a">
                          <ul className="card-info d-flex justify-content-around">
                            <li>
                              <h4 className="card-info-title">Area</h4>
                              <span>{property.area}</span>
                            </li>
                            <li>
                              <h4 className="card-info-title">Beds</h4>
                              <span>{property.beds}</span>
                            </li>
                            <li>
                              <h4 className="card-info-title">Baths</h4>
                              <span>{property.baths}</span>
                            </li>
                            <li>
                              <h4 className="card-info-title">Garages</h4>
                              <span>{property.garages}</span>
                            </li>
                          </ul>
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
  );
};
