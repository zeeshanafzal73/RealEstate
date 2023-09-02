import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import property1 from "./Static/img/agent-1.jpg";
import property2 from "./Static/img/agent-2.jpg";
import property3 from "./Static/img/agent-3.jpg";
import './Navbar/Navbar.css'


const agentData = [
  {
    imageSrc: property1,
    title: "Margaret Sotillo",
    description:
      "Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two",
    phone: "+54 356 945234",
    email: "agents@example.com",
  },
  {
    imageSrc: property2,
    title: "Margaret Sotillo",
    description:
      "Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two",
    phone: "+54 356 945234",
    email: "agents@example.com",
  },
  {
    imageSrc: property3,
    title: "Margaret Sotillo",
    description:
      "Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two",
    phone: "+54 356 945234",
    email: "agents@example.com",
  },
];

export const Agents = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="title-wrap d-flex justify-content-between">
            <div className="title-box">
              <h2 className="title-a">Best Agents</h2>
            </div>
            <div className="title-link">
              <a href="agents-grid.html">
              <strong>All Agents </strong>  
              <FontAwesomeIcon icon={faChevronRight}/>
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        {agentData.map((agent, index) => (
          <Col md={4} key={index}>
            <Card className="card-box-d">
              <div className="card-img-d">
                <Card.Img
                  src={agent.imageSrc}
                  alt=""
                  className="img-d img-fluid"
                />
              </div>
              <div className="card-overlay card-overlay-hover">
                <Card.Header className="card-header-d">
                  <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                      <a href="agent-single.html" className="link-two">
                        {agent.title}
                      </a>
                    </h3>
                  </div>
                </Card.Header>
                <Card.Body className="card-body-d">
                  <p className="content-d color-text-a">{agent.description}</p>
                  <div className="info-agents color-a">
                    <p>
                      <strong>Phone: </strong> {agent.phone}
                    </p>
                    <p>
                      <strong>Email: </strong> {agent.email}
                    </p>
                  </div>
                </Card.Body>
                <Card.Footer className="card-footer-d">
                  <div className="socials-footer d-flex justify-content-center">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Card.Footer>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
