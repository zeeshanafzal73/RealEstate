import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export const SingleProperty = () => {
  const { pid } = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`http://127.0.0.1:8000/property/${pid}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, [pid]); // Make sure to include 'pid' in the dependency array to fetch data when it changes

  return (
    <>
      <div style={{ marginTop: "8rem" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single"> {data && data.title}</h1>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <nav
                aria-label="breadcrumb"
                className="breadcrumb-box d-flex justify-content-lg-end"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link
                      to="/home"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link
                      to="/property"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Properties
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {data && data.title}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: "4rem" }}>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div id="property-single-carousel" className="swiper">
                <div className="swiper-wrapper">
                  <div className="carousel-item-b swiper-slide">
                    <img src={data && data.image} alt="" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div
                    className="row justify-content-between"
                    style={{ marginTop: "4rem" }}
                  >
                    <div className="col-md-5 col-lg-4">
                      <div className="property-price d-flex justify-content-center foo">
                        <div className="card-header-c d-flex">
                          <div className="card-box-ico">
                            <span className="bi bi-cash">$</span>
                          </div>
                          <div className="card-title-c align-self-center">
                            <h5 className="title-c">{data && data.price}</h5>
                          </div>
                        </div>
                      </div>
                      <div className="property-summary">
                        <div className="row">
                          <div className="col-sm-12">
                            <div
                              className="title-box-d section-t4"
                              style={{ marginTop: "4rem" }}
                            >
                              <h3 className="title-d">Quick Summary</h3>
                            </div>
                          </div>
                        </div>
                        <div className="summary-list">
                          <ul className="list">
                            <li className="d-flex justify-content-between">
                              <strong>Location:</strong>
                              <span>{data && data.location}</span>
                            </li>
                            <li className="d-flex justify-content-between">
                              <strong>Property Type:</strong>
                              <span>{data && data.type}</span>
                            </li>
                            <li className="d-flex justify-content-between">
                              <strong>Status:</strong>
                              <span>{data && data.category}</span>
                            </li>
                            <li className="d-flex justify-content-between">
                              <strong>Area:</strong>
                              <span>
                                {data && data.area}m<sup>2</sup>
                              </span>
                            </li>
                            <li className="d-flex justify-content-between">
                              <strong>Beds:</strong>
                              <span>{data && data.beds}</span>
                            </li>
                            <li className="d-flex justify-content-between">
                              <strong>Baths:</strong>
                              <span>{data && data.baths}</span>
                            </li>
                            <li className="d-flex justify-content-between">
                              <strong>Garage:</strong>
                              <span>{data && data.garages}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 col-lg-7 section-md-t3">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="title-box-d">
                            <h3 className="title-d">Property Description</h3>
                          </div>
                        </div>
                      </div>
                      <div className="property-description">
                        <p className="description color-text-a">
                          {data && data.description}
                        </p>
                      </div>
                      <div class="row section-t3">
                        <div class="col-sm-12">
                          <div class="title-box-d">
                            <h3 class="title-d">Amenities</h3>
                          </div>
                        </div>
                      </div>
                      <div class="amenities-list color-text-a">
                        <ul class="list-a no-margin">
                          <li>Balcony</li>
                          <li>Kitchen</li>
                          <li>Cable Tv</li>
                          <li>Deck</li>
                          <li>Tennis Courts</li>
                          <li>Internet</li>
                          <li>Parking</li>
                          <li>Sun Room</li>
                          <li>Concrete</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
