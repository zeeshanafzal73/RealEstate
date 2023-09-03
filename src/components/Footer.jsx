import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  const styleColor = { textDecoration: "none", color: "black" };
  return (
    <footer className="section-footer">
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <div className="widget-a">
              <div className="w-header-a">
                <h3 className="w-title-a text-brand">EstateAgency</h3>
              </div>
              <div className="w-body-a">
                <p className="w-text-a color-text-a">
                  Enim minim veniam quis nostrud exercitation ullamco laboris
                  nisi ut aliquip exea commodo consequat duis sed aute irure.
                </p>
              </div>
              <div className="w-footer-a">
                <ul className="list-unstyled">
                  <li className="color-a">
                    <span className="color-text-a">Phone .</span>
                    contact@example.com
                  </li>
                  <li className="color-a">
                    <span className="color-text-a">Email .</span> +54 356 945234
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4} className="section-md-t3">
            <div className="widget-a">
              <div className="w-header-a">
                <h3 className="w-title-a text-brand">The Company</h3>
              </div>
              <div className="w-body-a">
                <div className="w-body-a">
                  <ul className="list-unstyled">
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right"></i>
                      <a href="#" style={styleColor}>
                        Site Map
                      </a>
                    </li>
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right"></i>
                      <a href="#" style={styleColor}>
                        Legal
                      </a>
                    </li>
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right"></i>
                      <a href="#" style={styleColor}>
                        Agent Admin
                      </a>
                    </li>
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right"></i>
                      <a href="#" style={styleColor}>
                        Careers
                      </a>
                    </li>
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right"></i>
                      <a href="#" style={styleColor}>
                        Affiliate
                      </a>
                    </li>
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right"></i>
                      <a href="#" style={styleColor}>
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4} className="section-md-t3">
            <div className="widget-a">
              <div className="w-header-a">
                <h3 className="w-title-a text-brand" style={styleColor}>
                  International sites
                </h3>
              </div>
              <div className="w-body-a">
                <ul className="list-unstyled">
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right"></i>
                    <a href="#" style={styleColor}>
                      Venezuela
                    </a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right"></i>
                    <a href="#" style={styleColor}>
                      China
                    </a>
                  </li>
                  <li className="item-list-a">
                    <a href="#" style={styleColor}>
                      Hong Kong
                    </a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right"></i>
                    <a href="#" style={styleColor}>
                      Argentina
                    </a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right"></i>
                    <a href="#" style={styleColor}>
                      Singapore
                    </a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right"></i>
                    <a href="#" style={styleColor}>
                      Philippines
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
