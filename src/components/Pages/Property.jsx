import axios from "axios";
import React, {useState,useEffect} from "react";
import {
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";



export const Property = () => {
  const [propertyData, setPropertyData]= useState([])

useEffect(()=>{
  const fetch = async ()=>{
    try{ 
      const res = await axios.get('http://127.0.0.1:8000/property/')
      setPropertyData(res.data) 
  }
  catch(err){
    console.log(err)
  }
}
fetch()  
},[])
 
  return (
    <>
      <section className="intro-single" style={{marginTop :'-6rem'}}>
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
                      src={property.image}
                      alt=""
                      className="img-a img-fluid"
                    />
                  </div>
                  <div className="card-overlay">
                    <div className="card-overlay-a-content">
                      <div className="card-header-a">
                        <h2 className="card-title-a">
                          <Link to={`/SingleProperty/${property.id}`}>{property.title}</Link>
                        </h2>
                      </div>
                      <div className="card-body-a">
                        <div className="price-box d-flex">
                          <span className="price-a">{property.price}</span>
                        </div>
                        <div className="price-box d-flex">
                          <span className="price-a">{property.category}</span>
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
