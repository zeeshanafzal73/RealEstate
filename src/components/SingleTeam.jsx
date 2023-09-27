import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";



export const SingleTeam = () => {
  const { tid } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`http://127.0.0.1:8000/team/${tid}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, [tid]); // Make sure to include 'aid' in the dependency array to fetch data when it changes

  return (
    <>
      <div style={{ marginTop: "8rem" }}>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="row">
                <div class="col-md-6">
                  <div class="agent-avatar-box">
                    <img
                      src={data && data.imageSrc}
                      alt=""
                      class="agent-avatar img-fluid"
                    />
                  </div>
                </div>
                <div class="col-md-5 section-md-t3">
                  <div class="agent-info-box">
                    <div class="agent-title">
                      <div class="title-box-d">
                        <h3 class="title-d">
                          {data && data.title}
                          <br /> 
                        </h3>
                      </div>
                    </div>
                    <div class="agent-content mb-3">
                      <p class="content-d color-text-a">
                        {data && data.description}
                      </p>
                      <div class="info-agents color-a">
                        <p>
                          <strong>Phone: </strong>
                          <span class="color-text-a"> {data && data.phone}</span>
                        </p>
                        <p>
                          <strong>Email: </strong>
                          <span class="color-text-a"> {data && data.email}</span>
                        </p>
                      </div>
                    </div>
                    <div class="socials-footer">
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <a href="#" class="link-one">
                            <i class="bi bi-facebook" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <Link to="#" class="link-one">
                          <FontAwesomeIcon icon={faFacebook} />
                          </Link>
                        </li>
                        <li class="list-inline-item">
                          <Link to="#" class="link-one">
                          <FontAwesomeIcon icon={faTwitter} />
                          </Link>
                        </li>
                        <li class="list-inline-item">
                          <Link to="#" class="link-one">
                          <FontAwesomeIcon icon={faLinkedin} />
                          </Link>
                        </li>
                      </ul>
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
