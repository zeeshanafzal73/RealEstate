import React, { useState, useEffect } from "react";
import "./Navbar/Navbar.css";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const LatestNews = () => {
  const [propertyData, setPropertyData] = useState([]);

  const itemsPerSlide = 3; // Number of items per slide

  // Split property data into groups of itemsPerSlide
  const groupedPropertyData = [];
  for (let i = 0; i < propertyData.length; i += itemsPerSlide) {
    groupedPropertyData.push(propertyData.slice(i, i + itemsPerSlide));
  }

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/news/");
        setPropertyData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <Container>
        <Row style={{ marginTop: "4rem",marginBottom :"-8rem" }}>
          <Col md={12}>
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Latest Properties</h2>
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
          {/* Optional content */}
          <Carousel
            id="property-carousel"
            className="mx-auto"
            style={{
              marginTop: "8rem",
              marginBottom: "2rem",
              width: "1300px", // Set your desired width
              textAlign: "center",
            }}
            activeIndex={index}
            onSelect={handleSelect}
            interval={3000}
            pause={false}
          >
            {groupedPropertyData.map((group, groupIndex) => (
              <Carousel.Item key={groupIndex}>
                <div className="row">
                  {group.map((property, propertyIndex) => (
                    <div className="col-md-4" key={propertyIndex}>
                      <div className="card-box-a card-shadow">
                        <div className="img-box-a">
                          <img
                            src={property.imageSrc}
                            alt=""
                            className="img-a img-fluid"
                            //   style={{ width: "30px", height: "auto" }}
                          />
                        </div>
                        <div className="card-overlay">
                          <div className="card-overlay-a-content">
                            <div className="card-header-a">
                              <div className="price-box d-flex">
                                <span className="price-a">
                                  {property.category}
                                </span>
                              </div>
                              <h2 className="card-title-a">
                                <a href="property-single.html">
                                  {property.title}
                                </a>
                              </h2>
                            </div>
                            <div className="card-body-a">
                              <div className="card-date">
                                <span className="date-b text-white">
                                  {property.date}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Row>
      </Container>
    </>
  );
};
