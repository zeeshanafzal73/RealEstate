import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";

export const Team = () => {
  const [agentData, setAgentData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/team/")
      .then((res) => {
        setAgentData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="title-wrap d-flex justify-content-between">
          <div className="title-box">
              <h2 className="title-a">Team Members</h2>
            </div>
            <div className="title-link">
              <Link to="#">
                <strong>All Team Members </strong>
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        {agentData.map((agent) => (
          <Col md={4} key={agent.id}>
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
                      <Link to={`/SingleTeam/${agent.id}`} className="link-two">
                        {agent.title}
                      </Link>
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
