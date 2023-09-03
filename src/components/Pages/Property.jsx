import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import property1 from "./../Static/img/property-1.jpg";
import property2 from "./../Static/img/property-2.jpg";
import property3 from "./../Static/img/property-3.jpg";
import property4 from "./../Static/img/property-4.jpg";
import property5 from "./../Static/img/property-5.jpg";
import property6 from "./../Static/img/property-6.jpg";
import property7 from "./../Static/img/property-7.jpg";
import property8 from "./../Static/img/property-8.jpg";
import property9 from "./../Static/img/property-9.jpg";
import property10 from "./../Static/img/property-10.jpg";
import { Link } from "react-router-dom";

const propertyData = [
  {
    imageSrc: property1,
    title: "206 Mount Olive Road Two",
    price: "rent | $ 12.000",
    area: "340m²",
    beds: "2",
    baths: "4",
    garages: "1",
  },
  {
    imageSrc: property2,
    title: "157 West Central Park",
    price: "rent | $ 12.000",
    area: "340m²",
    beds: "2",
    baths: "4",
    garages: "1",
  },
  {
    imageSrc: property3,
    title: "245 Azabu Nishi Park let",
    price: "rent | $ 12.000",
    area: "340m²",
    beds: "2",
    baths: "4",
    garages: "1",
  },
  {
    imageSrc: property4,
    title: "204 Montal South Bela Two",
    price: "rent | $ 12.000",
    area: "340m²",
    beds: "2",
    baths: "4",
    garages: "1",
  },
  {
    imageSrc: property5,
    title: "204 Montal South Bela Two",
    price: "rent | $ 12.000",
    area: "340m²",
    beds: "2",
    baths: "4",
    garages: "1",
  },
  {
    imageSrc: property6,
    title: "204 Montal South Bela Two",
    price: "rent | $ 12.000",
    area: "340m²",
    beds: "2",
    baths: "4",
    garages: "1",
  },
  {
    imageSrc: property7,
    title: "204 Montal South Bela Two",
    price: "rent | $ 12.000",
    area: "340m²",
    beds: "2",
    baths: "4",
    garages: "1",
  },
  {
    imageSrc: property8,
    title: "204 Montal South Bela Two",
    price: "rent | $ 12.000",
    area: "340m²",
    beds: "2",
    baths: "4",
    garages: "1",
  },
  {
    imageSrc: property9,
    title: "204 Montal South Bela Two",
    price: "rent | $ 12.000",
    area: "340m²",
    beds: "2",
    baths: "4",
    garages: "1",
  },
  {
    imageSrc: property10,
    title: "204 Montal South Bela Two",
    price: "rent | $ 12.000",
    area: "340m²",
    beds: "2",
    baths: "4",
    garages: "1",
  },
];
export const Property = () => {
  return (
    <>
      <section className="intro-single">
        <Container>
          <Row>
            <Col md={8}>
              <div className="title-single-box">
                <h1 className="title-single">Our Amazing Properties</h1>
                <span className="color-text-a">Grid Properties</span>
              </div>
            </Col>
            <Col md={4}>
              <nav
                aria-label="breadcrumb"
                className="breadcrumb-box d-flex justify-content-lg-end"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home" style={{textDecoration:"none", color:"black"}}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Properties Grid
                  </li>
                </ol>
              </nav>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Property Grid */}
      <section className="property-grid grid">  
        <Container>
          <Row >
            <Col sm={12} className="text-end">
              <div className="grid-option" >
                <Form>
                  <Form.Select className="custom-select">
                    <option selected>All</option>
                    <option value="1">New to Old</option>
                    <option value="2">For Rent</option>
                    <option value="3">For Sale</option>
                  </Form.Select>
                </Form>
              </div>
            </Col>
            {propertyData.map((property, index) => (
              <Col md={4} key={index}>
                <div className="card-box-a card-shadow">
                  <div className="img-box-a">
                    <img
                      src={property.imageSrc}
                      alt=""
                      className="img-a img-fluid"
                    />
                  </div>
                  <div className="card-overlay">
                    <div className="card-overlay-a-content">
                      <div className="card-header-a">
                        <h2 className="card-title-a">
                          <a href="property-single.html">{property.title}</a>
                        </h2>
                      </div>
                      <div className="card-body-a">
                        <div className="price-box d-flex">
                          <span className="price-a">{property.price}</span>
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
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};
