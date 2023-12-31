import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

export const Contact = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios("http://127.0.0.1:8000/about/");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      axios.post("http://127.0.0.1:8000/contactus/", {
        name,
        email,
        comment,
      });
    } catch (err) {
      console.log("Error", err);
    }
    // Clear the input fields
    setName("");
    setEmail("");
    setComment("");
    setMessage("Message Sent Successfully");
  };

  return (
    <>
      {data.map((item, index) => (
        <section
          className="intro-single"
          key={index}
          style={{ marginTop: "-6rem" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="title-single-box">
                  <h1 className="title-single">Contact Us</h1>
                  <span className="color-text-a">{item.about}.</span>
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
                    <li
                      className="breadcrumb-item active"
                      aria-current="page"
                      key={index}
                    >
                      Contact
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
      ))}
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-map box">
                <div id="map" className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses-419!2sve!4v1510329142834"
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-sm-12 section-t8">
              <div className="row">
                <div className="col-md-7">
                  <form className="form-a" onSubmit={submitHandler}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-lg form-control-a"
                            id="Name"
                            name="Name"
                            value={name}
                            placeholder="Name *"
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-lg form-control-a"
                            id="Email"
                            name="Email"
                            value={email}
                            placeholder="Email *"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12 mb-3">
                        <div className="form-group">
                          <textarea
                            id="Comment"
                            className="form-control"
                            placeholder="Message *"
                            name="Comment"
                            value={comment}
                            cols="45"
                            rows="8"
                            onChange={(e) => {
                              setComment(e.target.value);
                            }}
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button type="submit" className="btn btn-a">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                  {message && <p className="text-success">{message}</p>}
                </div>
                {data.map((item, index) => (
                  <div className="col-md-5 section-md-t3" key={index}>
                    <div className="icon-box section-b2">
                      <div className="icon-box-icon">
                        <span className="bi bi-envelope"></span>
                      </div>
                      <div className="icon-box-content table-cell">
                        <div className="icon-box-title">
                          <h4 className="icon-title">Say Hello</h4>
                        </div>
                        <div className="icon-box-content">
                          <p className="mb-1">
                            <strong>Email:</strong>
                            <span className="color-a">{item.email}</span>
                          </p>
                          <p className="mb-1">
                            <strong>Phone:</strong>
                            <span className="color-a">{item.phone}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="icon-box section-b2" key={index}>
                      <div className="icon-box-icon">
                        <span className="bi bi-geo-alt"></span>
                      </div>
                      <div className="icon-box-content table-cell">
                        <div className="icon-box-title">
                          <h4 className="icon-title">Find us in</h4>
                        </div>
                        <div className="icon-box-content">
                          <p className="mb-1">
                            {item.address}
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="icon-box">
                      <div className="icon-box-icon">
                        <span className="bi bi-share"></span>
                      </div>
                      <div className="icon-box-content table-cell">
                        <div className="icon-box-title">
                          <h4 className="icon-title">Social networks</h4>
                        </div>
                        <div className="icon-box-content">
                          <div className="socials-footer">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <a href="#" className="link-one">
                                  <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#" className="link-one">
                                  <FontAwesomeIcon icon={faTwitter} />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#" className="link-one">
                                  <FontAwesomeIcon icon={faInstagram} />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#" className="link-one">
                                  <FontAwesomeIcon icon={faGithub} />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#" className="link-one">
                                  <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
