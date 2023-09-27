import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


export const SingleNews = () => {
  const { nid } = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`http://127.0.0.1:8000/news/${nid}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, [nid]); // Make sure to include 'nid' in the dependency array to fetch data when it changes

  return (
    <>
      <div style={{ marginTop: "8rem" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">{data && data.title}</h1>
                <span className="color-text-a">News Single.</span>
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
                  <li className="breadcrumb-item active" aria-current="page">
                    {data && data.title}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="news-img-box" style={{ marginTop: "2rem" }}>
                <img src={data && data.imageSrc} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <div className="post-information">
                <ul className="list-inline text-center color-a">
                  <li className="list-inline-item mr-2">
                    <strong>Author: </strong>
                    <span className="color-text-a">{data && data.author}</span>
                  </li>
                  <li className="list-inline-item mr-2">
                    <strong>Category: </strong>
                    <span className="color-text-a">
                      {data && data.category}
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <strong>Date: </strong>
                    <span className="color-text-a">{data && data.date}</span>
                  </li>
                </ul>
              </div>
              <div className="post-content color-text-a">
                <p className="post-intro">{data && data.description}</p>
                <p>{data && data.paragraphShort}</p>
                <p>{data && data.paragraphLong}</p>
                <blockquote className="blockquote">
                  <p className="mb-4"> {data && data.quote}</p>
                  <footer className="blockquote-footer">
                    <strong>{data&&data.author}</strong>
                    <cite title="Source Title"> Author</cite>
                  </footer>
                </blockquote>
                <p>
               {data && data.paragraph}
                </p>
              </div>
              <div className="post-footer">
                <div className="post-share">
                  <span>Share: </span>
                  <ul className="list-inline socials">
                    <li className="list-inline-item">
                      <Link to="#">
                    <FontAwesomeIcon icon={faFacebookF}/>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#">
                      <FontAwesomeIcon icon={faTwitter}/>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#">
                      <FontAwesomeIcon icon={faInstagram}/>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#">
                      <FontAwesomeIcon icon={faLinkedin}/>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-10 offset-md-1 col-lg-10 offset-lg-1">
              <div className="title-box-d">
                <h3 className="title-d">Comments (4)</h3>
              </div>
              <div className="box-comments">
                <ul className="list-comments">
                  <li>
                    <div className="comment-avatar">
                      <img src="assets/img/author-2.jpg" alt="" />
                    </div>
                    <div className="comment-details">
                      <h4 className="comment-author">Emma Stone</h4>
                      <span>18 Sep 2017</span>
                      <p className="comment-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolores reprehenderit, provident cumque ipsam
                        temporibus maiores quae natus libero optio, at qui
                        beatae ducimus placeat debitis voluptates amet corporis.
                      </p>
                      <a href="3">Reply</a>
                    </div>
                  </li>
                  <li className="comment-children">
                    <div className="comment-avatar">
                      <img src="assets/img/author-1.jpg" alt="" />
                    </div>
                    <div className="comment-details">
                      <h4 className="comment-author">Oliver Colmenares</h4>
                      <span>18 Sep 2017</span>
                      <p className="comment-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolores reprehenderit, provident cumque ipsam
                        temporibus maiores quae.
                      </p>
                      <a href="3">Reply</a>
                    </div>
                  </li>
                  <li>
                    <div className="comment-avatar">
                      <img src="assets/img/author-2.jpg" alt="" />
                    </div>
                    <div className="comment-details">
                      <h4 className="comment-author">Emma Stone</h4>
                      <span>18 Sep 2017</span>
                      <p className="comment-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolores reprehenderit, provident cumque ipsam
                        temporibus maiores quae natus libero optio.
                      </p>
                      <a href="3">Reply</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="form-comments">
                <div className="title-box-d">
                  <h3 className="title-d"> Leave a Reply</h3>
                </div>
                <form className="form-a">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label for="inputName">Enter name</label>
                        <input
                          type="text"
                          className="form-control form-control-lg form-control-a"
                          id="inputName"
                          placeholder="Name *"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label for="inputEmail1">Enter email</label>
                        <input
                          type="email"
                          className="form-control form-control-lg form-control-a"
                          id="inputEmail1"
                          placeholder="Email *"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="form-group">
                        <label for="inputUrl">Enter website</label>
                        <input
                          type="url"
                          className="form-control form-control-lg form-control-a"
                          id="inputUrl"
                          placeholder="Website"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="form-group">
                        <label for="textMessage">Enter message</label>
                        <textarea
                          id="textMessage"
                          className="form-control"
                          placeholder="Comment *"
                          name="message"
                          cols="45"
                          rows="8"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
