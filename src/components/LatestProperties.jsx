import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Property } from "./Pages/Property";

export const LatestProperties = () => {
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
    <>
      <Container>
        <Row style={{marginTop:'4rem'}}>
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
        <Row style={{marginBottom:'-4rem'}}>
          {/* Optional content */}
          <Carousel
            id="property-carousel"
            className="mx-auto"
            style={{
              marginTop: "0rem",
              marginBottom: "8rem",
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
                            src={property.image}
                            alt=""
                            className="img-a img-fluid"
                          />
                        </div>
                        <div className="card-overlay">
                          <div className="card-overlay-a-content">
                            <div className="card-header-a">
                              <h2 className="card-title-a">
                                <a href="property-single.html">
                                  {property.title}
                                </a>
                              </h2>
                            </div>
                            <div className="card-body-a">
                              <div className="price-box d-flex">
                                <span className="price-a">
                                  rent | $ {property.price}
                                </span>
                              </div>
                              <div className="price-box d-flex">
                                <span className="price-a">
                                  {property.category}
                                </span>
                              </div>
                              <Link to={`/SingleProperty/${property.id}`} className="link-a">
                                Click here to view
                                <span className="bi bi-chevron-right"></span>
                              </Link>
                            </div>
                            <div className="card-footer-a">
                              <ul className="card-info d-flex justify-content-around">
                                <li>
                                  <h4 className="card-info-title">Area</h4>
                                  <span>{property.area}m²</span>
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
